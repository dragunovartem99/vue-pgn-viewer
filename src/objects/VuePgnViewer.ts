import createPgnViewer from "lichess-pgn-viewer";
import type { LichessPgnViewer } from "../types/lichess-pgn-viewer.ts";

export class VuePgnViewer {
	private options;
	private pgnViewer?: LichessPgnViewer;

	constructor(options: any) {
		this.options = options;
	}

	mount(element: HTMLElement) {
		this.pgnViewer = createPgnViewer(element, this.options);
	}

	get api() {
		return this.pgnViewer;
	}
}
