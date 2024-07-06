import { RouteObject } from 'react-router';
import ErrorBoundary from '../components/ErrorBoundary';

type ChildrenObject = { [key: string]: RouteObject };
type Path = string | [string, string];

export default function Route(path: Path, element: JSX.Element, childrenObject: ChildrenObject = {}): RouteObject {
  const children = Object.values(childrenObject);

  if (path instanceof Array) {
    return { id: path[0], path: path[1], element, children };
  }
  return { id: path, path, element, children, errorElement: <ErrorBoundary /> };
}
