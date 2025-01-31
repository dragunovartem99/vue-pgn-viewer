<script setup lang="ts">
import "./assets/lichess-pgn-viewer.css";
import PgnViewer from "./components/PgnViewer.vue";
</script>

<template>
	<div>
		<PgnViewer />
	</div>
</template>

<style scoped>
div {
	--board-color: burlywood;
}
</style>
