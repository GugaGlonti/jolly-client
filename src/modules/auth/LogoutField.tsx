import { googleLogout } from '@react-oauth/google';

export default function LogoutField() {
  function onClick() {
    try {
      googleLogout();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <button
        className='nsm7Bb-HzV7m-LgbsSe-MJoBVe'
        onClick={googleLogout}
        onSubmit={onClick}>
        Logout
      </button>
    </>
  );
}
