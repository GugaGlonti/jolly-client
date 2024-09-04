import { RouteObject } from 'react-router';
import ErrorBoundary from '../components/ErrorBoundary';

type ChildrenObject = { [key: string]: RouteObject };
type Path = string | [string, string];

/**
 * Route object
 * @param path - Route path or array of id and path
 * @param element - Route element
 * @param childrenObject - Route children
 * @returns Route object
 * @example
 * Route('dashboard', <DashboardPage />, {})
 * Route(['root', ''], <RootLayout />, { 0: Route(['root-root', ''], <div>Landing</div>) })
 * Route('auth', <div>Auth</div>)
 */
export default function Route(path: Path, element: JSX.Element, childrenObject: ChildrenObject = {}): RouteObject {
  const children = Object.values(childrenObject);

  if (path instanceof Array) {
    return { id: path[0], path: path[1], element, children };
  }
  return { id: path, path, element, children, errorElement: <ErrorBoundary /> };
}
