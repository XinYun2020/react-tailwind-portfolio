import React, { useState, useContext } from "react";
import { auth } from "../../utils/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  /* ONLY WANT THIS WHEN ON MOUNT */
  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []); // empty: render only once

  const value = { currentUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
