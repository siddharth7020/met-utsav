import Slider from '../Common/Slider';
import Cards from '../Common/Cards';
import About from '../Common/About';

const HomeTab = () => {
  return (
    <div className="">
      <Slider />
      <div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">MET USTAV Events</h2>
          <Cards />
        </div>
      </div>
      <About />
    </div>
  )
}

export default HomeTab;