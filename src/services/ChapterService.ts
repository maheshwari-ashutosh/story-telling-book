import { marked } from 'marked';
import { Chapter, Heading } from '../types';

export class ChapterService {
  private static instance: ChapterService;
  private _chapters: Chapter[] = [];
  private _currentChapter: Chapter | null = null;
  private _headings: Heading[] = [];

  private constructor() {}

  public static getInstance(): ChapterService {
    if (!ChapterService.instance) {
      ChapterService.instance = new ChapterService();
    }
    return ChapterService.instance;
  }

  get chapters(): Chapter[] {
    return this._chapters;
  }

  get currentChapter(): Chapter | null {
    return this._currentChapter;
  }

  get headings(): Heading[] {
    return this._headings;
  }

  public async fetchChapters(): Promise<Chapter[]> {
    try {
      // Use the actual file naming convention from the chapters directory
      const chapterFiles = [
        'chapter-01-enduring-power-of-story.md',
        'chapter-02-core-principles-of-storytelling.md',
        'chapter-03-storytellers-mindset.md',
        'chapter-04-unearthing-narrative-seed.md',
        'chapter-05-character-architectonics.md',
        'chapter-06-worldbuilding-and-setting.md',
        'chapter-07-plot-construction.md',
        'chapter-08-mastering-narrative-conflict.md',
        'chapter-09-pacing-and-rhythm.md',
        'chapter-10-show-dont-tell.md',
        'chapter-11-dialogue-mastery.md',
        'chapter-12-point-of-view.md',
        'chapter-13-power-of-scene-and-setting.md',
        'chapter-14-emotional-resonance.md',
        'chapter-15-theme-and-meaning.md',
        'chapter-16-refining-narrative-style.md',
        'chapter-17-revision-and-refinement.md',
        'chapter-18-storytelling-across-mediums.md',
        'chapter-19-storytellers-journey.md',
      ];
      
      this._chapters = chapterFiles.map((filename) => {
        // Updated regex to match the new file naming convention: chapter-XX-kebab-case-title.md
        const match = filename.match(/chapter-(\d+)-(.+)\.md/);
        if (match) {
          const number = parseInt(match[1], 10);
          // Convert kebab-case to readable title with proper capitalization
          const kebabTitle = match[2];
          const title = kebabTitle
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          
          return {
            id: `chapter-${number}`,
            number,
            title,
            filename,
            path: `/chapters/${filename}`,
          };
        }
        return null as unknown as Chapter;
      }).filter(Boolean);
      
      // Sort chapters by number
      this._chapters.sort((a, b) => a.number - b.number);
      
      return this._chapters;
    } catch (error) {
      console.error('Error fetching chapters:', error);
      throw error;
    }
  }

  public async loadChapter(chapter: Chapter): Promise<Chapter> {
    try {
      const response = await fetch(chapter.path);
      if (!response.ok) {
        throw new Error(`Failed to fetch chapter: ${chapter.title}`);
      }
      
      const markdown = await response.text();
      const htmlContent = marked.parse(markdown) as string;
      
      this._currentChapter = {
        ...chapter,
        content: htmlContent,
      };
      
      // Extract headings from the HTML
      this.extractHeadings();
      
      if (!this._currentChapter) {
        throw new Error(`Failed to process chapter: ${chapter.title}`);
      }
      
      return this._currentChapter;
    } catch (error) {
      console.error(`Error loading chapter ${chapter.title}:`, error);
      throw error;
    }
  }

  private extractHeadings(): void {
    if (!this._currentChapter || !this._currentChapter.content) {
      this._headings = [];
      return;
    }
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = this._currentChapter.content;
    
    const headingElements = tempDiv.querySelectorAll('h1, h2, h3, h4');
    this._headings = Array.from(headingElements).map(heading => {
      // Create an ID from the heading text
      const id = heading.textContent!
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      
      // Add the ID to the heading element
      heading.id = id;
      
      return {
        id,
        text: heading.textContent!,
        level: parseInt(heading.tagName.substring(1), 10),
      };
    });
    
    // Update the content with the IDs added to headings
    this._currentChapter.content = tempDiv.innerHTML;
  }
} 