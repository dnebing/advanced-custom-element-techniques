/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, { Suspense, lazy } from 'react';
import {
  createRootRoute,
  createRoute,
  Outlet,
  useSearch,
  Link,
  useNavigate,
  useParams,
  useRouter,
  useLoaderData,
  useRouterState,
} from '@tanstack/react-router';
import { z } from 'zod';

// Navigation UI
function Nav() {
  return (
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
      <Link to="/settings/profile">Settings Profile</Link>
      <Link to="/navigate">Programmatic Nav</Link>
      <Link to="/users">Users (Loader)</Link>
      <Link to="/pending">Pending Panel</Link>
      <Link to="/search-params?q=tanstack">Search (schema)</Link>
      <Link to="/fail">Fail (Error Boundary)</Link>
      <Link to="/non-existent">404</Link>
      <Link to="/deferred">Deferred</Link>
      <Link to="/lazy">Lazy</Link>
    </nav>
  );
}

// Main and basic examples
function MainPanel() {
  return <h1>Main Panel</h1>;
}

function Profile() {
  const { id } = useParams({ strict: false });
  return <h1>Profile ID: {id}</h1>;
}

function Search() {
  const router = useRouter();
  const location = router.history.location;

  const search = useSearch({ strict: false });

  return <h1>Search for: {search.q || '(none)'}</h1>;
}

function Panel1() {
  return <h1>Panel 1</h1>;
}

function Panel2() {
  return <h1>Panel 2</h1>;
}

function Panel3() {
  return <h1>Panel 3</h1>;
}

function Panel4() {
  return <h1>Panel 4</h1>;
}

function Blog() {
  const value = useParams({ strict: false });
  return <h1>Blog Wildcard Matched: {value._splat}</h1>;
}

// Settings
function Settings() {
  return (
    <div>
      <h1>Settings</h1>
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

// Navigate Demo
function NavigateDemo() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Navigate Demo</h1>
      <button onClick={() => navigate({ to: '/panel4' })}>Go to Panel 4</button>
    </div>
  );
}

// Loader Demo
async function loadUsers() {
  return new Promise((resolve) =>
    setTimeout(() => resolve([{ id: 1, name: 'Jane' }, { id: 2, name: 'John' }]), 500)
  );
}

function LoaderUsers() {
  const users = useLoaderData({ strict: false });

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Pending status demo
function PendingAwarePanel() {
  const state = useRouterState();

  return (
    <div style={{ opacity: state.status === 'pending' ? 0.4 : 1 }}>
      <h1>Status: {state.status}</h1>
    </div>
  );
}

// Search param schema
function SearchSchemaDemo() {
  const search = useSearch({ strict: false });
  return <h1>Search (schema): {search.q || '(none)'}</h1>;
}

// Error boundary
function FailingLoader() {
  throw new Error('Something failed!');
}
function FallbackError({ error }) {
  return <h1>Error occurred: {error.message}</h1>;
}

// 404
function NotFound() {
  return <h1>404: Not Found</h1>;
}

// TanStack Router route tree
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Nav />
      <Outlet />
    </>
  ),
});

const indexRoute = createRoute({
  path: '/',
  getParentRoute: () => rootRoute,
  component: MainPanel,
});
const panel1Route = createRoute({
  path: '/panel1',
  getParentRoute: () => rootRoute,
  component: Panel1,
});
const panel2Route = createRoute({
  path: '/panel2',
  getParentRoute: () => rootRoute,
  component: Panel2,
});
const panel3Route = createRoute({
  path: '/panel3',
  getParentRoute: () => rootRoute,
  component: Panel3,
});
const panel4Route = createRoute({
  path: '/panel4',
  getParentRoute: () => rootRoute,
  component: Panel4,
});
const productRoute = createRoute({
  path: '/product/$id',
  getParentRoute: () => rootRoute,
  parseParams: (params) => ({ id: params.id }),
  component: Profile,
});
const searchRoute = createRoute({
  path: '/search',
  getParentRoute: () => rootRoute,
  validateSearch: z.object({
    q: z.string().optional().default(''),
  }),
  component: Search,
});

const blogBaseRoute = createRoute({
  path: 'blog',
  getParentRoute: () => rootRoute,
  component: Outlet,
});
const blogRoute = createRoute({
  path: '$',
  getParentRoute: () => blogBaseRoute,
  component: Blog,
});

blogBaseRoute.addChildren([blogRoute]);


const navigateRoute = createRoute({
  path: '/navigate',
  getParentRoute: () => rootRoute,
  component: NavigateDemo,
});
const usersRoute = createRoute({
  path: '/users',
  getParentRoute: () => rootRoute,
  loader: loadUsers,
  component: LoaderUsers,
});
const pendingRoute = createRoute({
  path: '/pending',
  getParentRoute: () => rootRoute,
  component: PendingAwarePanel,
});
const searchParamsRoute = createRoute({
  path: '/search-params',
  getParentRoute: () => rootRoute,
  validateSearch: z.object({ q: z.string().optional() }),
  component: SearchSchemaDemo,
});
const failRoute = createRoute({
  path: '/fail',
  getParentRoute: () => rootRoute,
  loader: FailingLoader,
  component: () => <h1>Should not render</h1>,
  errorComponent: FallbackError,
});
const notFoundRoute = createRoute({
  path: '$',
  getParentRoute: () => rootRoute,
  component: NotFound,
});

// Settings subtree
const settingsRoute = createRoute({
  path: '/settings',
  getParentRoute: () => rootRoute,
  component: Settings,
});
const settingsHomeRoute = createRoute({
  path: '/',
  getParentRoute: () => settingsRoute,
  component: SettingsHome,
});
const settingsProfileRoute = createRoute({
  path: 'profile',
  getParentRoute: () => settingsRoute,
  component: SettingsProfile,
});
settingsRoute.addChildren([settingsHomeRoute, settingsProfileRoute]);

// Deferred route
const deferredRoute = createRoute({
  path: '/deferred',
  getParentRoute: () => rootRoute,
  loader: async () => {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ message: 'Deferred data loaded!' }), 1000)
    );
  },
  component: () => {
    const data = useLoaderData({ strict: false });
    return <h1>{data.message}</h1>;
  },
});

// Lazy route
const lazyComponent = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => import('./LazyLoadedPanel.jsx').then(resolve), 500)
  )
);

const LazyComponentWrapper = () => {
  const LazyComponent = lazyComponent;

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <LazyComponent />
    </Suspense>
  );
};

const lazyRoute = createRoute({
  path: '/lazy',
  getParentRoute: () => rootRoute,
  component: LazyComponentWrapper,
});

// Route tree
export const routeTree = rootRoute.addChildren([
  indexRoute,
  panel1Route,
  panel2Route,
  panel3Route,
  panel4Route,
  productRoute,
  searchRoute,
  blogBaseRoute,
  navigateRoute,
  usersRoute,
  pendingRoute,
  searchParamsRoute,
  failRoute,
  settingsRoute,
  deferredRoute,
  lazyRoute,
  notFoundRoute,
]);
