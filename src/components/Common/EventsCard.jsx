import { BANNER1 } from '../../assets/Image';
import { BANNER2 } from "../../assets/Image";
import { BANNER3 } from "../../assets/Image";

const EventsCard = () => {
  const subEvents = [
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
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {
        subEvents.map((SubEvent) => (
          <div key={SubEvent.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-white border-gray-300">
            <a href="#">
              <img className="rounded-t-lg" src={SubEvent.image} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-gray-600">{SubEvent.title}</h5>
              </a>
              <div>
              <p className="mb-3 h-20 font-normal text-gray-700 dark:text-gray-400">{SubEvent.description}</p>
              <p className="font-bold">{SubEvent.date} | {SubEvent.location}</p>
              </div>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default EventsCard;
