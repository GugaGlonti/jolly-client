import { ReactNode } from 'react';

import DropDownHead from './components/DropDownHead';
import DropDownBody from './components/DropDownBody';
import useOutsideClick from '../../hooks/useOutsideClick';

interface DropDownProps {
  head: ReactNode[];
  body: ReactNode[];
}

export default function Dropdown({ head, body }: DropDownProps) {
  const { isOpen, toggle, ref } = useOutsideClick();

  return (
    <>
      <div
        className='relative'
        ref={ref}>
        <DropDownHead
          onClick={toggle}
          head={head}
        />
        <DropDownBody
          isOpen={isOpen}
          body={body}></DropDownBody>
      </div>
    </>
  );
}
