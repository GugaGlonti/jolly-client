import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** @util */
import Route from './util/Route';

/** @layouts */
import RootLayout from './layouts/RootLayout';

/** @pages */
import SettingsPage from './pages/Settings.page';
import ProfilePage from './pages/Profile.page';
import DashboardPage from './pages/Dashboard.page';
import LandingPage from './pages/Landing.page';
import LogoutPage from './pages/Logout.page';
import AuthPage from './pages/Auth.page';

/** TODO: custom text/json route parser */
const routes = [
  Route(['root', ''], <RootLayout />, {
    0: Route(['root-root', ''], <LandingPage />),
    1: Route('dashboard', <DashboardPage />, {}),
    3: Route('profile', <ProfilePage />),
    4: Route('settings', <SettingsPage />),
  }),
  Route('auth', <AuthPage />),
  Route('logout', <LogoutPage />),
  Route(['not-defined', '*'], <div>404</div>),
];

const Routes = () => <RouterProvider router={createBrowserRouter(routes)} />;
export default Routes;
