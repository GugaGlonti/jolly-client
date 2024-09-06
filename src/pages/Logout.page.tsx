import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { authSlice, logout } from '../store/auth/authSlice';

import useRedux from '../hooks/useRedux';

export default function LogoutPage() {
  const navigate = useNavigate();
  const { dispatch } = useRedux(authSlice);

  function onLogout() {
    dispatch(logout());
    navigate('/');
  }

  useEffect(onLogout, []);
  return null;
}
