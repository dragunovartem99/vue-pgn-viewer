<script setup lang="ts">
import { ref, onMounted } from "vue";
import { VuePgnViewer } from "../objects/VuePgnViewer";
import type { PgnViewerApi, PgnViewerConfig } from "../types";

const props = defineProps<{ config?: PgnViewerConfig }>();
const emit = defineEmits<{ (e: "ready", api: PgnViewerApi): void }>();
const board = ref<HTMLDivElement | null>(null);

const viewer = new VuePgnViewer(props.config || {});

const mountPgnViewer = () => board.value && viewer.mount(board.value);
const exposeApi = () => viewer.api && emit("ready", viewer.api);

onMounted(() => mountPgnViewer() ?? exposeApi());
</script>

<template>
	<div ref="board"></div>
</template>
