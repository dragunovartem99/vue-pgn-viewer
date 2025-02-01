<script setup lang="ts">
import "../assets/lichess-pgn-viewer.css";
import "../assets/flexible-coloring.css";
import PgnViewer from "../components/PgnViewer.vue";

const pgn = `
1. e4 e5 2. d4 exd4 3. Nf3 Nc6
`;
</script>

<template>
	<PgnViewer :config="{ pgn }" />
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
	background: url("./vue.svg") no-repeat center/16%;
	position: absolute;
	inset: 0;
	z-index: 8;
	filter: drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.8)) opacity(80%);
}
</style>
