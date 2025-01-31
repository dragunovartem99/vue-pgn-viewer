import { LichessPgnViewer } from "./LichessPgnViewer";

export class VuePgnViewer {
	private options;
	private viewer?: LichessPgnViewer;

	constructor(options: any) {
		this.options = options;
	}

	mount(element: HTMLElement) {
		this.viewer = new LichessPgnViewer(element, this.options);
	}

	get api() {
		return this.viewer?.api;
	}
}
