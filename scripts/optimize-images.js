import sharp from 'sharp';
import { readdir, stat, mkdir, rename, unlink } from 'fs/promises';
import { join, dirname, extname, basename } from 'path';
import { existsSync } from 'fs';
import { tmpdir } from 'os';

// Configuración de optimización
const CONFIG = {
  // Ancho máximo para imágenes web (1920px es estándar para full HD)
  maxWidth: 1920,
  // Calidad para JPEG (85 es un buen balance entre calidad y tamaño)
  jpegQuality: 85,
  // Calidad para PNG (compresión)
  pngQuality: 90,
  // Directorios a optimizar
  directories: [
    'src/assets',
    'assets/hero',
    'assets'
  ],
  // Extensiones a procesar
  extensions: ['.jpg', '.jpeg', '.png'],
  // Crear backup de imágenes originales
  createBackup: true,
  backupDir: 'assets-originals'
};

// Función para obtener el tamaño del archivo en formato legible
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Función para optimizar una imagen
async function optimizeImage(inputPath, outputPath, backupPath = null) {
  try {
    const stats = await stat(inputPath);
    const originalSize = stats.size;
    
    // Crear backup si es necesario (copiar archivo directamente)
    if (CONFIG.createBackup && backupPath) {
      const backupDir = dirname(backupPath);
      if (!existsSync(backupDir)) {
        await mkdir(backupDir, { recursive: true });
      }
      const { copyFile } = await import('fs/promises');
      await copyFile(inputPath, backupPath);
    }

    // Obtener metadata de la imagen
    const metadata = await sharp(inputPath).metadata();
    const ext = extname(inputPath).toLowerCase();
    
    // Determinar si necesita redimensionar
    const needsResize = metadata.width > CONFIG.maxWidth;
    const targetWidth = needsResize ? CONFIG.maxWidth : metadata.width;
    
    // Crear pipeline de sharp
    let pipeline = sharp(inputPath);
    
    // Redimensionar si es necesario
    if (needsResize) {
      pipeline = pipeline.resize(targetWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Aplicar optimizaciones según el tipo de archivo
    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ 
        quality: CONFIG.jpegQuality,
        progressive: true,
        mozjpeg: true
      });
    } else if (ext === '.png') {
      pipeline = pipeline.png({ 
        quality: CONFIG.pngQuality,
        compressionLevel: 9,
        adaptiveFiltering: true
      });
    }
    
    // Usar archivo temporal para evitar conflictos
    const tempPath = join(tmpdir(), `optimize-${Date.now()}-${basename(outputPath)}`);
    
    try {
      // Guardar en archivo temporal primero
      await pipeline.toFile(tempPath);
      
      // Reemplazar el archivo original con el optimizado
      // Intentar usar rename primero (más eficiente), si falla usar copyFile
      const { rename, copyFile, unlink } = await import('fs/promises');
      try {
        // Si el archivo de destino existe, eliminarlo primero
        if (existsSync(outputPath)) {
          await unlink(outputPath);
        }
        await rename(tempPath, outputPath);
      } catch (renameError) {
        // Si rename falla, intentar copyFile
        try {
          await copyFile(tempPath, outputPath);
          await unlink(tempPath);
        } catch (copyError) {
          // Limpiar temp si copy también falla
          try {
            await unlink(tempPath);
          } catch {}
          throw copyError;
        }
      }
    } catch (tempError) {
      // Limpiar archivo temporal si hay error
      try {
        if (existsSync(tempPath)) {
          await unlink(tempPath);
        }
      } catch {}
      throw tempError;
    }
    
    const newStats = await stat(outputPath);
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    return {
      success: true,
      originalSize,
      newSize,
      reduction: parseFloat(reduction),
      resized: needsResize
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

// Función para encontrar todas las imágenes en un directorio
async function findImages(dir) {
  const images = [];
  
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Recursivamente buscar en subdirectorios
        const subImages = await findImages(fullPath);
        images.push(...subImages);
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        if (CONFIG.extensions.includes(ext)) {
          images.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error leyendo directorio ${dir}:`, error.message);
  }
  
  return images;
}

// Función principal
async function main() {
  console.log('🚀 Iniciando optimización de imágenes...\n');
  
  const allImages = [];
  
  // Encontrar todas las imágenes en los directorios configurados
  for (const dir of CONFIG.directories) {
    if (existsSync(dir)) {
      console.log(`📁 Buscando imágenes en: ${dir}`);
      const images = await findImages(dir);
      allImages.push(...images);
      console.log(`   Encontradas: ${images.length} imágenes\n`);
    } else {
      console.log(`⚠️  Directorio no encontrado: ${dir}\n`);
    }
  }
  
  if (allImages.length === 0) {
    console.log('❌ No se encontraron imágenes para optimizar.');
    return;
  }
  
  console.log(`📊 Total de imágenes a optimizar: ${allImages.length}\n`);
  console.log('─'.repeat(60));
  
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let successCount = 0;
  let errorCount = 0;
  
  // Optimizar cada imagen
  for (let i = 0; i < allImages.length; i++) {
    const imagePath = allImages[i];
    const fileName = basename(imagePath);
    const relativePath = imagePath.replace(process.cwd() + '/', '');
    
    console.log(`\n[${i + 1}/${allImages.length}] Procesando: ${relativePath}`);
    
    // Crear ruta de backup si es necesario
    let backupPath = null;
    if (CONFIG.createBackup) {
      // Normalizar rutas para Windows/Unix
      const normalizedPath = imagePath.replace(/\\/g, '/');
      backupPath = normalizedPath.replace(/^(src\/)?assets/, CONFIG.backupDir).replace(/\//g, '\\');
      // Asegurar que el directorio de backup existe
      const backupDir = dirname(backupPath);
      if (!existsSync(backupDir)) {
        await mkdir(backupDir, { recursive: true });
      }
    }
    
    const result = await optimizeImage(imagePath, imagePath, backupPath);
    
    if (result.success) {
      successCount++;
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
      
      const sizeInfo = `${formatBytes(result.originalSize)} → ${formatBytes(result.newSize)}`;
      const reductionInfo = `(${result.reduction}% reducción)`;
      const resizeInfo = result.resized ? ' [Redimensionada]' : '';
      
      console.log(`   ✅ ${sizeInfo} ${reductionInfo}${resizeInfo}`);
    } else {
      errorCount++;
      console.log(`   ❌ Error: ${result.error}`);
    }
  }
  
  // Mostrar resumen
  console.log('\n' + '─'.repeat(60));
  console.log('\n📈 RESUMEN DE OPTIMIZACIÓN\n');
  console.log(`✅ Imágenes optimizadas: ${successCount}`);
  console.log(`❌ Errores: ${errorCount}`);
  console.log(`\n💾 Tamaño total original: ${formatBytes(totalOriginalSize)}`);
  console.log(`💾 Tamaño total optimizado: ${formatBytes(totalNewSize)}`);
  console.log(`📉 Reducción total: ${formatBytes(totalOriginalSize - totalNewSize)} (${((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1)}%)`);
  
  if (CONFIG.createBackup) {
    console.log(`\n💾 Backups guardados en: ${CONFIG.backupDir}/`);
  }
  
  console.log('\n✨ ¡Optimización completada!\n');
}

// Ejecutar
main().catch(console.error);

