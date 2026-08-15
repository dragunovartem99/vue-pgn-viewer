<script setup lang="ts">
import { ref } from "vue";

import { PgnViewer, type PgnViewerApi, type PgnViewerConfig } from "../lib";

// The Opera Game, Paris 1858 — a real game rather than a made-up one, short enough to play through
// in the demo and famous enough that the moves are worth looking at.
const pgn = `
[Event "Paris"]
[Date "1858.??.??"]
[White "Paul Morphy"]
[Black "Duke of Brunswick and Count Isouard"]
[Result "1-0"]

1. e4 e5 2. Nf3 d6 3. d4 Bg4 4. dxe5 Bxf3 5. Qxf3 dxe5 6. Bc4 Nf6 7. Qb3 Qe7
8. Nc3 c6 9. Bg5 b5 10. Nxb5 cxb5 11. Bxb5+ Nbd7 12. O-O-O Rd8
13. Rxd7 Rxd7 14. Rd1 Qe6 15. Bxd7+ Nxd7
16. Qb8+ Nxb8 17. Rd8# 1-0
`;

const config: PgnViewerConfig = {
	pgn,
};

const useApi = (api: PgnViewerApi) => {
	api.focus();
};

const installCommand = "npm install vue-pgn-viewer";
const copied = ref(false);

const copyInstallCommand = async () => {
	await navigator.clipboard.writeText(installCommand);
	copied.value = true;
	setTimeout(() => (copied.value = false), 1500);
};
</script>

<template>
	<header class="hero">
		<h1 class="title">Vue PGN Viewer</h1>
		<p class="tagline">
			A thin, fully typed Vue 3 adapter for the official
			<a
				href="https://github.com/lichess-org/pgn-viewer"
				target="_blank"
				rel="noreferrer"
				>Lichess PGN Viewer</a
			>.
		</p>

		<div class="actions">
			<button
				class="install"
				type="button"
				:aria-label="`Copy ${installCommand}`"
				@click="copyInstallCommand"
			>
				<code>{{ installCommand }}</code>
				<span
					class="install__hint"
					aria-live="polite"
					>{{ copied ? "copied" : "copy" }}</span
				>
			</button>

			<a
				class="link"
				href="https://github.com/dragunovartem99/vue-pgn-viewer"
				target="_blank"
				rel="noreferrer"
			>
				GitHub
			</a>
			<a
				class="link"
				href="https://www.npmjs.com/package/vue-pgn-viewer"
				target="_blank"
				rel="noreferrer"
			>
				npm
			</a>
		</div>
	</header>

	<main class="stage">
		<PgnViewer
			:config
			@ready="useApi"
		/>
	</main>

	<ul class="features">
		<li>One component, one config object — no wrapper boilerplate.</li>
		<li>Config, props, emits and the viewer API ship with types.</li>
		<li>Everything the Lichess viewer does, nothing taken away.</li>
	</ul>

	<footer class="footer">
		Built by
		<a
			href="https://github.com/dragunovartem99"
			target="_blank"
			rel="noreferrer"
			>Artem Dragunov</a
		>
		· GPL-3.0
	</footer>
</template>

<style scoped>
.hero {
	text-align: center;
	margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
}

/* Inter is drawn for text sizes; at display sizes its default fit reads loose, so the tracking comes
   in as the type grows. */
.title {
	margin: 0;
	font-size: clamp(1.75rem, 4.5vw, 2.5rem);
	font-weight: 620;
	letter-spacing: -0.035em;
	line-height: 1.05;
	text-wrap: balance;
}

.tagline {
	margin: 0.5rem auto 0;
	max-width: 32rem;
	font-size: 1rem;
	color: var(--text-muted);
	text-wrap: balance;
}

/* Inline links carry their hover as a tint behind the words. The padding is always there and always
   given back by the margin, so nothing shifts when the tint appears; `box-decoration-break` keeps
   the rounding on both halves of a link that wraps. */
.tagline a,
.footer a {
	padding: 0.1em 0.25em;
	margin: 0 -0.25em;
	border-radius: 0.3rem;
	text-decoration-color: var(--accent);
	text-underline-offset: 3px;
	box-decoration-break: clone;
	transition: background-color 0.15s ease;
}

.tagline a:hover,
.footer a:hover {
	background: var(--variation-bg);
}

.tagline a {
	color: var(--text);
}

.actions {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
	margin-top: 1.5rem;
}

.install {
	display: inline-flex;
	align-items: center;
	gap: 0.75rem;
	padding: 0.6rem 0.9rem;
	font: inherit;
	color: inherit;
	background: var(--surface);
	border: 1px solid var(--border);
	border-radius: 0.6rem;
	cursor: pointer;
	transition:
		border-color 0.15s ease,
		background-color 0.15s ease;
}

.install:hover {
	border-color: var(--accent);
	background: var(--variation-bg);
}

.install code {
	font-family: var(--font-mono);
	font-size: 0.875rem;
}

/* Held at the width of the longer of the two words, so swapping "copy" for "copied" does not resize
   the button under the cursor that just clicked it. */
.install__hint {
	min-width: 7ch;
	font-size: 0.7rem;
	font-weight: 600;
	letter-spacing: 0.08em;
	text-align: right;
	text-transform: uppercase;
	color: var(--accent);
}

.link {
	padding: 0.6rem 0.9rem;
	font-size: 0.9rem;
	font-weight: 500;
	color: var(--text-muted);
	text-decoration: none;
	border: 1px solid transparent;
	border-radius: 0.6rem;
	transition:
		color 0.15s ease,
		background-color 0.15s ease;
}

.link:hover {
	color: var(--text);
	background: var(--variation-bg);
}

