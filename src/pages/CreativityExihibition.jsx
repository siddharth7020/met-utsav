import { useEffect, useState } from "react";
import EventsCard from "../components/Common/EventCard"
import axios from "axios";
import Photo1 from "../assets/MET-USTAV/creativityexhibition.jpeg";

const CreativityExihibition = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios
            .get('https://utsav.met.edu/api/events')
            .then((response) => {
                const filteredEvents = response.data.filter(event => event.categoryId === event.Category.id && event.Category.name === 'Creativity Exhibition');
                console.log(filteredEvents);

                setEvents(filteredEvents);
            })
            .catch((error) => console.error('Error fetching events:', error));
    }, []);


    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-16 mx-auto text-center">
                    <div className="max-w-lg mx-auto">
                        <h1 className="text-3xl font-semibold text-white   lg:text-4xl">
                            Creativity Exhibition
                        </h1>
                        <p className="mt-6 text-gray-500 dark:text-gray-300 ">
                            The Creativity Exhibition at MET Utsav showcases the richness of Indian culture under the theme 
                            "Sanskriti." 
                        </p>
                    </div>

                    <div className="flex justify-center mt-10">
                        <img className=" w-full h-96  rounded-xl " src={Photo1} />
                    </div>
                </div>
            </section>

            <section className="bg-white mt-5">
                <div className="container px-4  mx-auto text-center">
                    <h1 className="mb-4 text-4xl tracking-tight font-bold ">
                        Ready to Showcase Your Talent?
                    </h1>
                    <div className=" space-y-12 p-6  ">
                        <EventsCard events={events} />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default CreativityExihibition