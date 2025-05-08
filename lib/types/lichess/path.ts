// https://github.com/lichess-org/pgn-viewer/blob/master/src/path.ts
// manual conversion from concrete class (implementation) to an interface

import type { Id } from "./basic";

export interface Path {
	readonly path: string;
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
}
