<script setup lang="ts">
import { ref, onMounted } from "vue";
import createPgnViewer from "lichess-pgn-viewer";
import { type LichessPgnViewer } from "../types/lichess-pgn-viewer.ts";

const emit = defineEmits<{
	(e: "mount", viewer: LichessPgnViewer): void;
}>();

const board = ref<HTMLElement | null>(null);

onMounted(() => {
	if (!board.value) {
		throw new Error("Can't mount the PGN viewer");
	}

	const viewer = createPgnViewer(board.value, {});
	emit("mount", viewer);
});
</script>

<template>
	<div ref="board"></div>
</template>
