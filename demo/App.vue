<script setup lang="ts">
import { PgnViewer, type PgnViewerApi, type PgnViewerConfig } from "../lib";

const pgn = `
1. c4 Nf6 2. Nc3 g6 3. g3 (3. e4 d6 4. d4) 3... Bg7 4. Bg2 O-O
5. Nf3 d6 6. O-O Nc6 (6... e5 7. d3 Re8 8. Rb1 c6) 7. Rb1 a5 8. a3
`;

const config: PgnViewerConfig = {
	pgn,
	initialPly: 9,
};

const useApi = (api: PgnViewerApi) => {
	api.focus();
};
</script>

<template>
	<h1>Vue PGN Viewer</h1>
	<PgnViewer @ready="useApi" :config />
</template>

<style>
cg-board {
	--board-color: mediumseagreen; /* fallback */
	--board-color-light: #33a06f;
	--board-color-dark: #1d704b;
}

/* floating vue logo */
.lpv:not(.lpv--menu) cg-board::after {
	content: "";
	background: url("./vue.svg") no-repeat center/27%;
	position: absolute;
	inset: 0;
	z-index: 8;
	transform: translateY(-1.25%);
	filter: drop-shadow(0px 0px 27px rgba(0, 0, 0, 0.8)) opacity(80%);
}

.lpv__moves > move {
	font-size: 1.2rem;
}

.lpv__moves variation {
	padding-block: 0.2rem;
	font-size: 1.1rem;
	line-height: 1.4;
}
</style>
