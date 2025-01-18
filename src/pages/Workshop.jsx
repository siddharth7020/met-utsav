import { useEffect, useState } from "react";
import EventsCard from "../components/Common/EventCard"
import axios from "axios";
import Photo1 from "../assets/MET-USTAV/workshop.jpg";
import Photo2 from "../assets/MET-USTAV/workshop-mobile.jpg";

const Workshop = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios
            .get('https://utsav.met.edu/api/events')
            .then((response) => {
                const filteredEvents = response.data.filter(event => event.categoryId === event.Category.id && event.Category.name === 'Workshop');
                console.log(filteredEvents);

                setEvents(filteredEvents);
            })
            .catch((error) => console.error('Error fetching events:', error));
    }, []);

    const workshops = [
        {
            name: "Maharashtratil Sanskrutik Yudhhkala",
            timings: ["1:00pm to 2.30 pm", "3.15 pm to 4.45 pm"],
            venue: "Ground Floor",
        },
        {
            name: "Mitti Ka Jadu (Pottery)",
            timings: ["10:30 am to 12:30 pm", "1:00 pm to 3:00 pm", "3:30 pm to 5:30 pm"],
            venue: "Ground floor, Assembly Hall, near Incubation Centre",
        },
        {
            name: "Naad Anubhuti (The experience of Sound)",
            timings: ["12:00 pm to 1:00 pm", "2:00 pm to 3:00 pm"],
            venue: "S9, MRV 2nd Floor",
        },
        {
            name: "Dhyan aur Satarkta Satra (Meditation and Mindfulness)",
            timings: ["10:30 am to 11:30 pm", "11:45 am to 12:45 pm", "1:00 pm to 2:00 pm"],
            venue: "T-7, 3rd Floor",
        },
        {
            name: "Shringar Pratha",
            timings: ["11.00 am to 1:00 pm", "2.00 pm to 4.00 pm"],
            venue: "T-9, AMDC 3rd Floor",
        },
        {
            name: "Nadi Pragamana (River crossing)",
            timings: ["10.00 am to 4:00 pm (Continuous)"],
            venue: "3rd Floor near stair case",
        },
        {
            name: "Swad ki Virasat",
            timings: ["10:30 am to 12:30 pm", "1:00 pm to 3:00 pm"],
            venue: "Classroom 1, 4th Floor, Pharmacy",
        },
        {
            name: "Nritya Utsav (Festival of Dance)",
            timings: ["10.30 am to 12.00 pm", "12.30 pm to 2.00 pm", "2.30 pm to 4.00 pm"],
            venue: "Recreation Centre, 5th Floor",
        },
        {
            name: "Drishyakala (Photography)",
            timings: ["11:00am to 1:00pm", "2:30 pm to 4:30 pm"],
            venue: "IMM Studio, 7th Floor, Mass Media",
        },
        {
            name: "Abhinay Kala (Acting)",
            timings: ["10.30 am to 1.30 pm", "2:00 pm to 4.00 pm"],
            venue: "C1, 7th Floor, Mass Media",
        },
        {
            name: "Warli Chitrakala",
            timings: ["11 am to 12.30 pm", "1.30 pm to 3:00 pm", "3.15 pm to 4.45 pm"],
            venue: "Seminar hall 1, 8th Floor",
        },
        {
            name: "Vrukshavalli Aamha Soyari (Gardening)",
            timings: ["10:45 am to 12:00 pm", "12:15 pm to 1:30 pm", "2:00 pm to 3:15 pm", "3:30 pm to 4:45 pm"],
            venue: "Seminar Hall 2 (Opposite to PGDM Office), 8th Floor",
        },
    ];

    return (
        <div>
            <section className="bg-gray-900">
                <div className="container px-6 py-16 mx-auto text-center">
                    <div className="max-w-lg mx-auto">
                        <h1 className="text-3xl font-semibold text-white   lg:text-4xl">
                            Workshop
                        </h1>
                        <p className="mt-6 text-gray-500  ">
                            The Workshop at MET Utsav is a unique opportunity for students to learn new skills, explore their interests, and connect with like-minded individuals.
                        </p>
                    </div>

                    <div className="flex justify-center mt-10">
                        {/* Display Photo1 on desktop */}
                        <img
                            className="w-full h-96 rounded-xl hidden sm:block"
                            src={Photo1}
                            alt="Desktop Photo"
                        />

                        {/* Display Photo2 on mobile */}
                        <img
                            className="w-full h-96 rounded-xl sm:hidden"
                            src={Photo2}
                            alt="Mobile Photo"
                        />
                    </div>
                </div>
            </section>

            <seaction className="bg-gray-100 mb-5 min-h-screen">
                <div className="container mx-auto">
                    <h1 className="text-2xl mt-5 md:text-3xl font-bold text-red-600 mb-6 text-center">
                        Workshops Schedule
                    </h1>

                    {/* Responsive Table Container */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-red-600">
                            <thead>
                                <tr className="bg-red-600 text-white">
                                    <th className="border border-red-600 px-4 py-2 text-left text-sm md:text-base">
                                        Workshops
                                    </th>
                                    <th className="border border-red-600 px-4 py-2 text-left text-sm md:text-base">
                                        Timings
                                    </th>
                                    <th className="border border-red-600 px-4 py-2 text-left text-sm md:text-base">
                                        Venue
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {workshops.map((workshop, index) => (
                                    <tr
                                        key={index}
                                        className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
                                    >
                                        <td className="border border-red-600 px-2 py-2 text-sm md:text-base">
                                            {workshop.name}
                                        </td>
                                        <td className="border border-red-600 px-2 py-2 text-sm md:text-base">
                                            {workshop.timings.map((time, idx) => (
                                                <div key={idx}>{time}</div>
                                            ))}
                                        </td>
                                        <td className="border border-red-600 px-2 py-2 text-sm md:text-base">
                                            {workshop.venue}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </seaction>

            <section className="bg-white mt-5">
                <div className="container px-4  mx-auto text-center">
                    <h1 className="mb-4 text-4xl tracking-tight font-bold ">
                        Unleash Your Creativity: Join the Exciting Workshops!
                    </h1>
                    <div className=" space-y-12 p-6  ">
                        <EventsCard events={events} />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Workshop