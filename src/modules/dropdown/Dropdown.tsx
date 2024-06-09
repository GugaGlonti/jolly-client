import { ReactNode, useRef, useState } from 'react';

import { DropDownHead } from './components/DropDownHead';
import { DropDownBody } from './components/DropDownBody';

interface DropDownProps {
  head: ReactNode[];
  body: ReactNode[];
}

export default function Dropdown({ head, body }: DropDownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(prev => !prev);
  }

  return (
    <>
      <div
        className='relative'
        ref={dropdownRef}>
        <DropDownHead onClick={handleOpen}>
          {head.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </DropDownHead>
        <DropDownBody
          dropdownRef={dropdownRef}
          isOpen={isOpen}
          onClose={handleOpen}>
          {body.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </DropDownBody>
      </div>
    </>
  );
}
