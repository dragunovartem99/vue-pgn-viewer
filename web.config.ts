import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
	base: "https://dragunovartem99.github.io/vue-pgn-viewer/",
	build: { outDir: "web" },
	plugins: [vue()],
});
