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
      // Since we're using webpack copy plugin, we need to manually create the chapter list
      const chapterFiles = [
        'Chapter 1: The Enduring Power of Story: Why Narrative Shapes Our World.md',
        'Chapter 2: Core Principles of Effective Storytelling: Universal Truths and Timeless Structures.md',
        'Chapter 3: The Storyteller\'s Mindset: Cultivating the Essential Qualities for Narrative Mastery.md',
        'Chapter 4: Unearthing the Narrative Seed: Idea Generation and Source Material Mastery.md',
        'Chapter 5: Character Architectonics: Crafting Believable, Compelling, and Dynamic Figures.md',
        'Chapter 6: Worldbuilding and Setting: Constructing Immersive and Meaningful Environments.md',
        'Chapter 7: Plot Construction: Designing Compelling Narrative Trajectories.md',
        'Chapter 8: Mastering Narrative Conflict: Creating Tension, Stakes, and Dramatic Drive.md',
        'Chapter 9: Pacing and Rhythm: Controlling Narrative Flow and Audience Engagement.md',
        'Chapter 10: Show, Don\'t Tell: Embracing Immersive and Evocative Language.md',
        'Chapter 11: Dialogue Mastery: Crafting Authentic, Revealing, and Dynamic Conversations.md',
        'Chapter 12: Point of View and Narrative Voice: Choosing the Right Lens for Your Story.md',
        'Chapter 13: The Power of Scene and Setting: Structuring Narrative Moments for Maximum Impact.md',
        'Chapter 14: Emotional Resonance: Evoking Powerful Feelings and Connecting with the Audience\'s Heart.md',
        'Chapter 15: Theme and Meaning: Weaving Subtext and Purpose into the Narrative Tapestry.md',
        'Chapter 16: Refining Your Narrative Style: Voice, Tone, and Genre Mastery.md',
        'Chapter 17: Revision and Refinement: The Crucible of Narrative Excellence.md',
        'Chapter 18: Storytelling Across Mediums: Adapting Narrative for Different Platforms.md',
        'Chapter 19: The Storyteller\'s Journey: Building a Sustainable Practice and Sharing Your Voice.md',
      ];
      
      this._chapters = chapterFiles.map((filename) => {
        const match = filename.match(/Chapter (\d+): (.+)\.md/);
        if (match) {
          const number = parseInt(match[1], 10);
          const title = match[2];
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