import { PropsWithChildren } from 'react';

export default function ClassesConfig({ children }: PropsWithChildren) {
  return (
    <div
      className='
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-400

    '>
      {children}
    </div>
  );
}
