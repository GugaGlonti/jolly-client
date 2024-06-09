import { PropsWithChildren } from 'react';

export function Nav({ children }: PropsWithChildren) {
  return <nav className='flex justify-between relative'>{children}</nav>;
}
