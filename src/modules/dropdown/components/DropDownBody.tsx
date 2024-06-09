import { PropsWithChildren, useEffect, useRef } from 'react';

interface DropDownBodyProps {
  isOpen: boolean;
  onClose: () => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
}
export function DropDownBody({ isOpen, onClose, dropdownRef, children }: PropsWithChildren<DropDownBodyProps>) {
  useEffect(() => {
    if (!isOpen) return;

    function close() {
      if (!dropdownRef.current?.contains(event!.target as Node)) onClose();
    }

    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  });

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        ref={dropdownRef}
        className='absolute top-14 right-0 w-48 mt-2 py-2 rounded-md shadow-xl
        bg-white dark:bg-gray-700'>
        {children}
      </div>
    </>
  );
}
