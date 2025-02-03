// https://github.com/lichess-org/pgn-viewer/blob/master/src/pgnViewer.ts

import type { Api as ChessgroundApi } from "chessground/api";
import type { Config as ChessgroundConfig } from "chessground/config";
import type { GoTo, Pane, Path, Translate } from "./lichess-interfaces";

export type PgnViewerApi = {
	path: Path;
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

	goTo(to: GoTo, focus?: boolean): void;
	canGoTo(to: GoTo): boolean;

	setGround(api: ChessgroundApi): void;
};
