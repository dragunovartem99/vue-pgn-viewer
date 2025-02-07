import createPgnViewer from "lichess-pgn-viewer";

import type { IPgnViewer, PgnViewerApi, PgnViewerConfig } from "../types";

export class VuePgnViewer implements IPgnViewer {
	private config;
	private viewer?: PgnViewerApi;

	constructor(config: PgnViewerConfig) {
		this.config = config;
	}

	mount(element: HTMLElement) {
		this.viewer = createPgnViewer(element, this.config);
		return this.viewer.div!;
	}

	get api() {
		return this.viewer;
	}
}
