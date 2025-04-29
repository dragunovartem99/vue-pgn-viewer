import type { PgnViewerConfig, PgnViewerApi } from "./index";

export type ComponentProps = {
	config?: PgnViewerConfig;
};

export type ComponentEmits = {
	(e: "ready", api: PgnViewerApi): void;
};
