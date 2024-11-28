import Navbar from "./Navbar";
import Footer from "../Common/Footer";
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div>
      <Navbar />
      <div><Outlet /></div>
      <Footer/>
    </div>
  )
}

export default Layout