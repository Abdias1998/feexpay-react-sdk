import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  build: {
    lib: {
            entry: 'src/index.tsx',
      name: 'FeexPay',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`

    },
    rollupOptions: {
      // Indiquer les externes (React ne doit pas être embarqué dans le SDK)
      
      external: [/^react($|\/.*)/, /^react-dom($|\/.*)/, /^lucide-react($|\/.*)/],
      preserveEntrySignatures: 'strict',
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'LucideReact'
        }
      }
    }
  }
});
