// https://github.com/lichess-org/pgn-viewer/blob/master/src/interfaces.ts

import type { Color } from "chessops";
import type { Config as ChessgroundConfig } from "chessground/config";

type Id = string;
type Ply = number;

export type Translate = (key: string) => string | undefined;
export type Pane = "board" | "menu" | "pgn";
export type GoTo = "first" | "prev" | "next" | "last";

type ShowMoves = false | "right" | "bottom" | "auto";
type ShowPlayers = true | false | "auto";
type Lichess = string | false;

export type Path = {
	path: string;
	size(): number;
	head(): Id;
	tail(): Path;
	init(): Path;
	last(): Id;
	empty(): void;
	contains(other: Path): boolean;
	isChildOf(parent: Path): boolean;
	append(id: Id): Path;
	equals(other: Path): boolean;
};

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
