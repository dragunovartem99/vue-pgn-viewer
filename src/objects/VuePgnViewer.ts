import { LichessPgnViewer } from "./LichessPgnViewer";
import type { PgnViewerConfig } from "../types";

export class VuePgnViewer {
	private config;
	private viewer!: LichessPgnViewer;

	constructor(config: PgnViewerConfig) {
		this.config = config;
	}

	mount(element: HTMLElement) {
		this.viewer = new LichessPgnViewer(element, this.config);
	}

	get api() {
		return this.viewer.api;
	}
}
