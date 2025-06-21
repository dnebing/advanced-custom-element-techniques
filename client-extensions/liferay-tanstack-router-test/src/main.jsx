/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './Routes.jsx';
import { createLiferayHistory } from './LiferayHistory.js';

function App({ routerKey }) {
	const router = React.useMemo(() => {
		return createRouter({
			routeTree,
			history: createLiferayHistory({ routerKey }),
		});
	}, [routerKey]);

	return <RouterProvider router={router} />;
}

class LiferayTanstackRouterTest extends HTMLElement {
	constructor() {
		super();
		this._root = null;
		this._shadow = this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		console.log('connectedCallback');
		if (this._root === null) {
			this._root = ReactDOM.createRoot(this._shadow);

			const routerKey = this.getAttribute('routerKey') || 'default';
			console.log('routerKey', routerKey);

			this._root.render(
				<React.StrictMode>
					<App routerKey={routerKey} />
				</React.StrictMode>
			);
		}
	}

	disconnectedCallback() {
		console.log('disconnectedCallback');
		if (this._root) {
			this._root.unmount();
			this._root = null;
		}
	}
}

if (!customElements.get('liferay-tanstack-router-test')) {
	customElements.define('liferay-tanstack-router-test', LiferayTanstackRouterTest);
}
