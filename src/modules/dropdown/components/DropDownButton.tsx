import { NavLink } from 'react-router-dom';

interface DropDownButtonProps {
  label: string;
}
export function DropDownButton({ label }: DropDownButtonProps) {
  const link = '/' + label.toLowerCase().split(' ').join('');

  return (
    <NavLink
      to={link}
      className='block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-900'>
      {label}
    </NavLink>
  );
}
