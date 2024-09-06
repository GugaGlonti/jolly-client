import { useSearchParams } from 'react-router-dom';
import SignUpForm from '../modules/auth/forms/SignUpForm';
import SignInForm from '../modules/auth/forms/SignInForm';

export default function AuthPage() {
  const [params] = useSearchParams();
  const registering = params.get('registering') === 'true';

  console.log(registering);

  return (
    <>
      <h1>AUTH</h1>

      {!!registering && <SignUpForm />}
      {!registering && <SignInForm />}
    </>
  );
}
