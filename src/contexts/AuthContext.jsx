import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for authentication
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuthStatus = localStorage.getItem("isAuthenticated");
    return savedAuthStatus === "true";
  });

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true"); // Save to local storage
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Remove from local storage
  };

  // Clean up local storage on unmount if necessary
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
