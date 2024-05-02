import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Route from './util/Route';
import RootLayout from './layouts/RootLayout';
import Counter from './components/Counter';
import Console from './components/Console';

/** TODO: custom text/json route parser */
const routes = [
  Route(['root', ''], <RootLayout />, {
    0: Route(['root-root', ''], <div>Landing</div>),
    1: Route('dashboard', <div>Dashboard</div>, {}),
    2: Route('test', <Counter />),
    3: Route('console', <Console />),
  }),
  Route('auth', <div>Auth</div>),
  Route(['not-defined', '*'], <div>404</div>),
];

const Routes = () => <RouterProvider router={createBrowserRouter(routes)} />;
export default Routes;
