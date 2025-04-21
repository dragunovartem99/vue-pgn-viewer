// https://github.com/lichess-org/pgn-viewer/blob/master/src/interfaces.ts

import type { Color, Move, Position } from "chessops";
import type { FEN } from "chessground/types";
import type { CommentShape } from "chessops/pgn";
import type { Path } from "./path";

export type Id = string;
export type San = string;
export type Uci = string;
export type Ply = number;

export type Translate = (key: string) => string | undefined;

export type GoTo = "first" | "prev" | "next" | "last";

export type ShowMoves = false | "right" | "bottom" | "auto";
export type ShowPlayers = true | false | "auto";
export type Lichess = string | false;

type Clocks = { white?: number; black?: number };

type Player = {
	name?: string;
	title?: string;
	rating?: number;
	isLichessUser: boolean;
};

export type Players = { white: Player; black: Player };

export type Metadata = {
	externalLink?: string;
	isLichess: boolean;
	timeControl?: {
		initial: number;
		increment: number;
	};
	orientation?: Color;
	result?: string;
};

export type InitialOrMove = {
	fen: FEN;
	turn: Color;
	check: boolean;
	comments: string[];
	shapes: CommentShape[];
	clocks: Clocks;
};

export type Initial = InitialOrMove & {
	pos: Position;
};

export type MoveData = InitialOrMove & {
	path: Path;
	ply: number;
	move: Move;
	san: San;
	uci: Uci;
	startingComments: string[];
	nags: number[];
	emt?: number;
};
