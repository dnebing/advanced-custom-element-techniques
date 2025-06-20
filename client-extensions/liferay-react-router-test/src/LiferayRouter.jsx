/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, { useMemo, useSyncExternalStore } from 'react';
import { Router } from 'react-router-dom';
import Routing from 'liferay-routing';	

/**
 * Creates a scoped history adapter for a specific routing key using Liferay.Routing.
 */
function createLiferayScopedHistory(routingKey) {
	let currentLocation = Routing.getLocation(routingKey);
	const listeners = new Set();

	const notify = (newLocation) => {
		console.log('notify', currentLocation, newLocation);
		currentLocation = newLocation;
		for (const listener of listeners) {
			listener(currentLocation);
		}
	};

	const normalizeToPath = (to) => {
		if (typeof to === 'string') return to;
		if (to && typeof to === 'object') {
			let path = to.pathname || '/';
			if (to.search) path += to.search;
			if (to.hash) path += to.hash;
			return path;
		}
		return '/';
	};

	Routing.listen(routingKey, notify);

	return {
		get location() {
			console.log('get location', currentLocation);
			return currentLocation;
		},

		push(path) {
			Routing.push(routingKey, normalizeToPath(path));
		},

		replace(path) {
			Routing.replace(routingKey, normalizeToPath(path));
		},

		go(n) {
			Routing.go(routingKey, n);
		},

		listen(listener) {
			listeners.add(listener);
			return () => listeners.delete(listener);
		},

		createHref(to) {
			return Routing.createHref(routingKey, normalizeToPath(to));
		},
	};
}

/**
 * LiferayRouter integrates React Router with Liferay.Routing for a given routingKey.
 * It uses a custom scoped history to isolate routing between components.
 */
function LiferayRouter({ routingKey, children }) {
	console.log('LiferayRouter', routingKey)
	const history = useMemo(() => createLiferayScopedHistory(routingKey), [routingKey]);

	const location = useSyncExternalStore(
		history.listen,
		() => history.location
	);

	return (
		<Router location={location} navigator={history}>
			{children}
		</Router>
	);
}

export default LiferayRouter;
export { LiferayRouter, createLiferayScopedHistory };
