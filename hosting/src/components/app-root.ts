import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import SentryInstance from '../sentry';
import FirebaseInstance from '../firebase';
import EventBus, {Event} from '../eventBus'

@customElement('app-root')
export class AppRoot extends LitElement {
  @property()
  header?: string;

  connectedCallback() {
    EventBus.register(Event.test, this.test);
    // SentryInstance.logError('test');
    // FirebaseInstance.logEventToFirebase({ name: 'test', details: {}});
  }

  test(e) {
    console.log("test", e);
  }

  clickHandler(e) {
    EventBus.dispatch({name: Event.test, params: 'test'});
  }

  override render() {
    return html`
      <div>
        <h1>${this.header}</h1>
        <button @click="${this.clickHandler}">test</button>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot
  }
}
