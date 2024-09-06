import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import GoogleLoginField from '../GoogleLoginField';

export default function SignInForm() {
  const [identifier, setIdentifier] = useState('');

  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.table(
      {
        identifier,
        password,
      },
      ['key as label']
    );
  }

  return (
    <>
      <form
        className='flex flex-col gap-8 bg-gray-50 p-8 rounded-3xl'
        onSubmit={handleSubmit}>
        <div>
          <h1 className='text-3xl'>Sign Up</h1>
          <h3>Create an account to get started with Jolly.</h3>
        </div>

        <FormRow>
          <InputField
            type='text'
            placeholder='Email or Username'
            value={identifier}
            onChange={e => setIdentifier(e.target.value)}
          />

          <InputField
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormRow>

        <Button
          type='submit'
          text='Sign Up'
        />

        <div className='flex flex-col gap-4 justify-center items-center'>
          <div className='flex justify-center items-center'>
            <p> Don't have an account?</p>
            <NavLink
              className='font-bold mx-1'
              to='/auth?registering=true'>
              Sign Up
            </NavLink>
          </div>

          <h3>or</h3>

          <div className='flex justify-center items-center gap-4'>
            <GoogleLoginField />
            <GoogleLoginField />
          </div>
        </div>
      </form>
    </>
  );
}

function FormRow({ children }: { children: React.ReactNode }) {
  return <div className='flex gap-8 justify-center'>{children}</div>;
}
