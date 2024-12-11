// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'; // Import the custom hook to access auth data

// const ProtectedRoute = ({ element, allowedRoles, ...rest }) => {
//   const { user } = useAuth(); // Get user data from context

//   if (!user) {
//     // If not logged in, redirect to login page
//     return <Navigate to="/login" />;
//   }

//   if (allowedRoles && !allowedRoles.includes(user.role)) {
//     // If role does not match, redirect to the home page (or any other page)
//     return <Navigate to="/" />;
//   }

//   return element; // If user is authenticated and has the correct role, render the element
// };

// export default ProtectedRoute;
