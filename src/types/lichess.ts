// https://github.com/lichess-org/pgn-viewer/blob/master/src/interfaces.ts

import type { Color, Move, Position } from "chessops";
import type { FEN } from "chessground/types";
import type { CommentShape, Node } from "chessops/pgn";

type Id = string;
type San = string;
type Uci = string;
export type Ply = number;

export type Translate = (key: string) => string | undefined;
export type GoTo = "first" | "prev" | "next" | "last";

// https://github.com/lichess-org/pgn-viewer/blob/master/src/path.ts

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

// https://github.com/lichess-org/pgn-viewer/blob/master/src/game.ts

type Clocks = {
	white?: number;
	black?: number;
};

interface InitialOrMove {
	fen: FEN;
	turn: Color;
	check: boolean;
	comments: string[];
	shapes: CommentShape[];
	clocks: Clocks;
}

interface Initial extends InitialOrMove {
	pos: Position;
}

interface MoveData extends InitialOrMove {
	path: Path;
	ply: number;
	move: Move;
	san: San;
	uci: Uci;
	startingComments: string[];
	nags: number[];
	emt?: number;
}

interface Metadata {
	externalLink?: string;
	isLichess: boolean;
	timeControl?: {
		initial: number;
		increment: number;
	};
	orientation?: Color;
	result?: string;
}

interface Player {
	name?: string;
	title?: string;
	rating?: number;
	isLichessUser: boolean;
}

interface Players {
	white: Player;
	black: Player;
}

type AnyNode = Node<MoveData>;

export type Game = {
	mainline: MoveData[];
	initial: Initial;
	moves: AnyNode;
	players: Players;
	metadata: Metadata;

	title(): string;
	hasPlayerName(): boolean;
	nodeAt(path: Path): AnyNode | undefined;
	dataAt(path: Path): MoveData | Initial | undefined;
	pathAtMainlinePly(ply: Ply | "last"): Path;
};
