import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAuth();

  const Navigate = useNavigate();

  useEffect(() => {
    if(!isAuth) Navigate('/login',{replace: true});
  },[isAuth,Navigate]);

  return children;
};

export default ProtectedRoute;