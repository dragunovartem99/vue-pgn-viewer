/// <reference types="vitest/config" />
/** @type {import('vite').UserConfig} */

import { resolve } from "node:path";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const dtsPluginOptions = {
	tsconfigPath: "./tsconfig.app.json",
	rollupTypes: true,
};

// https://vite.dev/config/
export default defineConfig({
	test: {
		environment: "jsdom",
		server: { deps: { inline: ["@lichess-org/pgn-viewer"] } },
	},
	build: {
		// https://vite.dev/guide/build.html#library-mode
		lib: {
			entry: resolve(import.meta.dirname, "lib/index.ts"),
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
