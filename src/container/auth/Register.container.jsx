import { useDispatch } from 'react-redux';

import { registerRequest } from '../../state/auth/auth.slice';

import { RegisterForm } from '../../components/auth/RegisterForm';

export const RegisterContainer = () => {
  const dispatch = useDispatch();
  const handleRegister = (user) => {
    console.log('under container', user);
    dispatch(registerRequest(user));
  };

  return <RegisterForm handleRegister={handleRegister} />;
};
