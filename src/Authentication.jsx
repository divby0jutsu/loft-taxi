import React, { useState } from 'react';
export const AuthContext = React.createContext({});
export const useAuthContext = () => React.useContext(AuthContext);

const Authentication = ({children}) => {

  const [isLoggedIn, setLogin] = useState(false);

  const login = (email, password) => {
    if(email !== "mail@mail.com" || password !== "psw") {
      console.log(email, password);
      return;
    }
    setLogin(true);
    console.log(isLoggedIn);
  };

  const logout = () => {
    setLogin(false);
  };

  return(<AuthContext.Provider value={{isLoggedIn, login, logout}}>{children}</AuthContext.Provider>);

}

export default Authentication;