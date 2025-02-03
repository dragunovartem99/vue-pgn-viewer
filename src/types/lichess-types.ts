// https://github.com/lichess-org/pgn-viewer/blob/master/src/interfaces.ts

import type { Color } from "chessops";
import type { Config as ChessgroundConfig } from "chessground/config";

export type Ply = number;

export type Translate = (key: string) => string | undefined;

export type Pane = "board" | "menu" | "pgn";

export type GoTo = "first" | "prev" | "next" | "last";

export type ShowMoves = false | "right" | "bottom" | "auto";
export type ShowPlayers = true | false | "auto";
export type Lichess = string | false;

export type PgnViewerOptions = {
	pgn: string;
	fen?: string;
	chessground: ChessgroundConfig;
	orientation?: Color;
	showPlayers: ShowPlayers;
	showMoves: ShowMoves;
	showClocks: boolean;
	showControls: boolean;
	initialPly: Ply | "last";
	scrollToMove: boolean;
	keyboardToMove: boolean;
	drawArrows: boolean;
	menu: {
		getPgn: {
			enabled?: boolean;
			fileName?: string;
		};
		practiceWithComputer?: {
			enabled?: boolean;
		};
		analysisBoard?: {
			enabled?: boolean;
		};
	};
	lichess: Lichess;
	classes?: string;
	translate?: Translate;
};
