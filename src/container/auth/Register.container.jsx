import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { registerRequest } from '../../state/auth/auth.slice';

import { RegisterForm } from '../../components/auth/RegisterForm';

export const RegisterContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerSuccess = useSelector((state) => state.auth.registerSuccess);

  useEffect(() => {
    if (registerSuccess) {
      navigate('/');
    }
  }, [registerSuccess, navigate]);

  const handleRegister = (user) => {
    dispatch(registerRequest(user));
  };

  return <RegisterForm handleRegister={handleRegister} />;
};
