<script setup lang="ts">
import "../dist/vue-pgn-viewer.css";
import { PgnViewer } from "../dist/vue-pgn-viewer.js";

const pgn = `
1. e4 e5 2. d4 exd4 3. Nf3 Nc6
`;
</script>

<template>
	<div>
		<PgnViewer :config="{ pgn: pgn }" />
	</div>
</template>

<style>
div {
	--board-color: mediumseagreen; /* fallback: */
	--board-color-light: #33a06f;
	--board-color-dark: #1d704b;
}
cg-board::after {
	/* just for demonstation */
	content: "";
	position: absolute;
	inset: 0;
	background: url("./assets/vue-icon.svg") no-repeat center/16%;
	opacity: 0.8;
	z-index: 8;
	filter: drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.8));
}
</style>
