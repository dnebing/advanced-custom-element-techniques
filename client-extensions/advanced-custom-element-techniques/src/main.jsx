import React from 'react'
import ReactDOM from 'react-dom/client'
import IdProp from './elements/props/Props'

/*
 * Demonstrate how to use props from the custom fragment here in the element
 */
class ACETIdPropsElement extends HTMLElement {
  constructor() {
    super()
    this._root = null
    this._shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this._root = ReactDOM.createRoot(this._shadow)

    // use this.getAttribute() to get the values that will be
    // passed to use as props on the custom element.
    this._root.render(
      <React.StrictMode>
        <IdProp id={this.getAttribute('id')} />
      </React.StrictMode>
    )
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount()
      this._root = null
    }
  }
}

const ACET_PROPS = 'acet-props';

if (customElements.get(ACET_PROPS)) {
  // eslint-disable-next-line no-console
  console.log(`Skipping registration for <${ACET_PROPS}> (already registered)`);
} else {
  customElements.define(ACET_PROPS, ACETIdPropsElement);
}

