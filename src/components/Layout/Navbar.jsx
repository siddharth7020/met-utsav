import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import METLOGO from "../../assets/logo.png";
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth(); 

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Attendance', path: '/attendance', roles: ['Trustee','HOE','Coordinator', 'Volunteer'] },
    { label: 'Notice', path: '/notice', roles: ['Trustee','HOE','Coordinator', 'Volunteer', 'Participant' ] },
    { label: 'Roles', path: '/roles', roles: ['Trustee','HOE','Coordinator'] },
    { label: 'Events', path: '/events', roles: ['Trustee','HOE'] },
  ];

  // Filter menu items based on the user's role
  const filteredMenuItems = menuItems.filter(
    (item) => !item.roles || item.roles.includes(user?.role)
  );

  const handleMenuToggle = () => {
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
            onClick={handleMenuToggle}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {filteredMenuItems.map((item) => (
            <li key={item.label}>
              <a
                className={`text-sm text-gray-400 hover:text-red-600 font-bold ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Responsive Menu */}
        {menuOpen && (
          <div className="navbar-menu relative z-50">
            <div
              className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
              onClick={handleMenuToggle}
            ></div>
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
            </nav>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
