import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer el archivo JSON
const partnersPath = path.join(__dirname, '../src/assets/partners.json');
const partners = JSON.parse(fs.readFileSync(partnersPath, 'utf8'));

// Función para geocodificar una dirección usando Nominatim (OpenStreetMap)
async function geocodeAddress(address, district) {
  // Construir la query - agregamos Chile y Santiago para mejorar precisión
  const query = `${address}, ${district}, Santiago, Chile`;
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mirai-Landing-Page-Geocoder/1.0'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Error geocodificando "${query}":`, error.message);
    return null;
  }
}

// Función para esperar un tiempo (para respetar rate limits)
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Función principal
async function geocodeAllPartners() {
  console.log(`🗺️  Iniciando geocodificación de ${partners.length} partners...`);
  console.log('');
  
  let updated = 0;
  let skipped = 0;
  let failed = 0;
  
  for (let i = 0; i < partners.length; i++) {
    const partner = partners[i];
    
    // Si ya tiene coordenadas, saltar
    if (partner.lat && partner.lng) {
      console.log(`⏭️  [${i + 1}/${partners.length}] ${partner.name} - Ya tiene coordenadas`);
      skipped++;
      continue;
    }
    
    // Si no tiene dirección válida, saltar
    if (!partner.address || partner.address.includes('Por confirmar') || partner.address.includes('piso')) {
      console.log(`⚠️  [${i + 1}/${partners.length}] ${partner.name} - Dirección no válida: "${partner.address}"`);
      failed++;
      continue;
    }
    
    console.log(`🔍 [${i + 1}/${partners.length}] Geocodificando: ${partner.name} (${partner.address}, ${partner.district})...`);
    
    const coords = await geocodeAddress(partner.address, partner.district);
    
    if (coords) {
      partner.lat = coords.lat;
      partner.lng = coords.lng;
      console.log(`✅ Coordenadas encontradas: ${coords.lat}, ${coords.lng}`);
      updated++;
    } else {
      console.log(`❌ No se encontraron coordenadas`);
      failed++;
    }
    
    // Esperar 1 segundo entre requests para respetar rate limits de Nominatim
    if (i < partners.length - 1) {
      await sleep(1000);
    }
  }
  
  // Guardar el archivo actualizado
  fs.writeFileSync(partnersPath, JSON.stringify(partners, null, 2), 'utf8');
  
  console.log('');
  console.log('📊 Resumen:');
  console.log(`   ✅ Actualizados: ${updated}`);
  console.log(`   ⏭️  Ya tenían: ${skipped}`);
  console.log(`   ❌ Fallidos: ${failed}`);
  console.log(`   📝 Total: ${partners.length}`);
  console.log('');
  console.log(`✨ Archivo actualizado: ${partnersPath}`);
}

// Ejecutar
geocodeAllPartners().catch(console.error);

