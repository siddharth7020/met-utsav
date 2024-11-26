import Cards from "../Common/Cards"
import Footer from "../Common/Footer"
import Slider from "../Common/Slider"
import Navbar from "./Navbar"


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Cards />
      <Footer/>
      </div>
  )
}

export default Layout