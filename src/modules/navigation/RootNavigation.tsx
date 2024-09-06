import { NavLink, useNavigate } from 'react-router-dom';
import Group from './components/Group';

import Nav from './components/Nav';
import Dropdown from '../dropdown/Dropdown';
import ProfilePicture from './components/ProfilePicture';
import DropDownDivider from '../dropdown/components/DropDownDivider';
import DropDownButton from '../dropdown/components/DropDownButton';
import Logo from '../../components/Logo';
import useRedux from '../../hooks/useRedux';
import { authSlice } from '../../store/auth/authSlice';
import Button from '../../components/Button';

export default function RootNavigation() {
  const naviage = useNavigate();

  const { isAuthenticated } = useRedux(authSlice);

  console.log('isAuthenticated', isAuthenticated);

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
            {!isAuthenticated && (
              <div className='flex gap-4 mr-4'>
                <Button
                  text='Sign Up'
                  onClick={() => naviage('/auth?registering=true')}
                />
                <Button
                  text='Log In'
                  onClick={() => naviage('/auth?registering=false')}
                />
              </div>
            )}

            <Dropdown
              head={
                <div className='flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 p-4 rounded'>
                  <span className='text-sm font-medium'>Guga Glonti</span>
                  <ProfilePicture />
                </div>
              }
              body={
                <div className='absolute top-14 right-0 w-48 mt-2 py-2 rounded-md shadow-xl bg-white dark:bg-gray-700'>
                  <DropDownButton label='Profile' />
                  <DropDownButton label='Settings' />
                  <DropDownDivider />
                  <DropDownButton label='Log out' />
                </div>
              }
            />
          </Group>
        </Nav>
      </header>
    </>
  );
}
