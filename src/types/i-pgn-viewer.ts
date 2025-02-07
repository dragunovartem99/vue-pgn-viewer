import type { PgnViewerApi } from "./pgn-viewer-api";

export interface IPgnViewer {
	mount(element: HTMLElement): HTMLElement;
	get api(): PgnViewerApi | undefined;
}
