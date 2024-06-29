import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(() => {
    const savedAuth = localStorage.getItem('userAuth');
    return savedAuth ? JSON.parse(savedAuth) : { userMail: "", isAuth: false , usertoken: ""};
  });

  useEffect(() => {
    localStorage.setItem('userAuth', JSON.stringify(userAuth));
  }, [userAuth]);

  const login = (user,token) => {
    setUserAuth({userMail: user, isAuth: true, usertoken: token});
  };

  const logout = () => {
    setUserAuth({userMail: "",isAuth: false, usertoken: ""});
    localStorage.removeItem('userAuth');
  };

  return (
    <AuthContext.Provider value={{ userAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
}