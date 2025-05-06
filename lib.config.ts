/// <reference types="vitest/config" />
/** @type {import('vite').UserConfig} */

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

const dtsPluginOptions = {
	tsconfigPath: "./tsconfig.app.json",
	rollupTypes: true,
};

// https://vite.dev/config/
export default defineConfig({
	test: {
		environment: "jsdom",
		server: { deps: { inline: ["lichess-pgn-viewer"] } },
	},
	build: {
		// https://vite.dev/guide/build.html#library-mode
		lib: {
			entry: resolve(__dirname, "lib/index.ts"),
			name: "Vue PGN Viewer",
			fileName: "vue-pgn-viewer",
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: { vue: "Vue" },
			},
		},
		copyPublicDir: false,
	},
	plugins: [vue(), dts(dtsPluginOptions)],
});
