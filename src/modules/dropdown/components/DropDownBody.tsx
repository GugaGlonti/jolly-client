import { ReactNode } from 'react';
import Spread from '../../../util/Spread';

interface DropDownBodyProps {
  isOpen: boolean;
  body: ReactNode[];
}
export default function DropDownBody({ isOpen, body }: DropDownBodyProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className='absolute top-14 right-0 w-48 mt-2 py-2 rounded-md shadow-xl
        bg-white dark:bg-gray-700'>
        <Spread items={body} />
      </div>
    </>
  );
}
