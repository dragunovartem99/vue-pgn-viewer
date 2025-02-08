import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	base: "./",
	build: { outDir: "dist-taster" },
	plugins: [vue()],
});
