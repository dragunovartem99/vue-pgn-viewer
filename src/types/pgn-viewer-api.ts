// https://github.com/lichess-org/pgn-viewer/blob/master/src/pgnViewer.ts

import type { Api as ChessgroundApi } from "chessground/api";
import type { Config as ChessgroundConfig } from "chessground/config";
import type { Translate, Pane } from "./lichess-types";

export type PgnViewerApi = {
	translate: Translate;
	ground: ChessgroundApi;
	div?: HTMLElement;
	flipped: boolean;
	pane: Pane;
	autoScrollRequested: boolean;

	focus(): void;

	orientation(): string;
	flip(): void;

	toggleMenu(): void;
	togglePgn(): void;

	cgState(): ChessgroundConfig;

	analysisUrl(): string;
	practiceUrl(): string;

	setGround(api: ChessgroundApi): void;
};
