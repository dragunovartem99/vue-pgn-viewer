<script setup lang="ts">
import { ref, onMounted } from "vue";
import { VuePgnViewer } from "../objects/VuePgnViewer";
import { type LichessPgnViewer } from "../types/lichess-pgn-viewer";

const emit = defineEmits<{
	(e: "ready", viewer: LichessPgnViewer): void;
}>();

const board = ref<HTMLElement | null>(null);
const viewer = new VuePgnViewer({});

function mountPgnViewer() {
	if (!board.value) {
		throw new Error("Can't mount the PGN viewer");
	}

	viewer.mount(board.value);
}

function exposeApi() {
	viewer.api && emit("ready", viewer.api);
}

onMounted(() => {
	mountPgnViewer();
	exposeApi();
});
</script>

<template>
	<div ref="board"></div>
</template>
