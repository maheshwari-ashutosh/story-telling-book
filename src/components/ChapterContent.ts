import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { Chapter } from '../types';

@customElement('chapter-content')
export class ChapterContent extends LitElement {
  static styles = css`
    :host {
      display: block;
      overflow-y: auto;
      padding: 2rem;
      height: 100%;
      background-color: var(--background-color);
      transition: background-color var(--transition-speed);
    }

    .content-inner {
      width: 100%;
      max-width: var(--content-max-width);
      margin: 0 auto;
      background-color: var(--content-background);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px var(--shadow-color);
      transition: background-color var(--transition-speed), box-shadow var(--transition-speed);
    }

    h1 {
      font-size: 2.2rem;
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 1.5rem;
      color: var(--primary-color);
      font-family: 'Source Sans 3', sans-serif;
      letter-spacing: -0.02em;
      line-height: 1.2;
    }

    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid var(--border-color);
      border-top-color: var(--secondary-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 1rem;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 768px) {
      :host {
        padding: 1rem;
      }
      
      .content-inner {
        padding: 1.5rem;
      }
    }
  `;

  @property({ type: Object })
  chapter: Chapter | null = null;

  render() {
    return html`
      ${this.chapter ? html`
        <div class="content-inner">
          <div class="chapter-content">
            ${unsafeHTML(this.chapter.content || '')}
          </div>
        </div>
      ` : html`
        <div class="loading">
          <div class="spinner"></div>
          <p>Loading chapter...</p>
        </div>
      `}
    `;
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('chapter') && this.chapter) {
      // Scroll to top when loading a new chapter
      this.scrollTop = 0;
    }
  }
} 