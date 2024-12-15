import Slider from '../Common/Slider';
import Cards from '../Common/Cards';
import About from '../Common/About';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">MET USTAV Events</h2>
          <Cards events={events}  />
        </div>
      </div>
      <About />
    </div>
  )
}

export default HomeTab;