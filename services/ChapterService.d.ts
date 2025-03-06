import { Chapter, Heading } from '../types';
export declare class ChapterService {
    private static instance;
    private _chapters;
    private _currentChapter;
    private _headings;
    private constructor();
    static getInstance(): ChapterService;
    get chapters(): Chapter[];
    get currentChapter(): Chapter | null;
    get headings(): Heading[];
    fetchChapters(): Promise<Chapter[]>;
    private getBaseUrl;
    loadChapter(chapter: Chapter): Promise<Chapter>;
    private extractHeadings;
}
//# sourceMappingURL=ChapterService.d.ts.map