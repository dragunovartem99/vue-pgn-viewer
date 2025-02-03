import { test, expect } from "vitest";
import { LichessPgnViewer } from "./LichessPgnViewer";

const fakeDiv = document.createElement("div");

test("returns initial state with no config", () => {
	const { api } = new LichessPgnViewer(fakeDiv);

	expect(api.cgState()).toEqual({
		fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
		orientation: "white",
		check: false,
		lastMove: undefined,
		turnColor: "white",
	});

	api.flip();
});

test("api methods change board state", () => {
	const { api } = new LichessPgnViewer(fakeDiv);

	api.flip();

	expect(api.cgState().orientation).toEqual("black");
});

test("accepts the config", () => {
	const { api } = new LichessPgnViewer(fakeDiv, {
		pgn: "1. f4 e5 2. fxe5 d6 3. exd6 Bxd6 4. Nc3 Qh4+ 5. g3 Qxg3+ 6. hxg3 Bxg3#",
		initialPly: "last",
		orientation: "black",
	});

	expect(api.cgState()).toEqual({
		fen: "rnb1k1nr/ppp2ppp/8/8/8/2N3b1/PPPPP3/R1BQKBNR w KQkq - 0 7",
		orientation: "black",
		check: true,
		lastMove: ["d6", "g3"],
		turnColor: "white",
	});
});
