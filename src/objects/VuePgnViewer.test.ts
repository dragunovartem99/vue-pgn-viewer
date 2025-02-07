import { test, expect } from "vitest";
import { VuePgnViewer } from "./VuePgnViewer";

const fakeElement: HTMLElement = document.createElement("figure");

test("mounts the div contating viewer", () => {
	const viewer = new VuePgnViewer({});
	const div = viewer.mount(fakeElement);

	expect(div instanceof HTMLDivElement);
});

test("creates initial position with no config", () => {
	const viewer = new VuePgnViewer({});
	viewer.mount(fakeElement);

	expect(viewer.api.cgState().fen).toEqual(
		"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
	);
});

test("can change state by using API methods", () => {
	const viewer = new VuePgnViewer({});
	viewer.mount(fakeElement);

	viewer.api.flip();
	expect(viewer.api.cgState().orientation).toEqual("black");
});

test("generates correct state based on a config", () => {
	const viewer = new VuePgnViewer({
		pgn: "1. f4 e5 2. fxe5 d6 3. exd6 Bxd6 4. Nc3 Qh4+ 5. g3 Qxg3+ 6. hxg3 Bxg3#",
		initialPly: "last",
		orientation: "black",
	});
	viewer.mount(fakeElement);

	expect(viewer.api.cgState()).toEqual({
		fen: "rnb1k1nr/ppp2ppp/8/8/8/2N3b1/PPPPP3/R1BQKBNR w KQkq - 0 7",
		orientation: "black",
		check: true,
		lastMove: ["d6", "g3"],
		turnColor: "white",
	});
});
