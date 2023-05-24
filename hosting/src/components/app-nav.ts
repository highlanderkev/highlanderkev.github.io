import {html, LitElement} from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-nav')
export class AppNav extends LitElement {

  render() {
    return html`
      <nav class="crumbs">
        <ol>
          <li class="crumb"><a href="#">Bikes</a></li>
        </ol>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-nav': AppNav
  }
}
