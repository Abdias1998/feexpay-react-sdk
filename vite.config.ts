import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    lib: {
      // The entry point for the library
      entry: 'src/sdk.tsx',
      name: 'FeexPayButton',
      // The proper extensions will be added
      fileName: 'index',
      formats: ['umd', 'es'],
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    // Reduce bloat from legacy polyfills
    target: 'es2015',
    // Leave minification up to applications
    minify: 'terser',
  },
});
