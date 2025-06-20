

/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

class LiferayRouting {
	constructor() {
		this._listeners = new Map();
		this._historyStacks = new Map();
		this._historyIndexes = new Map();

		window.addEventListener('hashchange', () => {
			const hashMap = this.getAll();
			for (const [key, path] of Object.entries(hashMap)) {
				this._notify(key, path);
			}
		});
	}

	_parseHash() {
		const hash = window.location.hash.substring(1);
		const parts = hash.split('&');
		const result = {};

		for (const part of parts) {
			const [key, value] = part.split('=');
			if (key) {
				result[key] = decodeURIComponent(value || '');
			}
		}

		return result;
	}

	_serializeHash(obj) {
		return (
			'#' +
			Object.entries(obj)
				.map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
				.join('&')
		);
	}

	_updateHash(key, value, replace = false) {
		const all = this.getAll();
		all[key] = value;
		const newHash = this._serializeHash(all);

		if (replace) {
			history.replaceState(null, '', newHash);
		} else {
			window.location.hash = newHash;
		}
	}

	_getLocation(path) {
		const [pathname, searchHash] = path.split('?');
		const [search, hash] = (searchHash || '').split('#');

		return {
			pathname,
			search: search ? `?${search}` : '',
			hash: hash ? `#${hash}` : '',
		};
	}

	_notify(key, path) {
		const listeners = this._listeners.get(key) || [];

		const location = this._getLocation(path);

		for (const cb of listeners) {
			cb(location);
		}
	}

    createHref(key, to) {
        const pathname = typeof to === 'string' ? to : to?.pathname || '/';
        const hashMap = this.getAll();
        hashMap[key] = pathname;
    
        return (
            '#' +
            Object.entries(hashMap)
                .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
                .join('&')
        );
    }
    
	getAll() {
		return this._parseHash();
	}

	get(key) {
		return this._parseHash()[key] || '/';
	}

	getLocation(key) {
		return this._getLocation(this.get(key));
	}

	push(key, path) {
		const stack = this._historyStacks.get(key) || ['/'];
		const index = this._historyIndexes.get(key) ?? 0;

		const newStack = stack.slice(0, index + 1);
		newStack.push(path);

		this._historyStacks.set(key, newStack);
		this._historyIndexes.set(key, newStack.length - 1);

		this._updateHash(key, path, false);
	}

	replace(key, path) {
		const stack = this._historyStacks.get(key) || ['/'];
		const index = this._historyIndexes.get(key) ?? 0;

		stack[index] = path;

		this._historyStacks.set(key, stack);
		this._historyIndexes.set(key, index);

		this._updateHash(key, path, true);
	}

	go(key, n) {
		const stack = this._historyStacks.get(key) || ['/'];
		const currentIndex = this._historyIndexes.get(key) ?? 0;

		const newIndex = currentIndex + n;

		if (newIndex >= 0 && newIndex < stack.length) {
			this._historyIndexes.set(key, newIndex);

			const path = stack[newIndex];

			this._updateHash(key, path, true);
			this._notify(key, path);
		} else {
			console.warn(`Liferay.Routing: go(${n}) out of bounds for key "${key}"`);
		}
	}

	listen(key, callback) {
		if (!this._listeners.has(key)) {
			this._listeners.set(key, []);
		}

		const arr = this._listeners.get(key);
		arr.push(callback);

		callback(this.getLocation(key));

		return () => {
			const updated = (this._listeners.get(key) || []).filter(
				(fn) => fn !== callback
			);
			this._listeners.set(key, updated);
		};
	}
}

const routingInstance = new LiferayRouting();

if (typeof window !== 'undefined') {
	window.Liferay = window.Liferay || {};
	window.Liferay.Routing = routingInstance;
}

export default routingInstance;