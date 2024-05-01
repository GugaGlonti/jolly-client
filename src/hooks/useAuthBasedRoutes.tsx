import { useState } from 'react';
import { PrivateRoutesProvider, PublicRoutesProvider } from '../routes';

export default function useAuthBasedRoutes() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return () => <PrivateRoutesProvider />;
  }

  return () => <PublicRoutesProvider />;
}
