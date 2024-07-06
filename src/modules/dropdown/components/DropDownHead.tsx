import { ReactNode } from 'react';
import Spread from '../../../util/Spread';

interface DropDownHeadProps {
  onClick: () => void;
  head: ReactNode[];
}
export default function DropDownHead({ onClick, head }: DropDownHeadProps) {
  return (
    <>
      <div
        onClick={onClick}
        className='bg-gray-200 dark:bg-gray-700 p-4 rounded'>
        <div className='flex items-center space-x-2'>
          <Spread items={head} />
        </div>
      </div>
    </>
  );
}
