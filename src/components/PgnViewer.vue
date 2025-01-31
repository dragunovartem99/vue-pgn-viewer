<script setup lang="ts">
import { ref, onMounted } from "vue";
import LichessPgnViewer from "lichess-pgn-viewer";

const board = ref<HTMLElement | null>(null);

onMounted(() => {
	if (!board.value) {
		throw new Error("Can't mount the PGN viewer");
	}

	LichessPgnViewer(board.value, {});
});
</script>

<template>
	<div ref="board"></div>
</template>
