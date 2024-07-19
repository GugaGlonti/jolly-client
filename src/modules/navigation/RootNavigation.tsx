import { NavLink } from 'react-router-dom';
import Group from './components/Group';

import Nav from './components/Nav';
import Dropdown from '../dropdown/Dropdown';
import ProfilePicture from './components/ProfilePicture';
import DropDownDivider from '../dropdown/components/DropDownDivider';
import DropDownButton from '../dropdown/components/DropDownButton';
import Logo from '../../components/Logo';

export default function RootNavigation() {
  return (
    <>
      <header className='shadow p-2 h-20 bg-gray-50 dark:bg-gray-900'>
        <Nav>
          <Group>
            <Logo className='h-16' />
            <h1 className='font-bold'>Jolly</h1>
          </Group>
          <Group center>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>About</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </Group>
          <Group>
            <Dropdown
              head={[<span className='text-sm font-medium'>Guga Glonti</span>, <ProfilePicture />]}
              body={[<DropDownButton label='Profile' />, <DropDownButton label='Settings' />, <DropDownDivider />, <DropDownButton label='Log out' />]}></Dropdown>
          </Group>
        </Nav>
      </header>
    </>
  );
}
