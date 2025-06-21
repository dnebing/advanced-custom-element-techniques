

# Liferay TanStack Router Integration (v1+)

This client extension demonstrates how to integrate the [TanStack Router v1.0+](https://tanstack.com/router/latest) with Liferay’s `window.Liferay.Routing` hash-based coordination model. It includes a custom `createLiferayHistory()` function that serves as a history adapter for TanStack, allowing multiple independent router instances on the same page to co-exist using hash routing without interfering with one another.

---

## 🚀 Usage

To use TanStack Router with Liferay, follow these steps:

### 1. Install TanStack Router

Make sure your project includes:

```bash
yarn add @tanstack/react-router
```

### 2. Copy `LiferayHistory.js`

This file implements the TanStack-compatible router history interface, backed by the `window.Liferay.Routing` API.

Copy `LiferayHistory.js` into your project.

### 3. Create and Use the Router

In your `App` component (or wherever you initialize routing):

```jsx
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { createLiferayHistory } from './LiferayHistory';
import { routeTree } from './Routes';

function App({ routerKey }) {
  const router = React.useMemo(() => {
    return createRouter({
      routeTree,
      history: createLiferayHistory({ routerKey }),
    });
  }, [routerKey]);

  return <RouterProvider router={router} />;
}
```

This allows your component to listen to just its scoped hash key (e.g., `#alpha=/panel1`) without impacting others.

---

## 📁 Routes

The `Routes.jsx` file demonstrates a wide variety of TanStack Router capabilities, including:

- Basic routing with nested route trees
- Route params (`/product/:id`)
- Search params (`/search?q=test`)
- Wildcard routes (`/blog/*`)
- Nested outlets (`/settings/profile`)
- Deferred loader data (`/deferred`)
- Lazy loaded components (`/lazy`)
- Pending transitions with status tracking
- Programmatic navigation
- Custom not found (`path: '$'`) route

This makes it a solid reference for how the `createLiferayHistory()` implementation supports all major features of TanStack Router v1+.

---

## 🔍 Notes for Developers

- The `createLiferayHistory()` implementation acts like a memory router but is hash-coordinated and decoupled from `window.history` entirely.
- Each router instance can track its own routing state using a unique key (e.g., `alpha`, `beta`, `delta`) via `window.Liferay.Routing`.
- Routing state is URL-addressable, shareable, and bookmarkable — but isolated per app.

---

## ✅ When to Use This

This approach is ideal when:
- You need deep linking within a custom element (e.g. `/product/42`)
- You want routing to survive reloads and be addressable
- You need multiple independently scoped routers on a page

It is **not** a replacement for Liferay’s built-in page navigation. Use it within isolated custom elements only.

---

## 🔗 Resources

- [TanStack Router Docs](https://tanstack.com/router/latest)
- [Liferay Custom Element Tutorials](https://learn.liferay.com/)
