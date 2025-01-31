import createPgnViewer from "lichess-pgn-viewer";
import { type PgnViewerApi } from "../types/pgn-viewer-api";

export class LichessPgnViewer {
	private viewer: PgnViewerApi;

	constructor(element: HTMLElement, config: any) {
		this.viewer = createPgnViewer(element, config);
	}

	get api() {
		return this.viewer;
	}
}
