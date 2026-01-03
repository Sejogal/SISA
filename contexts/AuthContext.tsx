import { createContext, useState } from "react";
import { fakeUser } from "../mocks/userMock";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  function login(email, password) {
    // Simulação de login
    if (email && password) {
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
      return true;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
