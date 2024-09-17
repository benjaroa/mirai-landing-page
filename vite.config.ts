import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

type packageInfo = string | RegExp;
type Strategy =
  // split by default
  | 'default'
  // all files will be together
  | 'all-in-one'
  // unbundle for your source files，vite will generate one chunk for every file
  | 'unbundle';

export type CustomSplitting = Record<string, packageInfo[]>;
export interface ChunkSplitOptions {
  strategy?: Strategy;
  customSplitting?: CustomSplitting;
}

// https://vitejs.dev/config/
export default defineConfig({
  build: { 
    chunkSizeWarningLimit: 500
  },
  plugins: [
    react(),
    {
      name: "markdown-loader",
      transform(code, id) {
        if ([".mdx", ".md"].includes(id.slice(-3))) {
          // For .md files, get the raw content
          return `export default ${JSON.stringify(code)};`;
        }
      }
    },
    chunkSplitPlugin({
      strategy: 'single-vendor',
      customChunk: (args) => {
        // files into pages directory is export in single files
        let { file, id, moduleId, root } = args;
        if (file.startsWith('src/pages/')){
          file = file.substring(4);
          file = file.replace(/\.[^.$]+$/, '');
          return file;
        }
        return null;
      },
      // customSplitting: {
      //   // `react` and `react-dom` will be bundled together in the `react-vendor` chunk (with their dependencies, such as object-assign)
      //   'react-vendor': ['react', 'react-dom'],
      //   // Any file that includes `utils` in src dir will be bundled in the `utils` chunk
      //   'utils': [/src\/utils/]
      // }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
