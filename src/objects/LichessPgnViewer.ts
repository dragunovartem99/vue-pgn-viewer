import createPgnViewer from "lichess-pgn-viewer";
import type { PgnViewerConfig } from "../types";

export class LichessPgnViewer {
	private viewer: any;

	constructor(element: HTMLElement, config: PgnViewerConfig) {
		this.viewer = createPgnViewer(element, config);
	}

	get api() {
		return this.viewer;
	}
}
