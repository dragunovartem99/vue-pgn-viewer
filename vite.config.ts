import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	build: {
		// https://vite.dev/guide/build.html#library-mode
		lib: {
			entry: resolve(__dirname, "src/lib.ts"),
			name: "MyLib",
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
	},
	plugins: [vue()],
});
