import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const publicRoutes = [
  {
    path: '/',
    Component: () => <div>Home</div>,
  },
  {
    path: '/login',
    Component: () => <div>Login</div>,
  },
];

const privateRoutes = [
  {
    path: '/',
    Component: () => <div>Home</div>,
  },
  {
    path: '/dashboard',
    Component: () => <div>Dashboard</div>,
  },
];

export function PublicRoutesProvider() {
  return <RouterProvider router={createBrowserRouter(publicRoutes)} />;
}

export function PrivateRoutesProvider() {
  return <RouterProvider router={createBrowserRouter(privateRoutes)} />;
}
