import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Chapter, Heading, ThemeMode } from '../types';
import { ChapterService } from '../services/ChapterService';

// Import components
import './AppHeader';
import './ChapterNav';
import './ChapterContent';
import './HeadingNav';

@customElement('book-app')
export class App extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100vh;
      width: 100vw;
    }

    .app-container {
      display: grid;
      grid-template-columns: var(--sidebar-width) 1fr var(--sidebar-width);
      grid-template-rows: var(--header-height) 1fr;
      grid-template-areas:
        "header header header"
        "chapter-nav content heading-nav";
      height: 100vh;
      width: 100vw;
    }

    app-header {
      grid-area: header;
    }

    chapter-nav {
      grid-area: chapter-nav;
    }

    chapter-content {
      grid-area: content;
    }

    heading-nav {
      grid-area: heading-nav;
    }

    .error {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      padding: 2rem;
      text-align: center;
      background-color: var(--background-color);
      color: var(--text-color);
      transition: background-color var(--transition-speed), color var(--transition-speed);
    }

    .error h2 {
      color: var(--primary-color);
      margin-bottom: 1rem;
      font-family: 'Source Sans 3', sans-serif;
    }

    .error button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background-color: var(--secondary-color);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      font-family: 'Source Sans 3', sans-serif;
    }

    @media (max-width: 992px) {
      .app-container {
        grid-template-columns: var(--sidebar-width) 1fr;
        grid-template-areas:
          "header header"
          "chapter-nav content";
      }
    }

    @media (max-width: 768px) {
      .app-container {
        grid-template-columns: 1fr;
        grid-template-areas:
          "header"
          "content";
      }
    }
  `;

  @state()
  private chapters: Chapter[] = [];

  @state()
  private currentChapter: Chapter | null = null;

  @state()
  private headings: Heading[] = [];

  @state()
  private isMenuOpen = false;
  
  @state()
  private themeMode: ThemeMode = 'light';

  @state()
  private error: string | null = null;

  private chapterService = ChapterService.getInstance();

  constructor() {
    super();
    this.addEventListener('chapter-selected', this.handleChapterSelected as EventListener);
    this.addEventListener('heading-selected', this.handleHeadingSelected as EventListener);
    this.addEventListener('menu-toggle', this.handleMenuToggle as EventListener);
    this.addEventListener('theme-changed', this.handleThemeChanged as EventListener);
    
    // Load theme preference from localStorage
    this.loadThemePreference();
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadChapters();

    // Handle hash changes
    window.addEventListener('hashchange', this.handleHashChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  render() {
    if (this.error) {
      return html`
        <div class="error">
          <h2>Error</h2>
          <p>${this.error}</p>
          <button @click=${this.loadChapters}>Try Again</button>
        </div>
      `;
    }

    return html`
      <div class="app-container">
        <app-header
          .themeMode=${this.themeMode}
          @theme-changed=${this.handleThemeChanged}
        ></app-header>
        
        <chapter-nav 
          .chapters=${this.chapters}
          .currentChapter=${this.currentChapter}
          class=${this.isMenuOpen ? 'open' : ''}
        ></chapter-nav>
        
        <chapter-content
          .chapter=${this.currentChapter}
        ></chapter-content>
        
        <heading-nav
          .headings=${this.headings}
        ></heading-nav>
      </div>
    `;
  }

  private async loadChapters() {
    try {
      this.error = null;
      this.chapters = await this.chapterService.fetchChapters();
      
      // Load the first chapter by default or from hash
      if (this.chapters.length > 0) {
        const hash = window.location.hash.substring(1);
        const chapter = this.chapters.find(c => c.id === hash) || this.chapters[0];
        await this.loadChapter(chapter);
      }
    } catch (error) {
      console.error('Error loading chapters:', error);
      this.error = 'Failed to load chapters. Please try again later.';
    }
  }

  private async loadChapter(chapter: Chapter) {
    try {
      this.error = null;
      this.currentChapter = await this.chapterService.loadChapter(chapter);
      this.headings = this.chapterService.headings;
      
      // Update URL hash
      window.location.hash = chapter.id;
    } catch (error) {
      console.error(`Error loading chapter ${chapter.title}:`, error);
      this.error = `Failed to load chapter: ${chapter.title}. Please try again later.`;
    }
  }

  private handleChapterSelected(event: CustomEvent) {
    const { chapter } = event.detail;
    this.loadChapter(chapter);
    this.isMenuOpen = false;
  }

  private handleHeadingSelected(event: CustomEvent) {
    const { heading } = event.detail;
    const element = document.getElementById(heading.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private handleMenuToggle(event: CustomEvent) {
    const { isOpen } = event.detail;
    this.isMenuOpen = isOpen;
  }
  
  private handleThemeChanged(event: CustomEvent) {
    const { themeMode } = event.detail;
    this.themeMode = themeMode;
    
    // Apply theme to body
    document.body.classList.toggle('dark-theme', themeMode === 'dark');
    
    // Save theme preference
    localStorage.setItem('theme-preference', themeMode);
  }
  
  private loadThemePreference() {
    const savedTheme = localStorage.getItem('theme-preference') as ThemeMode | null;
    
    // Check for saved preference or use system preference
    if (savedTheme) {
      this.themeMode = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.themeMode = 'dark';
    }
    
    // Apply theme to body
    document.body.classList.toggle('dark-theme', this.themeMode === 'dark');
  }

  private handleHashChange = () => {
    const hash = window.location.hash.substring(1);
    const chapter = this.chapters.find(c => c.id === hash);
    if (chapter && (!this.currentChapter || this.currentChapter.id !== chapter.id)) {
      this.loadChapter(chapter);
    }
  };
} 