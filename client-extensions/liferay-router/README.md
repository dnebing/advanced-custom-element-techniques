# `liferay-routing`

`liferay-routing` is a lightweight JavaScript utility that provides scoped, hash-based routing support for standard web components running inside the Liferay platform. It enables each component to manage its own part of the URL hash without interfering with others, allowing multiple independent routing consumers to coexist on the same page.

---

## 🚀 Purpose

In Liferay, the _Liferay_ owns and manipulates the browser's address bar (specifically the hash portion). This makes it difficult for embedded standard web components (written in React, Vue, Angular, or vanilla JS) to safely use hash-based routing.

The `liferay-routing` library solves this by providing a centralized hash routing manager (`Liferay.Routing`) that:

- Parses and manages multiple scoped hash fragments (e.g., `#componentA=/path&componentB=/another`)
- Provides history stack support per component
- Notifies listeners when scoped routes change
- Allows pushing, replacing, and navigating through scoped route history
- Enables consistent, collision-free routing across frameworks

---

## 🧠 How It Works

The `Liferay.Routing` singleton is exposed globally on `window.Liferay.Routing` and provides the following methods:

### API Summary

```js
Liferay.Routing.push(key, path);       // Pushes a new route to the history stack for key
Liferay.Routing.replace(key, path);    // Replaces the current route for key
Liferay.Routing.go(key, n);           // Navigates n steps in the history stack for key
Liferay.Routing.get(key);             // Gets the current path for key
Liferay.Routing.getAll();             // Gets all routing keys and their paths
Liferay.Routing.getLocation(key);     // Gets a location object { pathname, search, hash }
Liferay.Routing.listen(key, callback); // Subscribes to changes for a given key
Liferay.Routing.createHref(key, path); // Builds a scoped hash link for a given path
```

The hash is managed in a format like this:

```
#componentA=/dashboard&componentB=/settings
```

Each component uses a unique `key` (e.g. `componentA`, `panel1`, etc.) to scope its routing state.

---

## 📦 Usage

### Importing (via JS Import Map)

This module is typically provided as a JS Import Map Client Extension in Liferay:

```html
<script type="module">
  import Routing from 'liferay-routing';

  Routing.push('componentA', '/home');

  Routing.listen('componentA', (location) => {
    console.log('Route changed:', location.pathname);
  });
</script>
```

### Accessing Globally

If using directly on a page that loads the CE:

```js
Liferay.Routing.push('componentX', '/edit');
```

---

## 🧩 Integration with React

Use this library in conjunction with a router adapter (like `<LiferayRouter />`) in React to bridge `Liferay.Routing` to `react-router-dom`. The adapter can use `Liferay.Routing.listen`, `getLocation`, and `push` to create scoped routing support within your React app.

---

## ✅ Benefits

- 🚫 Avoids hash collisions between components
- 🔁 Supports per-component navigation history
- 🧩 Framework-neutral: works with React, Vue, Angular, or plain JS
- 🔒 Safe to use in shared hash space
- 🧠 Enables consistent back/forward routing support in Liferay pages

---

## 🔗 Distribution

This module should be published as a `jsImportMap` client extension with a `client-extension.yaml` like:

```yaml
assemble:
  - from: assets
    into: static
liferay-routing-js-import-maps-entry:
  bareSpecifier: liferay-routing
  name: Liferay Routing JS Import Maps Entry
  type: jsImportMapsEntry
  url: liferay-routing.js
```

---

## 👥 License

This utility is licensed under the same terms as the rest of Liferay platform code.

---
