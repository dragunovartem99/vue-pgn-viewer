import createPgnViewer from "lichess-pgn-viewer";
import type { PgnViewerApi, PgnViewerConfig } from "../types";

export class LichessPgnViewer {
	private viewer: PgnViewerApi;

	constructor(element: HTMLElement, config: PgnViewerConfig) {
		this.viewer = createPgnViewer(element, config);
	}

	get api() {
		return this.viewer;
	}
}
