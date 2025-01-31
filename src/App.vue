<script setup lang="ts">
import PgnViewer from "./components/PgnViewer.vue";
</script>

<template>
	<PgnViewer @ready="(v) => v.analysisUrl()" />
</template>
