import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { userAuth } = useAuth();

  const Navigate = useNavigate();

  useEffect(() => {
    if(!userAuth.isAuth) Navigate('/login',{replace: true});
  },[userAuth,Navigate]);

  return children;
};

export default ProtectedRoute;