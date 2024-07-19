import { ReactNode } from 'react';

import useOutsideClick from '../../hooks/useOutsideClick';

interface DropDownProps {
  head: ReactNode;
  body: ReactNode;
}

export default function Dropdown({ head, body }: DropDownProps) {
  const { isOpen, toggle, ref } = useOutsideClick();

  if (!head || !body) {
    throw new Error('Dropdown component requires head and body props');
  }

  return (
    <>
      <div
        className='relative'
        ref={ref}>
        <div onClick={toggle}>{head}</div>
        {!!isOpen && body}
      </div>
    </>
  );
}
