// import React, { createContext, useState, useEffect } from "react";

// // Create Context
// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check if user is already logged in (from localStorage)
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser)); // Set the user from localStorage
//     }
//   }, []);

//   const login = (userData, token) => {
//     localStorage.setItem("user", JSON.stringify(userData));
//     localStorage.setItem("token", token);
//     setUser(userData); // Set user state
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null); // Clear user state
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
