import Logo from '../../components/Logo';

export default function RootFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className='py-6 h-fit bg-gray-50 dark:bg-gray-900'>
        <div className='my-6 mx-24'>
          <div className='w-full flex justify-between items-center my-8'>
            <Logo className='h-16' />
            <div className='flex gap-8'>
              <div>About</div>
              <div>Privacy Policy</div>
              <div>Licensing</div>
              <div>Contact</div>
            </div>
          </div>
          <hr className='dark: border-gray-800' />
          <div className='w-full flex justify-center my-8'>
            <span>
              {year} Jolly. All Rights <i>not yet</i> Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
