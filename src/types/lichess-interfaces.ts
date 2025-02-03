// https://github.com/lichess-org/pgn-viewer/blob/master/src/interfaces.ts

export type Id = string;
export type Ply = number;

export type Translate = (key: string) => string | undefined;
export type Pane = "board" | "menu" | "pgn";
export type GoTo = "first" | "prev" | "next" | "last";

export type ShowMoves = false | "right" | "bottom" | "auto";
export type ShowPlayers = true | false | "auto";
export type Lichess = string | false;

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

export type Game = {
	title(): string;
	hasPlayerName(): boolean;
};
