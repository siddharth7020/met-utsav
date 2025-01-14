// import Slider from '../Common/Slider';
import About from '../Common/About';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import ShowsCards from '../Common/ShowsCards';
// import Banner1 from '../../assets/MET-USTAV/slider/2.png';
import localVideoFile from "../../assets/MET-USTAV/METUTSAVV.mp4"
import METLOGO from "/metlogo.jpg";


const HomeTab = () => {
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://utsav.met.edu/api/events')
  //     .then((response) => setEvents(response.data))
  //     .catch((error) => console.error('Error fetching events:', error));
  // }, []);


  return (
    <div className="">
      {/* <Slider events={events}/> */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-2  gap-4 px-8">

        {/* Left Section: Video/Media */}
        <div className="relative  md:h-full overflow-hidden">
          {/* <iframe width="100%" height="500" className="vid-iframe" src="https://www.youtube.com/embed/txu4QGFhKuc?autoplay=1"
            frameBorder="0" allowfullscreen /> */}
          {/* <img src={Banner1} alt="" /> */}
          <video
            width="100%"
            height="500"
            autoPlay
            controls={false}
            muted
          >
            <source src={localVideoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Section: Content */}
        <div className="relative flex flex-col justify-center items-center p-4">
          <div className="space-y-4">
            {/* Title */}
            <div className="space-y-2 text-center">
              <img
                src={METLOGO}
                className="h-64 w-auto max-w-full mx-auto"
                alt="MET Utsav Logo"
              />
              {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                  MET UTSAV 2025
                </span>
              </h1> */}
            </div>

            {/* Description */}
            <p className="text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl text-center">
              MET Utsav 2025 is a vibrant event showcasing talent, creativity, and collaboration through exciting competitions.
            </p>
          </div>
        </div>

      </div>



      <div>
        <div className="max-w-7xl mx-auto px-2 py-6 mt-5">
          <h2 className="text-2xl font-bold ">MET USTAV</h2>
        </div>
        <ShowsCards />
      </div>
      <About />
    </div>
  )
}

export default HomeTab;