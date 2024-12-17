import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import METLOGO from "../../assets/logo.png";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const userToken = localStorage.getItem("authToken");
    setIsLoggedIn(!!userToken); // Update login status
  }, [user]); // Re-run when `user` state changes

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events", roles: ["Trustee", "HOE"] },
    { label: "Attendance", path: "/attendance", roles: ["Trustee", "HOE", "Coordinator", "Volunteer", "Participant"] },
    { label: "Notice", path: "/notice", roles: ["Trustee", "HOE", "Coordinator", "Volunteer", "Participant"] },
    { label: "Roles", path: "/roles", roles: ["Trustee", "HOE", "Coordinator"] },
  ];

  const filteredMenuItems = menuItems.filter((item) => !item.roles || item.roles.includes(user?.role));

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="#">
          <img src={METLOGO} width="100" height="70" alt="Logo" />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-gray-600 p-3" onClick={handleMenuToggle}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {filteredMenuItems.map((item) => (
            <li className="flex gap-2" key={item.label}>
              <a
                className={`text-sm ${
                  window.location.pathname === item.path ? "text-red-600 hover:text-black font-bold" : "text-gray-400"
                } hover:text-black font-bold`}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical text-gray-400 mt-1" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </li>
          ))}
        </ul>
        {!isLoggedIn ? (
          <>
            <Link
              className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-red-100 hover:bg-red-200 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
              to={"/login"}
            >
              Sign In
            </Link>
            <Link
              className="hidden lg:inline-block py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm text-white font-bold rounded-xl transition duration-200"
              to={"/register"}
            >
              Sign Up
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="hidden lg:inline-block py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm text-white font-bold rounded-xl transition duration-200"
          >
            Log out
          </button>
        )}
        {/* Responsive Menu */}
        {menuOpen && (
          <div className="navbar-menu relative z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={handleMenuToggle}></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
              <ul>
                {filteredMenuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      className="block p-4 text-sm font-semibold text-red-500 hover:bg-red-100 hover:text-red-600 rounded"
                      onClick={() => {
                        navigate(item.path);
                        setMenuOpen(false); // Close the menu after navigation
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              {!isLoggedIn && (
                <>
                  <Link
                    className="block py-2 px-6 bg-red-100 hover:bg-red-200 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
                    to={"/login"}
                  >
                    Sign In
                  </Link>
                  <Link
                    className="block py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm text-white font-bold rounded-xl transition duration-200"
                    to={"/register"}
                  >
                    Sign Up
                  </Link>
                </>
              )}
              {isLoggedIn && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="block py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm text-white font-bold rounded-xl transition duration-200"
                  >
                    Log out
                  </button>
                </li>
              )}
            </nav>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
