/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import { createHistory } from '@tanstack/react-router'

const stateIndexKey = '__TSR_index';

function createRandomKey() {
  return Math.random().toString(36).slice(2);
}

function assignKeyAndIndex(index, state) {
  if (!state) {
    state = {};
  }
  const result = {
    ...state,
    key: createRandomKey(),
    [stateIndexKey]: index,
  };
  return result;
}

function parseHref(href, state) {
  const hashIndex = href.indexOf('#');
  const searchIndex = href.indexOf('?');

  const pathname = href.substring(
    0,
    hashIndex > 0
      ? searchIndex > 0
        ? Math.min(hashIndex, searchIndex)
        : hashIndex
      : searchIndex > 0
        ? searchIndex
        : href.length
  );

  const search =
    searchIndex > -1
      ? href.slice(searchIndex, hashIndex === -1 ? undefined : hashIndex)
      : '';

  const hash = hashIndex > -1 ? href.substring(hashIndex) : '';

  const result = {
    href,
    pathname,
    search,
    hash,
    state:
      state || {
        [stateIndexKey]: 0,
        key: createRandomKey(),
      },
  };

  return result;
}

export function createLiferayHistory({
  routerKey,
  initialEntries,
  initialIndex,
} = {}) {
  if (!initialEntries || initialEntries.length === 0) {
    initialEntries = [window.Liferay?.Routing?.get?.(routerKey) ?? '/'];
  }
  let entries = [...initialEntries];

  let index =
    typeof initialIndex === 'number'
      ? Math.min(Math.max(initialIndex, 0), entries.length - 1)
      : entries.length - 1;

  let states = entries.map((_, i) => assignKeyAndIndex(i, undefined));

  console.log('[LiferayHistory] initial entries:', entries);
  console.log('[LiferayHistory] initial states:', states);

  
  const getLocation = () => {
    const location = parseHref(entries[index], states[index]);
    return location;
  };

  const history = createHistory({
    getLocation,
    getLength: () => {
      return entries.length;
    },
    pushState: (path, state) => {
      if (index < entries.length - 1) {
        entries.splice(index + 1);
        states.splice(index + 1);
      }
      entries.push(path);
      states.push(state);
      index = entries.length - 1;
      window.Liferay?.Routing?.push?.(routerKey, path);
    },
    replaceState: (path, state) => {
      entries[index] = path;
      states[index] = state;
      window.Liferay?.Routing?.replace?.(routerKey, path);
    },
    back: () => {
      index = Math.max(index - 1, 0);
      const href = entries[index];
      window.Liferay?.Routing?.replace?.(routerKey, href);
    },
    forward: () => {
      index = Math.min(index + 1, entries.length - 1);
      const href = entries[index];
      window.Liferay?.Routing?.replace?.(routerKey, href);
    },
    go: (n) => {
      index = Math.min(Math.max(index + n, 0), entries.length - 1);
      const href = entries[index];
      window.Liferay?.Routing?.replace?.(routerKey, href);
    },
    createHref: (path) => {
      return path;
    },
  });

  if (window.Liferay?.Routing?.listen) {
    window.Liferay.Routing.listen(routerKey, () => {
      const path = window.Liferay?.Routing?.get?.(routerKey);

      if (path && entries[index] !== path) {
        entries.push(path);
        states.push(assignKeyAndIndex(entries.length - 1, undefined));
        index = entries.length - 1;

        if (history.notify) {
            history.notify({ type: 'REPLACE' });
          }
      }
    });
  }
  return history;
}