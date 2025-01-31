export interface PgnViewerApi {
	pane: string; // "board" | "menu" | "pgn"
	flipped: boolean;
	analysisUrl(): string;
	practiceUrl(): string;
	flip(): void;
	toggleMenu(): void;
}
