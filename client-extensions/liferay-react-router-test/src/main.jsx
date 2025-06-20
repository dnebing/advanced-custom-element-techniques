/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	Routes,
	Route,
	Link,
	useParams,
	useSearchParams,
	useNavigate,
	Outlet,
} from 'react-router-dom';
import LiferayRouter from './LiferayRouter.jsx';

function Panel({ number }) {
	return <h1>Panel {number}</h1>;
}

function Product() {
	const { id } = useParams();
	return <h1>Product ID: {id}</h1>;
}

function SearchDemo() {
	const [params] = useSearchParams();
	const keyword = params.get('q');

	return <h1>Search for: {keyword || '(none)'}</h1>;
}

function Blog() {
	return <h1>Blog Wildcard Matched</h1>;
}

function Settings() {
	return (
		<div>
			<h1>Settings</h1>
			<nav>
				<Link to="">Home</Link> | <Link to="profile">Profile</Link>
			</nav>
			<Outlet />
		</div>
	);
}

function SettingsHome() {
	return <h2>Settings Home</h2>;
}

function SettingsProfile() {
	return <h2>Settings Profile</h2>;
}

function NavigateDemo() {
	const navigate = useNavigate();
	return (
		<div>
			<h1>Navigate Demo</h1>
			<button onClick={() => navigate('/panel4')}>Go to Panel 4</button>
		</div>
	);
}

function App({ routerKey }) {
	return (
		<LiferayRouter routingKey={routerKey}>
			<nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
				<Link to="/">Main</Link>
				<Link to="/panel1">Panel 1</Link>
				<Link to="/panel2">Panel 2</Link>
				<Link to="/panel3">Panel 3</Link>
				<Link to="/panel4">Panel 4</Link>
				<Link to="/product/42">Product 42</Link>
				<Link to="/search?q=test">Search: test</Link>
				<Link to="/blog/some/path">Blog Path</Link>
				<Link to="/settings">Settings</Link>
				<Link to="/navigate">Programmatic Nav</Link>
			</nav>
			<Routes>
				<Route path="/" element={<h1>Main Panel</h1>} />
				<Route path="/panel1" element={<Panel number={1} />} />
				<Route path="/panel2" element={<Panel number={2} />} />
				<Route path="/panel3" element={<Panel number={3} />} />
				<Route path="/panel4" element={<Panel number={4} />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/search" element={<SearchDemo />} />
				<Route path="/blog/*" element={<Blog />} />
				<Route path="/settings" element={<Settings />}>
					<Route index element={<SettingsHome />} />
					<Route path="profile" element={<SettingsProfile />} />
				</Route>
				<Route path="/navigate" element={<NavigateDemo />} />
			</Routes>
		</LiferayRouter>
	);
}

class LiferayRouterTestElement extends HTMLElement {
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

if (!customElements.get('liferay-router-test')) {
	customElements.define('liferay-router-test', LiferayRouterTestElement);
}
