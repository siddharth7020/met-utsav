import Navbar from "./Navbar";
import Footer from "../Common/Footer";
import { Outlet } from 'react-router-dom';
import Navbar2 from "./Navbar2";

const Layout = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;
  console.log(role);
  
  

  return (
    <div>
      {role === "Trustee" ? <Navbar2 /> : <Navbar />}
      <div><Outlet /></div>
      <Footer />
    </div>
  )
}

export default Layout;