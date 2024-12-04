import Slider from '../Common/Slider';
import Cards from '../Common/Cards';
import About from '../Common/About';
import { BANNER1 } from '../../assets/Image';
import { BANNER2 } from "../../assets/Image";
import { BANNER3 } from "../../assets/Image";
import { BANNER4 } from "../../assets/Image";
import { BANNER5 } from "../../assets/Image";
import { BANNER6 } from "../../assets/Image";

const HomeTab = () => {

  const events = [
    {
      id: 1,
      title: "Dance Festival 2024",
      date: "2024-07-15",
      location: "MET Ground",
      image: BANNER1,
      description: "Join us for the biggest music festival of the summer featuring top artists from around the world."
    },
    {
      id: 2,
      title: "Techno Bollywood 2024",
      date: "2024-08-20",
      location: "Convention Center",
      image: BANNER2,
      description: "Experience the latest in technology trends and innovations at this premier tech conference."
    },
    {
      id: 3,
      title: "Play",
      date: "2024-09-10",
      location: "MET Ground",
      image: BANNER3,
      description: "Savor the finest cuisine and wines from renowned chefs and wineries."
    },
    {
      id: 4,
      title: "Photography Competition 2024",
      date: "2024-09-10",
      location: "MET Building",
      image: BANNER4,
      description: "Savor the finest cuisine and wines from renowned chefs and wineries."
    },
    {
      id: 5,
      title: "Kathak Dance 2024",
      date: "2024-09-10",
      location: "Convention Center",
      image: BANNER5,
      description: "Savor the finest cuisine and wines from renowned chefs and wineries."
    },
    {
      id: 6,
      title: "Talent Show 2024",
      date: "2024-09-10",
      location: "Convention Center",
      image: BANNER6,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    }
  ];
  return (
    <div className="">
      <Slider events={events}/>
      <div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">MET USTAV Events</h2>
          <Cards events={events}/>
        </div>
      </div>
      <About />
    </div>
  )
}

export default HomeTab;