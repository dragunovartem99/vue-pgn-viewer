<script setup lang="ts">
import { ref, onMounted } from "vue";
import { VuePgnViewer } from "../objects/VuePgnViewer";
import type { ComponentProps, ComponentEmits, TemplateRef } from "../types";

const props = defineProps<ComponentProps>();
const emit = defineEmits<ComponentEmits>();

const div = ref<TemplateRef>(null);
const viewer = new VuePgnViewer({ ...props.config });

function mountPgnViewer() {
	if (!div.value) {
		throw new Error("Can't access element for mounting PGN viewer");
	}

	viewer.mount(div.value);
}

function exposeApi() {
	if (!viewer.api) {
		throw new Error("Can't access API of mounted PGN viewer");
	}

	emit("ready", viewer.api);
}

onMounted(() => {
	mountPgnViewer();
	exposeApi();
});
</script>

<template>
	<div ref="div"></div>
</template>
