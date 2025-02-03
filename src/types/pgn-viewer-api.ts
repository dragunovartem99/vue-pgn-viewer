// https://github.com/lichess-org/pgn-viewer/blob/master/src/pgnViewer.ts

import type { Api as ChessgroundApi } from "chessground/api";
import type { Config as ChessgroundConfig } from "chessground/config";
import type { GoTo, Translate } from "./lichess/basic";
import type { Game } from "./lichess/game";
import type { Path } from "./lichess/path";

export type PgnViewerApi = {
	game: Game;
	path: Path;
	translate: Translate;
	ground?: ChessgroundApi;
	div?: HTMLElement;
	flipped: boolean;
	pane: string; // should be Pane :(
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
