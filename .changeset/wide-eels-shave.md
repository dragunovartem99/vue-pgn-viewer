---
"vue-pgn-viewer": minor
---

Move to the renamed `@lichess-org/pgn-viewer` package (2.6.x)

The old `lichess-pgn-viewer` name is frozen at 2.4.5, which leaves the control-bar buttons without
an accessible name. The renamed package labels them (and the board) for screen readers.

Its type surface is published now, so `PgnViewerApi` and `PgnViewerConfig` are aliases of upstream's
own `PgnViewer` and `Opts` instead of hand-copied interfaces. Two shifts come with that: `translate`
takes `(key, ...args) => string`, and `analysisUrl` takes a `forPractice` flag.
