// https://github.com/lichess-org/pgn-viewer/blob/master/src/game.ts
// manual conversion from concrete class (implementation) to an interface

import type { Node } from "chessops/pgn";
import type { Ply, MoveData, Initial, Players, Metadata } from "./basic";
import type { Path } from "./path";

type AnyNode = Node<MoveData>;

export interface Game {
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
}
