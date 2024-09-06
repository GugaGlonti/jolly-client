import { useSearchParams } from 'react-router-dom';
import SignUpForm from '../modules/auth/forms/SignUpForm';
import SignInForm from '../modules/auth/forms/SignInForm';

export default function AuthPage() {
  const [params] = useSearchParams();
  const registering = params.get('registering') === 'true';

  console.log(registering);

  return (
    <>
      <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
        <main className='flex bg-gradient-to-tr from-blue-700 to-blue-300 rounded-3xl'>
          <aside className='p-8'>
            <h1>Jolly 2024</h1>
            <div className='h-full flex flex-col justify-center items-center'>
              <h1>Welcome To Jolly</h1>
            </div>
          </aside>
          {!!registering ? <SignUpForm /> : <SignInForm />}
        </main>
      </div>
    </>
  );
}
