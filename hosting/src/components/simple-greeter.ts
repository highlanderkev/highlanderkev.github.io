import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeter')
export class SimpleGreeter extends LitElement {
  static styles = css`
    div {
      border: 1px solid black;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    span {
      color: rebeccapurple;
    }

    p {
      font-family: sans-serif;
    }
  `;

  @property()
    name: string;

  @property()
    count: number;

  constructor() {
    super();
    this.name = 'Somebody';
    this.count = 0;
  }

  render() {
    return html`
      <div>
        <h1>Hello, <span>${this.name}</span>!</h1>
        <p>Count: ${this.count}</p>
        <button @click=${() => this.count++}>++</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLELementTagNameMap {
    'simple-greeter': SimpleGreeter;
  }
}
