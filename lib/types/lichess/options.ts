// https://github.com/lichess-org/pgn-viewer/blob/master/src/interfaces.ts

import type { Color } from "chessops";
import type { Config as ChessgroundConfig } from "chessground/config";
import type { Lichess, Ply, ShowMoves, ShowPlayers, Translate } from "./basic";

export type Options = {
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
