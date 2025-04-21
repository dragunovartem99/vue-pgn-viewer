<script setup lang="ts">
import { ref, onMounted } from "vue";
import { VuePgnViewer } from "../objects/VuePgnViewer";
import type { ComponentProps, ComponentEmits, TemplateRef } from "../types";

const props = defineProps<ComponentProps>();
const emit = defineEmits<ComponentEmits>();

const div = ref<TemplateRef>(null);
const viewer = new VuePgnViewer({ ...props.config });

const mountPgnViewer = () => viewer.mount(div.value!);
const exposeApi = () => emit("ready", viewer.api);

onMounted(() => {
	mountPgnViewer();
	exposeApi();
});
</script>

<template>
	<div ref="div"></div>
</template>
