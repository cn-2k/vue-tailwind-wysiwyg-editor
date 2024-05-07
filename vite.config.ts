import dts from 'vite-plugin-dts'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
    lib: {
      fileName: (type) => {
        if (type === 'es') return 'esm/vue-tailwind-editor.js';
        if (type === 'cjs') return 'vue-tailwind-editor.js';
        return 'index.js';
      },
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: [
        'vue',
      ],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue(),
    dts({
      include: 'src',
      rollupTypes: true,
      afterBuild: () => {
        // do something else
      },
    }),
  ],
  resolve: {
    alias: {
      'vue-tailwind-editor': path.resolve(__dirname, './src/index.ts'),
    },
  },
})
