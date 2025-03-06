import { LitElement } from 'lit';
import { Chapter } from '../types';
export declare class ChapterNav extends LitElement {
    static styles: import("lit").CSSResult;
    chapters: Chapter[];
    currentChapter: Chapter | null;
    isOpen: boolean;
    render(): import("lit").TemplateResult<1>;
    private handleChapterClick;
}
//# sourceMappingURL=ChapterNav.d.ts.map