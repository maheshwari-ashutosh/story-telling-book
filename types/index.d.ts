export interface Chapter {
    id: string;
    number: number;
    title: string;
    filename: string;
    path: string;
    content?: string;
}
export interface Heading {
    id: string;
    text: string;
    level: number;
}
export type ThemeMode = 'light' | 'dark';
export interface AppState {
    chapters: Chapter[];
    currentChapter: Chapter | null;
    headings: Heading[];
    isMenuOpen: boolean;
    themeMode: ThemeMode;
}
//# sourceMappingURL=index.d.ts.map