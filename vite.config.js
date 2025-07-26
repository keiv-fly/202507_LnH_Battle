import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    base: '/lnh-battle/',
    resolve: {
        alias: {
            '@core': path.resolve(__dirname, 'src/core'),
            '@phaser': path.resolve(__dirname, 'src/phaser'),
            '@shared': path.resolve(__dirname, 'src/core/shared'),
            '@assets': path.resolve(__dirname, 'src/phaser/assets')
        }
    },
    server: {
        port: 3000,
        open: true
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        target: 'baseline-widely-available',
        rollupOptions: {
            output: {
                manualChunks: {
                    phaser: ['phaser'],
                    core: ['./src/core/battle/battleCore.js']
                }
            }
        }
    },
    optimizeDeps: {
        include: ['phaser']
    }
});