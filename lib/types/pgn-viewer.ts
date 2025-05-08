import type { PgnViewerApi } from "./pgn-viewer-api";

export interface IPgnViewer {
	api: PgnViewerApi;
	mount(element: HTMLElement): HTMLElement;
}
