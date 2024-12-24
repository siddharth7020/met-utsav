import Slider from '../Common/Slider';
import About from '../Common/About';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ShowsCards from '../Common/ShowsCards';


const HomeTab = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('http://utsav.hello.met.edu/api/events')
      .then((response) => setEvents(response.data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);


  return (
    <div className="">
      <Slider events={events}/>
      <div>
        <div className="max-w-7xl mx-auto px-2 py-6">
          <h2 className="text-2xl font-bold mb-8">MET USTAV Content</h2>
        </div>
        <ShowsCards />
      </div>
      <About />
    </div>
  )
}

export default HomeTab;