import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
	plugins: [solidPlugin(), cssInjectedByJsPlugin()],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
		sourcemap: true,
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
			fileName: 'index',
		},
	},
});
