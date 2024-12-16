import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

// Create the AuthContext
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store logged-in user details
  const [token, setToken] = useState(null); // Store JWT token

  // Login function
  const login = async (email, password) => {
    try {
      const response = await fetch("http://utsav.hello.met.edu/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user); // Set user details
        setToken(data.token); // Set token
        localStorage.setItem("authToken", data.token); // Store token in local storage
        localStorage.setItem("user", JSON.stringify(data.user)); // Store user in local storage
        return true; // Return success
      } else {
        const error = await response.json();
        throw new Error(error.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error.message);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  };

  // Restore auth state on app load
  const restoreAuth = () => {
    const storedToken = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  };

  // Call restoreAuth when the component mounts
  useEffect(() => {
    restoreAuth(); // Restore user and token from localStorage
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
