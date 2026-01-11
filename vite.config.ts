import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig(({ command }) => {
    const isBuild = command === 'build'

    return {
        publicDir: false,
        plugins: [
            react(),
            tailwindcss(),
            tsconfigPaths(),
            ...(isBuild
                ? [
                      dts({
                          insertTypesEntry: true,
                      }),
                  ]
                : []),
        ],

        ...(isBuild
            ? {
                  build: {
                      lib: {
                          entry: resolve(__dirname, './src/index.ts'),
                          name: 'UILibrary',
                          fileName: (format) => `index.${format}.js`,
                      },
                      cssCodeSplit: false,
                      rollupOptions: {
                          external: ['react', 'react-dom'],
                          output: {
                              globals: {
                                  react: 'React',
                                  'react-dom': 'ReactDOM',
                              },
                              assetFileNames: 'style.css',
                          },
                      },
                  },
              }
            : {}),
    }
})
