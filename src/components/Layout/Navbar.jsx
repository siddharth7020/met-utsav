import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import METLOGO from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="#">
          <img src={METLOGO} width="100" height="70" alt="Logo" />
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
          >
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li> <a
            className={`text-sm text-gray-400 hover:text-red-600 font-bold ${location.pathname === "/" ? "active" : "text-red-600"}`}
            onClick={() => navigate("/")}
          >Home</a></li>
          <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </li>
          <li> <a
            className={`text-sm text-gray-400 hover:text-red-600 font-bold ${location.pathname === "/event" ? "active" : "text-red-600"}`}
            onClick={() => navigate("/event")}
          >Events</a></li>
          <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </li>
          <li><a
            className={`text-sm text-gray-400 hover:text-red-600 font-bold ${location.pathname === "/attendance" ? "active" : "text-red-600"}`}
            onClick={() => navigate("/attendance")}
          >Attendace</a></li>
          <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </li>
          <li><a
            className={`text-sm text-gray-400 hover:text-red-600 font-bold ${location.pathname === "/notice" ? "active" : "text-red-600"}`}
            onClick={() => navigate("/notice")}
          >Notice</a></li>
          <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </li>
          <li><a
            className={`text-sm text-gray-400 hover:text-red-600 font-bold ${location.pathname === "/roles" ? "active" : "text-red-600"}`}
            onClick={() => navigate("/roles")}
          >Role</a></li>
        </ul>
        <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-red-100 hover:bg-red-200 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          href="#">Sign In</a>
        <a className="hidden lg:inline-block py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm text-white font-bold rounded-xl transition duration-200"
          href="#">Sign up</a>
      </nav>

      {/* Responsive menu */}
      {menuOpen && (
        <div className="navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMenu}></div>
          <nav
            className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <img src={METLOGO} width="100" height="70" alt="Logo" />
              </a>
              <button
                className="navbar-close bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white font-bold py-2 px-4 rounded"
                onClick={toggleMenu}
              >
                <svg className="h-6 w-6 text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a className="block p-4 text-sm font-semibold text-red-500 hover:bg-red-100 hover:text-red-600 rounded"
                    href="#">Home</a>
                </li>
                <li className="mb-1">
                  <a className="block p-4 text-sm font-semibold text-red-500 hover:bg-red-100 hover:text-red-600 rounded"
                    href="#">Events</a>
                </li>
                <li className="mb-1">
                  <a className="block p-4 text-sm font-semibold text-red-500 hover:bg-red-100 hover:text-red-600 rounded"
                    href="#">Attendance</a>
                </li>
                <li className="mb-1">
                  <a className="block p-4 text-sm font-semibold text-red-500 hover:bg-red-100 hover:text-red-600 rounded"
                    href="#">Notice</a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-red-100 hover:bg-red-200 rounded-xl"
                  href="#">Sign In</a>
                <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 rounded-xl"
                  href="#">Sign Up</a>
              </div>
              <p className="my-4 text-xs text-center text-red-400">
                <span>Copyright 2021</span>
              </p>
            </div>
          </nav>
        </div>
      )}
      {/* End responsive menu */}
    </div>
  );
};

export default Navbar;
