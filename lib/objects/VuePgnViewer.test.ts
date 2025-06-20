import { test, expect } from "vitest";
import { VuePgnViewer } from "./VuePgnViewer";
import type { PgnViewerConfig } from "../types";

const STARTING_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

type Tags = HTMLElementTagNameMap;

function create<T extends keyof Tags>(tagName: T): Tags[T] {
	return document.createElement(tagName);
}

test("replaces node when mounted", () => {
	const parent = create("section");
	const mountNode = create("div");

	parent.appendChild(mountNode);

	expect(mountNode).toBe(parent.firstChild);

	new VuePgnViewer().mount(mountNode);

	expect(mountNode).not.toBe(parent.firstChild);
});

test("creates div element when mounted", () => {
	const mounted = new VuePgnViewer().mount(create("span"));

	expect(mounted instanceof HTMLSpanElement).toBe(false);
	expect(mounted instanceof HTMLDivElement).toBe(true);
});

test("without arguments, sets up initial position", () => {
	const viewer = new VuePgnViewer();

	viewer.mount(create("summary"));
	expect(viewer.api.cgState().fen).toEqual(STARTING_FEN);
});

test("with empty config, sets up initial position", () => {
	const viewer = new VuePgnViewer({});

	viewer.mount(create("object"));
	expect(viewer.api.cgState().fen).toEqual(STARTING_FEN);
});

test("changes state in reaction to API calls", () => {
	const viewer = new VuePgnViewer();

	viewer.mount(create("figcaption"));
	viewer.api.flip();

	expect(viewer.api.cgState().orientation).toEqual("black");
});

test("generates correct state based on a config", () => {
	const config: PgnViewerConfig = {
		pgn: "1. f4 e5 2. fxe5 d6 3. exd6 Bxd6 4. Kf2 Qh4+",
		initialPly: "last",
		orientation: "black",
	};

	const viewer = new VuePgnViewer(config);
	viewer.mount(create("ruby"));

	expect(viewer.api.cgState()).toMatchInlineSnapshot(`
		{
		  "check": true,
		  "fen": "rnb1k1nr/ppp2ppp/3b4/8/7q/8/PPPPPKPP/RNBQ1BNR w kq - 2 5",
		  "lastMove": [
		    "d8",
		    "h4",
		  ],
		  "orientation": "black",
		  "turnColor": "white",
		}
	`);
});
