import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import GoogleLoginField from '../GoogleLoginField';

export default function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [termsAgreed, setTermsAgreed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.table(
      {
        firstName,
        lastName,
        email,
        username,
        password,
        confirmPassword,
        termsAgreed,
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
            placeholder='First Name'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />

          <InputField
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </FormRow>

        <FormRow>
          <InputField
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <InputField
            type='text'
            placeholder='Username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormRow>

        <FormRow>
          <InputField
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <InputField
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </FormRow>

        <div className='flex justify-start items-center gap-4'>
          <input
            className='rounded border border-gray-300'
            type='checkbox'
            checked={termsAgreed}
            onChange={e => setTermsAgreed(e.target.checked)}
          />
          <h3>
            I have read and agree to the
            <NavLink
              className='font-bold mx-1'
              to='/terms'>
              Terms of Service
            </NavLink>
            and
            <NavLink
              className='font-bold mx-1'
              to='/privacy'>
              Privacy Policy
            </NavLink>
          </h3>
        </div>

        <Button
          type='submit'
          text='Sign Up'
        />

        <div className='flex flex-col gap-4 justify-center items-center'>
          <div className='flex justify-center items-center'>
            <p> Already have an account?</p>
            <NavLink
              className='font-bold mx-1'
              to='/auth?registering=false'>
              Sign In
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
