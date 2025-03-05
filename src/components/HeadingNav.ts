import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Heading } from '../types';

@customElement('heading-nav')
export class HeadingNav extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--content-background);
      border-left: 1px solid var(--border-color);
      overflow-y: auto;
      padding: 1.5rem;
      box-shadow: -2px 0 5px var(--shadow-color);
      transition: transform var(--transition-speed), background-color var(--transition-speed);
      height: 100%;
    }

    h2 {
      margin-top: 0;
      font-size: 1.2rem;
      padding-bottom: 0.5rem;
      color: var(--primary-color);
      font-family: 'Source Sans 3', sans-serif;
      border-bottom: 1px solid var(--border-color);
    }

    .heading-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .heading-item {
      margin: 0;
      padding: 0;
    }

    .heading-link {
      display: block;
      padding: 0.4rem 0;
      color: var(--text-color);
      text-decoration: none;
      transition: color var(--transition-speed);
      font-size: 0.9rem;
      line-height: 1.4;
      cursor: pointer;
    }

    .heading-link:hover {
      color: var(--secondary-color);
      text-decoration: none;
    }

    .heading-link.active {
      color: var(--secondary-color);
      font-weight: bold;
    }

    .heading-link.h2 {
      padding-left: 0;
    }

    .heading-link.h3 {
      padding-left: 1rem;
      font-size: 0.85rem;
    }

    .heading-link.h4 {
      padding-left: 2rem;
      font-size: 0.8rem;
    }

    @media (max-width: 992px) {
      :host {
        display: none;
      }
    }
  `;

  @property({ type: Array })
  headings: Heading[] = [];

  render() {
    return html`
      <h2>In This Chapter</h2>
      <ul class="heading-list">
        ${this.headings.map(heading => html`
          <li class="heading-item">
            <a 
              class="heading-link h${heading.level}" 
              @click=${() => this.handleHeadingClick(heading)}
            >
              ${heading.text}
            </a>
          </li>
        `)}
      </ul>
    `;
  }

  private handleHeadingClick(heading: Heading) {
    this.dispatchEvent(new CustomEvent('heading-selected', {
      detail: { heading },
      bubbles: true,
      composed: true
    }));
  }
} 