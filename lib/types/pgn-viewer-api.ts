import type PgnViewer from "@lichess-org/pgn-viewer/pgnViewer";

// The upstream package publishes the viewer class itself; consumers only ever hold the instance
// `start()` hands back, so the class type is the API surface.
export type PgnViewerApi = PgnViewer;
