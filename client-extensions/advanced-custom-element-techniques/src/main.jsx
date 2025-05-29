import React from 'react'
import ReactDOM from 'react-dom/client'
import IdProp from './elements/props/IdProp'
import ModeDisplay from './elements/mode/Mode'
import LiferayOn from './elements/messaging/LiferayOn'
import LiferayFire from './elements/messaging/LiferayFire'
import SingleSlot from './elements/singleslot/SingleSlot'
import App from './elements/combo/App'
import MappingDisplay from './elements/mapping/MappingDisplay'
import FeaturedMechanicsList from './featured/FeaturedMechanicsList'
import { setupShadowRootStyles } from './util/setupShadowRootStyles'
import mechanicCardStyles from './featured/MechanicCard.css?inline'; // 👈 Import inline CSS string

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

/*
 * Demonstrate how to use whether we are in edit or view mode
 */
class ACETModeElement extends HTMLElement {
  constructor() {
    super()
    this._root = null
    this._shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this._root = ReactDOM.createRoot(this._shadow)
    this._root.render(
      <React.StrictMode>
        <ModeDisplay isEditMode={this.getAttribute('isEditMode')} />
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

/*
 * Demonstrate how to use Liferay.on() to listen for events
 */
class ACETLiferayOnElement extends HTMLElement {
  constructor() {
    super();
    this._root = null;
    this._shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._root = ReactDOM.createRoot(this._shadow);
    this._root.render(
      <React.StrictMode>
        <LiferayOn />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount();
      this._root = null;
    }
  }
}

/*
 * Demonstrate how to use Liferay.fire() to send events
 */
class ACETLiferayFireElement extends HTMLElement {
  constructor() {
    super();
    this._root = null;
    this._shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._root = ReactDOM.createRoot(this._shadow);
    this._root.render(
      <React.StrictMode>
        <LiferayFire />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount();
      this._root = null;
    }
  }
}

class ACETSingleSlotElement extends HTMLElement {
  constructor() {
    super();
    this._root = null;
    this._shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._root = ReactDOM.createRoot(this._shadow);
    this._root.render(
      <React.StrictMode>
        <SingleSlot />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount();
      this._root = null;
    }
  }
}

class ACETMappingSlotsElement extends HTMLElement {
  constructor() {
    super();
    this._root = null;
    this._shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._root = ReactDOM.createRoot(this._shadow);
    this._root.render(
      <React.StrictMode>
        <App isEditMode={this.getAttribute('isEditMode')} id={this.getAttribute('id')} key={this.getAttribute('id')} />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount();
      this._root = null;
    }
  }
}

class ACETMappingDisplayElement extends HTMLElement {
  constructor() {
    super();
    this._root = null;
    this._shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._root = ReactDOM.createRoot(this._shadow);
    this._root.render(
      <React.StrictMode>
        <MappingDisplay id={this.getAttribute('id')} />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount();
      this._root = null;
    }
  }
}

class ACETFeaturedMechanicsElement extends HTMLElement {
  constructor() {
    super();
    this._root = null;
    this._shadow = this.attachShadow({ mode: 'open' });

		setupShadowRootStyles(this._shadow, [mechanicCardStyles]);
  }

  connectedCallback() {
    this._root = ReactDOM.createRoot(this._shadow);
    this._root.render(
      <React.StrictMode>
        <FeaturedMechanicsList isEditMode={this.getAttribute('isEditMode')} />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount();
      this._root = null;
    }
  }
}

const ACET_PROPS = 'acet-idprops';
const ACET_MODE = 'acet-mode-display';
const ACET_LIFERAY_ON = 'acet-liferay-on';
const ACET_LIFERAY_FIRE = 'acet-liferay-fire';
const ACET_SINGLE_SLOT = 'acet-single-slot';
const ACET_MAPPING_SLOTS = 'acet-mapping-slots';
const ACET_MAPPING_DISPLAY = 'acet-mapping-display';
const ACET_FEATURED_MECHANICS = 'acet-featured-mechanics';
const ACET_FEATURED_MECHANIC = 'acet-featured-mechanic';

if (customElements.get(ACET_PROPS)) {
  // eslint-disable-next-line no-console
  console.log(`Skipping registration for <${ACET_PROPS}> (already registered)`);
} else {
  customElements.define(ACET_PROPS, ACETIdPropsElement);
}

if (customElements.get(ACET_MODE)) {
  // eslint-disable-next-line no-console
  console.log(`Skipping registration for <${ACET_MODE}> (already registered)`);
} else {
  customElements.define(ACET_MODE, ACETModeElement);
}

if (customElements.get(ACET_LIFERAY_ON)) {
  // eslint-disable-next-line no-console
  console.log(`Skipping registration for <${ACET_LIFERAY_ON}> (already registered)`);
} else {
  customElements.define(ACET_LIFERAY_ON, ACETLiferayOnElement);
}

if (customElements.get(ACET_LIFERAY_FIRE)) {
  // eslint-disable-next-line no-console
  console.log(`Skipping registration for <${ACET_LIFERAY_FIRE}> (already registered)`);
} else {
  customElements.define(ACET_LIFERAY_FIRE, ACETLiferayFireElement);
}

if (customElements.get(ACET_SINGLE_SLOT)) {
  // eslint-disable-next-line no-console
  console.log(`Skipping registration for <${ACET_SINGLE_SLOT}> (already registered)`);
} else {
  customElements.define(ACET_SINGLE_SLOT, ACETSingleSlotElement);
}

if (customElements.get(ACET_MAPPING_SLOTS)) {
  // eslint-disable-next-line no-console
  console.log(`Skipping registration for <${ACET_MAPPING_SLOTS}> (already registered)`);
} else {
  customElements.define(ACET_MAPPING_SLOTS, ACETMappingSlotsElement);
}

if (customElements.get(ACET_MAPPING_DISPLAY)) {
  // eslint-disable-next-line no-console
  console.log(`Skipping registration for <${ACET_MAPPING_DISPLAY}> (already registered)`);
} else {
  customElements.define(ACET_MAPPING_DISPLAY, ACETMappingDisplayElement);
}

if (customElements.get(ACET_FEATURED_MECHANICS)) {
  // eslint-disable-next-line no-console
  console.log(`Skipping registration for <${ACET_FEATURED_MECHANICS}> (already registered)`);
} else {
  customElements.define(ACET_FEATURED_MECHANICS, ACETFeaturedMechanicsElement);
}

