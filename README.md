# Vue PGN Viewer

<a href="https://dragunovartem99.github.io/vue-pgn-viewer" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/Watch_Live_Demo-red"></a>
<img alt="NPM Downloads" src="https://img.shields.io/npm/d18m/vue-pgn-viewer?color=blue">
<img alt="NPM Version" src="https://img.shields.io/npm/v/vue-pgn-viewer?color=orange">

Vue 3 adapter for the official [**Lichess PGN Viewer**](https://github.com/lichess-org/pgn-viewer)

<img src="https://github.com/user-attachments/assets/5161c6b4-31cd-4414-8f6f-d5742346276f" width="480" alt="Vue PGN Viewer screenshot" >


## Features

- Easy integration with Vue 3 projects
- Supports all Lichess PGN Viewer features
- Fully typed configuration and API
- Props/emits autocompletion support

<img src="https://github.com/user-attachments/assets/ec530e75-e17e-4c3a-b3ef-ee09bde5023b" width="360" alt="IDE integration screenshot" >

## Installation

```shell
npm install vue-pgn-viewer
# or
yarn add vue-pgn-viewer
# or
pnpm add vue-pgn-viewer
```

## Quick Start

1. Import the styles in your main entry file:

```js
// main.js or main.ts
import "vue-pgn-viewer/style.css";
```

2. [Register](https://vuejs.org/guide/components/registration.html) the component:

Locally (in any Single-File Component):

```vue
<script setup>
import { PgnViewer } from "vue-pgn-viewer";
</script>
```

Or globally (in your main entry file):

```js
import { PgnViewer } from "vue-pgn-viewer";
app.component("PgnViewer", PgnViewer);
```

3. Use the component in your template:

```vue
<template>
    <PgnViewer
        :config="{
            pgn: '1. f3 e5 2. g4 Qh4#',
            orientation: 'black',
        }"
    />
</template>
```

## Config

The library exports the `PgnViewerConfig` type for defining config objects separately.

Example:

```vue
<script setup lang="ts">
import { PgnViewer, type PgnViewerConfig } from "vue-pgn-viewer";

const config: PgnViewerConfig = {
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 b5",
    drawArrows: false,
    chessground: {
        coordinates: false,
        animation: {
            enabled: true,
            duration: 500
        }
    }
};
</script>

<template>
    <PgnViewer :config="config" />
</template>
```

For all configuration options, see the [documented source code](https://github.com/lichess-org/pgn-viewer/blob/master/src/config.ts) (Lichess).

## API

The component emits a `ready` event when mounted and exposes an API for direct manipulation.  
The library exports the `PgnViewerApi` type.

```vue
<script setup lang="ts">
import { PgnViewer, type PgnViewerApi } from "vue-pgn-viewer";

function useApi(api: PgnViewerApi) {
    api.flip();
    api.toggleMenu();
}
</script>

<template>
    <PgnViewer @ready="useApi" />
</template>
```

For all API options, see the [source code](https://github.com/dragunovartem99/vue-pgn-viewer/blob/master/lib/types/pgn-viewer-api.ts).

## Styling

Customize board colors with CSS variables:

```css
.wood-theme.lpv {
  --board-color-light: #f0d9b5;
  --board-color-dark: #b58863;
}
```

## Limitations

> PGN viewer widget is designed to be embedded in content pages.  
> This won't replace a fully featured analysis board.

For more flexible functionality, consider:

- [lichess-org/chessground](https://github.com/lichess-org/chessground)
- [qwerty084/vue3-chessboard](https://github.com/qwerty084/vue3-chessboard), which is a wrapper around "chessground"
