import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isLogeddIn: false,
  login: (token) => {},
  logOut: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState("");
  const isUserLoggedIn = !!token;

  const loginHandler = (email,idToken) => {
    localStorage.setItem("token", idToken);
    setToken(idToken);
    setEmail(email);
  };

  const logOutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const contextValue = {
    email: email,
    token: token,
    isLoggedIn: isUserLoggedIn,
    login: loginHandler,
    logOut: logOutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
