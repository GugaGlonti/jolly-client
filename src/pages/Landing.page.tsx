import Button from '../components/Button';

import backgroundImage from '../assets/images/milad-fakurian-nY14Fs8pxT8-unsplash.jpg';
import Logo from '../components/Logo';

export default function Landing() {
  return (
    <>
      <div
        className='h-[80vh] flex flex-col items-center justify-center'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <Logo className='h-32' />
        <h1 className='text-4xl font-bold'>Welcome to JOLLY</h1>
        <p className='text-lg font-semibold'>The best place to be</p>

        <div className='flex gap-4 mt-4'>
          <Button
            text='Sign Up'
            onClick={() => console.log('Sign Up')}
          />
          <Button
            text='Log In'
            onClick={() => console.log('Log In')}
          />
        </div>
      </div>
    </>
  );
}
