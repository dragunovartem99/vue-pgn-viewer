/// <reference types="vitest/config" />
/** @type {import('vite').UserConfig} */

import { resolve } from "node:path";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const dtsPluginOptions = {
	tsconfigPath: "./tsconfig.app.json",
	include: ["lib"],
	exclude: ["**/*.test.ts"],
	bundleTypes: true,
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
			fileName: "vue-pgn-viewer",
			formats: ["es"],
		},
		rollupOptions: {
			external: ["vue", "@lichess-org/pgn-viewer"],
		},
		copyPublicDir: false,
	},
	plugins: [vue(), dts(dtsPluginOptions)],
});
