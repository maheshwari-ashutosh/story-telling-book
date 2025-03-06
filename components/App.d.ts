import { LitElement } from 'lit';
import './AppHeader';
import './ChapterNav';
import './ChapterContent';
import './HeadingNav';
export declare class App extends LitElement {
    static styles: import("lit").CSSResult;
    private chapters;
    private currentChapter;
    private headings;
    private isMenuOpen;
    private themeMode;
    private error;
    private chapterService;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    private loadChapters;
    private loadChapter;
    private handleChapterSelected;
    private handleHeadingSelected;
    private handleMenuToggle;
    private handleThemeChanged;
    private loadThemePreference;
    private handleHashChange;
}
//# sourceMappingURL=App.d.ts.map