import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    localStorage.clear();
    signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      localStorage.getItem("userName") &&
        updateProfile(user, {
          displayName: localStorage.getItem("userName"),
        });
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
