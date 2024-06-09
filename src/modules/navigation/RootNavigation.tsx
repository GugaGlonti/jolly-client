import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const { Divider, Header, Item } = Dropdown;
const { Link, Collapse, Brand, Toggle } = Navbar;

export default function RootNavigation() {
  const navigate = useNavigate();

  return (
    <Navbar
      fluid
      rounded>
      <Brand href='https://flowbite-react.com'>
        <img
          src='/favicon.svg'
          className='mr-3 h-6 sm:h-9'
          alt='Flowbite React Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>Flowbite React</span>
      </Brand>
      <div className='flex md:order-2'>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt='User settings'
              img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              rounded
            />
          }>
          <Header>
            <span className='block text-sm'>Bonnie Green</span>
            <span className='block truncate text-sm font-medium'>name@flowbite.com</span>
          </Header>
          <Item onClick={() => navigate('dashboard')}>Dashboard</Item>
          <Item onClick={() => navigate('profile')}>Profile</Item>
          <Item onClick={() => navigate('settings')}>Settings</Item>
          <Divider />
          <Item>Sign out</Item>
        </Dropdown>
        <Toggle />
      </div>
      <Collapse>
        <Link
          href='#'
          active>
          Home
        </Link>
        <Link href='#'>About</Link>
        <Link href='#'>Services</Link>
        <Link href='#'>Pricing</Link>
        <Link href='#'>Contact</Link>
      </Collapse>
    </Navbar>
  );
}
