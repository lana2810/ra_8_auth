import React, { useContext, useState, useEffect } from "react";
import API from "../api";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const initialStateError = {
    loginErr: null,
    passwordErr: null,
  };
  const [error, setError] = useState(initialStateError);
  const [currentUser, setCurrentUser] = useState(null);

  function setUser() {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) return;
    API.getUser(userToken)
      .then((response) => {
        setCurrentUser(response);
      })
      .catch((e) => {
        localStorage.removeItem("userToken");
      });
  }

  function resetError() {
    setError(initialStateError);
  }

  function login({ login, password }) {
    API.auth({ login, password })
      .then((response) => {
        const { token } = response;
        localStorage.setItem("userToken", token);
        setUser();
      })
      .catch((e) => {
        if (e.message === "user not found")
          setError({ loginErr: "user not found" });
        if (e.message === "invalid password")
          setError({ passwordErr: "invalid password" });
      });
  }

  function logout() {
    setCurrentUser(null);
    localStorage.removeItem("userToken");
  }

  return (
    <AuthContext.Provider
      value={{ login, error, resetError, currentUser, logout, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
