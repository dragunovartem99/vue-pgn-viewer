import "../node_modules/lichess-pgn-viewer/dist/lichess-pgn-viewer.css";
import "./assets/flexible-coloring.css";

import PgnViewer from "./components/PgnViewer.vue";
import type { PgnViewerApi, PgnViewerConfig } from "./types";

export { PgnViewer, type PgnViewerApi, type PgnViewerConfig };
