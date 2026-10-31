import { mkdir } from "node:fs/promises";

import { chromium } from "playwright";
import { preview } from "vite";

const server = await preview({
	configFile: "demo.config.ts",
	preview: { host: "127.0.0.1", port: 0, open: false },
});
let browser;

try {
	browser = await chromium.launch();
	const page = await browser.newPage({
		viewport: { width: 1280, height: 1000 },
		deviceScaleFactor: 2,
		reducedMotion: "reduce",
	});
	// Apply capture padding before components mount and measure their layout.
	await page.route("**/*", async (route) => {
		if (route.request().resourceType() !== "document") {
			await route.continue();
			return;
		}
		const response = await route.fetch();
		const html = await response.text();
		await route.fulfill({
			response,
			body: html.replace("</head>", "<style>.stage { padding: 24px; }</style></head>"),
		});
	});
	await page.goto(server.resolvedUrls.local[0]);
	await page.locator(".lpv cg-board").waitFor();
	const block = page.locator(".stage");
	await block.waitFor({ state: "visible" });
	await page.evaluate(async () => {
		await document.fonts.ready;
		await Promise.all(Array.from(document.images, (image) => image.decode()));
	});
	// Allow resize observers and their animation frames to update board geometry.
	await page.evaluate(
		() =>
			new Promise((resolve) => {
				requestAnimationFrame(() => requestAnimationFrame(resolve));
			})
	);
	await mkdir("screenshots", { recursive: true });
	await block.screenshot({
		path: "screenshots/preview.png",
		animations: "disabled",
	});
	console.log("Saved screenshots/preview.png (24px padding, 2× resolution)");
} finally {
	try {
		await browser?.close();
	} finally {
		await new Promise((resolve, reject) => {
			server.httpServer.close((error) => (error ? reject(error) : resolve()));
		});
	}
}
