import { PropsWithChildren } from 'react';

interface DropDownHeadProps {
  onClick: () => void;
}
export function DropDownHead({ onClick, children }: PropsWithChildren<DropDownHeadProps>) {
  return (
    <div
      onClick={onClick}
      className='bg-gray-200 dark:bg-gray-700 p-4 rounded'>
      <div className='flex items-center space-x-2'>{children}</div>
    </div>
  );
}
