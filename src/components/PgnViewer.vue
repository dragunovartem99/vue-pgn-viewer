<script setup lang="ts">
import { ref, onMounted } from "vue";
import { VuePgnViewer } from "../objects/VuePgnViewer";
import { type PgnViewerApi } from "../types";

const props = defineProps<{
	config?: any;
}>();

const emit = defineEmits<{
	(e: "ready", api: PgnViewerApi): void;
}>();

const board = ref<HTMLElement | null>(null);
const viewer = new VuePgnViewer(props.config || {});

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
