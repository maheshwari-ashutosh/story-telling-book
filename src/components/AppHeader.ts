import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ThemeMode } from '../types';
import './ThemeToggle';

@customElement('app-header')
export class AppHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--primary-color);
      color: white;
      box-shadow: 0 2px 4px var(--shadow-color);
      z-index: 10;
      height: var(--header-height);
    }

    .header-content {
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
      height: 100%;
    }

    h1 {
      font-size: 1.5rem;
      margin: 0;
      color: white;
      font-family: 'Source Sans 3', sans-serif;
      font-weight: 600;
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      margin-right: 1rem;
      padding: 0;
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
      }
      
      h1 {
        font-size: 1.3rem;
      }
    }
  `;

  @property({ type: Boolean })
  isMenuOpen = false;
  
  @property({ type: String })
  themeMode: ThemeMode = 'light';

  render() {
    return html`
      <div class="header-content">
        <button class="menu-toggle" @click=${this.toggleMenu}>
          ☰
        </button>
        <h1>Storytelling Book</h1>
        <theme-toggle 
          .themeMode=${this.themeMode}
          @theme-changed=${this.handleThemeChanged}
        ></theme-toggle>
      </div>
    `;
  }

  private toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.dispatchEvent(new CustomEvent('menu-toggle', {
      detail: { isOpen: this.isMenuOpen },
      bubbles: true,
      composed: true
    }));
  }
  
  private handleThemeChanged(event: CustomEvent) {
    const { themeMode } = event.detail;
    this.dispatchEvent(new CustomEvent('theme-changed', {
      detail: { themeMode },
      bubbles: true,
      composed: true
    }));
  }
} 