<script setup lang="ts">
import { ref, onMounted } from "vue";
import { VuePgnViewer } from "../objects/VuePgnViewer";
import type { ComponentProps, ComponentEmits, TemplateRef } from "../types";

const props = defineProps<ComponentProps>();
const emit = defineEmits<ComponentEmits>();

const board = ref<TemplateRef>(null);
const viewer = new VuePgnViewer(props.config);

const mountPgnViewer = () => board.value && viewer.mount(board.value);
const exposeApi = () => viewer.api && emit("ready", viewer.api);

onMounted(() => mountPgnViewer() ?? exposeApi());
</script>

<template>
	<div ref="board"></div>
</template>
