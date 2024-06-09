import { useEffect, useRef, useState } from 'react';

export default function useOutsideClick() {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function close(event: MouseEvent) {
      if (!ref.current?.contains(event!.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', close);
    return () => {
      document.removeEventListener('mousedown', close);
    };
  });

  function toggle() {
    setIsOpen(prev => !prev);
  }

  return { isOpen, setIsOpen, toggle, ref };
}
