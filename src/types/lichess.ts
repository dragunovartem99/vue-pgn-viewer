// https://github.com/lichess-org/pgn-viewer/blob/master/src/interfaces.ts

import type { Color, Move, Position } from "chessops";
import type { FEN } from "chessground/types";
import type { ChildNode, CommentShape, Node } from "chessops/pgn";

type Id = string;
type San = string;
type Uci = string;

type Pane = "board" | "menu" | "pgn";
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

type AnyNode = Node<MoveData>;
type MoveNode = ChildNode<MoveData>;

export type Game = {
	title(): string;
	hasPlayerName(): boolean;
};
