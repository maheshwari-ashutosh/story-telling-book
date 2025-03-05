import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Chapter } from '../types';

@customElement('chapter-nav')
export class ChapterNav extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--content-background);
      border-right: 1px solid var(--border-color);
      overflow-y: auto;
      padding: 1.5rem 0;
      box-shadow: 2px 0 5px var(--shadow-color);
      transition: transform var(--transition-speed), background-color var(--transition-speed);
      height: 100%;
    }

    h2 {
      padding: 0 1.5rem 0.5rem;
      margin-top: 0;
      font-size: 1.2rem;
      color: var(--primary-color);
      font-family: 'Source Sans 3', sans-serif;
      border-bottom: 1px solid var(--border-color);
    }

    .chapter-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .chapter-item {
      margin: 0;
      padding: 0;
    }

    .chapter-link {
      display: block;
      padding: 0.8rem 1.5rem;
      color: var(--text-color);
      text-decoration: none;
      transition: background-color var(--transition-speed);
      border-left: 3px solid transparent;
      font-size: 0.95rem;
      line-height: 1.4;
      cursor: pointer;
    }

    .chapter-link:hover {
      background-color: var(--hover-color);
      text-decoration: none;
    }

    .chapter-link.active {
      background-color: var(--active-color);
      border-left-color: var(--secondary-color);
      font-weight: bold;
    }

    @media (max-width: 768px) {
      :host {
        position: fixed;
        top: var(--header-height);
        left: 0;
        height: calc(100vh - var(--header-height));
        width: var(--sidebar-width);
        transform: translateX(-100%);
        z-index: 5;
      }

      :host(.open) {
        transform: translateX(0);
      }
    }
  `;

  @property({ type: Array })
  chapters: Chapter[] = [];

  @property({ type: Object })
  currentChapter: Chapter | null = null;

  @property({ type: Boolean })
  isOpen = false;

  render() {
    return html`
      <h2>Chapters</h2>
      <ul class="chapter-list">
        ${this.chapters.map(chapter => html`
          <li class="chapter-item">
            <a 
              class="chapter-link ${this.currentChapter && this.currentChapter.id === chapter.id ? 'active' : ''}" 
              @click=${() => this.handleChapterClick(chapter)}
            >
              ${chapter.number}. ${chapter.title}
            </a>
          </li>
        `)}
      </ul>
    `;
  }

  private handleChapterClick(chapter: Chapter) {
    this.dispatchEvent(new CustomEvent('chapter-selected', {
      detail: { chapter },
      bubbles: true,
      composed: true
    }));
  }
} 