/* The board is the page; it stands on the background rather than in a card of its own. */
.stage {
	display: flow-root;
}

.features {
	display: grid;
	gap: 0.4rem;
	margin: clamp(1.5rem, 4vw, 2rem) 0 0;
	padding: 0;
	list-style: none;
	font-size: 0.9rem;
	color: var(--text-muted);
	text-align: center;
}

.footer {
	margin-top: clamp(1.5rem, 4vw, 2.5rem);
	text-align: center;
	font-size: 0.85rem;
	color: var(--text-muted);
}

.footer a {
	color: inherit;
}
</style>

<style>
/* The viewer is the one solid panel on the page: the grid behind it would otherwise read straight
   through the move list. */
.lpv {
	--c-lpv-bg: var(--surface);
	--c-lpv-bg-pane: var(--surface);
	--c-lpv-bg-movelist: var(--surface);
	--c-lpv-bg-player: var(--surface);
	--c-lpv-bg-controls: var(--surface);
	--c-lpv-bg-variation: var(--variation-bg);
	--c-lpv-font: var(--text);
	--c-lpv-font-shy: var(--text-muted);
	--c-lpv-border: var(--border);
	--c-lpv-side-border: var(--border);
	--c-lpv-accent: var(--accent);
	--c-lpv-accent-over: var(--accent-contrast);

	/* A soft tint instead of lpv's solid fill: the move list is a column of text, and a saturated
	   block in the middle of it reads as a button rather than as "you are here". */
	--c-lpv-current-move: var(--accent-soft);
	--c-lpv-move-hover: var(--variation-bg);
}

/* The demo hands the viewer focus on load so the arrow keys work straight away, and lpv answers a
   plain `:focus` with an accent ring — on a page this bare it framed the board before anyone had
   touched it. The ring is kept for the keyboard, which is what it is for. */
.lpv:focus {
	outline: none;
}

.lpv:focus-visible {
	outline: 2px solid var(--accent);
	outline-offset: 2px;
}

/* lpv paints the current move white-on-accent, which the soft tint cannot carry; the accent moves
   into the text instead. */
.lpv .lpv__moves .move.current {
	background: var(--c-lpv-current-move);
	color: var(--accent);
	font-weight: 650;
}

/* Moves already played stay legible but step back, so the eye lands on the current one. */
.lpv__moves .move.ancestor:not(.current) {
	opacity: 0.75;
}

/* lpv paints a hovered move in `--c-lpv-accent-over`, the color meant to sit on top of a saturated
   accent fill — against the soft tint used here that is near-black text on a dark row in the dark
   theme, and it is unreadable. The text keeps its own color and only the background moves.
   Guarded by `hover: hover` because lpv's own rule is not: on a touch screen the hover it leaves
   behind sticks to the move you tapped away from. */
@media (hover: hover) {
	.lpv__moves .move:not(.empty):not(.current):hover {
		background: var(--c-lpv-move-hover);
		color: var(--text);
	}

	.lpv__moves .move.ancestor:not(.current):hover {
		opacity: 1;
	}

	/* Same story on the control buttons, which lpv hovers to white on a tinted fill. */
	.lpv__fbt:hover:not(.disabled):not([disabled]) {
		background: var(--c-lpv-move-hover);
		color: var(--text);
	}
}

/* lpv ships the last-move square as a hardcoded olive, which on a green board is barely a signal at
   all. The selector is `cg-board square.last-move`, so scoping it under `.lpv` wins outright. */
.lpv cg-board square.last-move {
	background-color: var(--last-move);
}

/* lpv lets the move list grow to `1fr`, which on a wide page spends the extra width on a column of
   text rather than on the board. The list is capped instead, and everything left over is board. */
.lpv--moves-auto {
	grid-template-columns: minmax(200px, 1fr) minmax(15rem, 17rem);
}

cg-board {
	--board-color: mediumseagreen; /* fallback */
	--board-color-light: #33a06f;
	--board-color-dark: #1d704b;
}

/* The vue mark, floating over the board: under the pieces it reads as a smudge behind them rather
   than as a mark of its own.

   It only belongs on the starting position — a mark across the middle of a game in progress is in
   the way. The element is always there and only its opacity moves, which is what gives it something
   to animate; a rule that stopped matching would simply blink it out. */
cg-board::after {
	content: "";
	background: url("./vue.svg") no-repeat center/27%;
	position: absolute;
	inset: 0;
	z-index: 8;
	pointer-events: none;
	opacity: 0.8;
	transform: translateY(-1.25%);
	filter: drop-shadow(0px 0px 27px rgba(0, 0, 0, 0.8));
	transition:
		opacity 0.35s ease,
		transform 0.35s ease;
}

/* The starting position is the one state with no current move in the list, so `:has()` can ask about
   it without any JavaScript. Off the mark goes as soon as the game is under way. */
.lpv:has(.lpv__moves .move.current) cg-board::after {
	opacity: 0;
	transform: translateY(-1.25%) scale(0.92);
}

/* The menu and the PGN pane cover the board, and the mark lives inside the board's own stacking
   context, so no z-index of ours can put it behind them — it has to be gone rather than fading, or
   it hangs over the open pane for the length of the transition. */
.lpv--menu cg-board::after {
	display: none;
}

/* Move numbers are a column, not prose: tabular figures keep 9. and 10. starting at the same place
   down the list, which proportional Inter would not. */
.lpv__moves {
	font-variant-numeric: tabular-nums;
}

.lpv__moves > move {
	font-size: 1.2rem;
}

.lpv__moves variation {
	padding-block: 0.2rem;
	font-size: 1.1rem;
	line-height: 1.4;
}
</style>
