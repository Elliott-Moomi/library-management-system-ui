import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginRequest } from '../../state/auth/auth.slice';

import { LoginForm } from '../../components/auth/LoginForm';

export const LoginContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/books');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (user) => {
    dispatch(loginRequest(user));
  };

  return <LoginForm handleLogin={handleLogin} />;
};
