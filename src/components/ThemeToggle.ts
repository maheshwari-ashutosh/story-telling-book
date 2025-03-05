import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ThemeMode } from '../types';

@customElement('theme-toggle')
export class ThemeToggle extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .theme-toggle {
      display: flex;
      align-items: center;
      margin-left: auto;
      cursor: pointer;
      background: none;
      border: none;
      color: white;
      font-size: 1rem;
      padding: 0.5rem;
      border-radius: 4px;
      transition: background-color 0.2s;
    }

    .theme-toggle:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .theme-toggle svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
      margin-right: 6px;
    }

    @media (max-width: 768px) {
      .theme-toggle span {
        display: none;
      }
      
      .theme-toggle svg {
        margin-right: 0;
      }
    }
  `;

  @property({ type: String })
  themeMode: ThemeMode = 'light';

  render() {
    return html`
      <button class="theme-toggle" @click=${this.toggleTheme} aria-label="Toggle theme">
        ${this.themeMode === 'light' 
          ? html`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
              </svg>
              <span>Dark Mode</span>
            ` 
          : html`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
              </svg>
              <span>Light Mode</span>
            `}
      </button>
    `;
  }

  private toggleTheme() {
    const newTheme = this.themeMode === 'light' ? 'dark' : 'light';
    this.dispatchEvent(new CustomEvent('theme-changed', {
      detail: { themeMode: newTheme },
      bubbles: true,
      composed: true
    }));
  }
} 