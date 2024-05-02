import { GoogleLogin } from '@react-oauth/google';

export default function GoogleLoginField() {
  return (
    <GoogleLogin
      shape='pill'
      useOneTap
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}
