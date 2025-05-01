# Vue PGN Viewer

<a href="https://dragunovartem99.github.io/vue-pgn-viewer" target="_blank" rel="noreferrer">
  <img src="https://img.shields.io/badge/Live-Demo-brightgreen" alt="Demo">
</a>

Vue 3 adapter for the official [**Lichess PGN Viewer**](https://github.com/lichess-org/pgn-viewer)

<img src="https://github.com/user-attachments/assets/0c057310-1400-40eb-82b1-ed740a641b90" width="480" alt="Vue PGN Viewer screenshot" >

## Features

- Easy integration with Vue 3 projects
- Fully typed
- Supports all original Lichess PGN Viewer configurations

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

2. Register the component:

Locally (in other Single-File Component)

```vue
<script setup>
import { PgnViewer } from "vue-pgn-viewer";
</script>
```

3. Use the component

```vue
<template>
    <PgnViewer :config="{
        pgn: '1. f3 e5 2. g4 Qh4#',
        orientation: 'black'
    }"/>
</template>
```

## Config

## API

## Styling

## Limitations

> PGN viewer widget is designed to be embedded in content pages.  
> This won't replace a fully featured analysis board.

For more flexible functionallity consider:

- [lichess-org/chessground](https://github.com/lichess-org/chessground)
- [qwerty084/vue3-chessboard](https://github.com/qwerty084/vue3-chessboard), which is a wrapper around "chessground"
