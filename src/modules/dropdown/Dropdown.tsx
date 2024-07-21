import { ReactNode } from 'react';

import useOutsideClick from '../../hooks/useOutsideClick';
import assert from '../../util/assert';

interface DropDownProps {
  head: ReactNode;
  body: ReactNode;
}

export default function Dropdown({ head, body }: DropDownProps) {
  assert(head, body, false, 'Head and body are required');
  const { isOpen, toggle, ref } = useOutsideClick();

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
