import { test, expect } from "vitest";
import { VuePgnViewer } from "./VuePgnViewer";

const fakeDiv: HTMLElement = document.createElement("div");

test("mounts and creates initial position with no config", () => {
	const viewer = new VuePgnViewer({});
	viewer.mount(fakeDiv);
	expect(viewer.api.cgState().fen).toEqual(
		"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
	);
});
