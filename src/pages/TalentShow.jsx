import { useEffect, useState } from "react";
import EventsCard from "../components/Common/EventCard"
import axios from "axios";
import Photo1 from "../assets/MET-USTAV/talentshow.jpg";

const TalentShow = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios
            .get('http://utsav.hello.met.edu/api/events')
            .then((response) => {
                const filteredEvents = response.data.filter(event => event.categoryId === event.Category.id && event.Category.name === 'Talent Show');
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
                            Talent Show
                        </h1>
                        <p className="mt-6 text-gray-500 dark:text-gray-300">
                            A talent show highlights diverse skills like singing, dancing, and acting. It celebrates creativity, boosts confidence, and provides a platform for participants to showcase their abilities.
                        </p>
                    </div>

                    <div className="flex justify-center mt-10">
                        <img className=" w-full h-96  rounded-xl " src={Photo1} />
                    </div>
                </div>
            </section>

            <section className="bg-white ">
                <div className="px-6 py-16 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="max-w-screen-lg text-gray-900 sm:text-lg ">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold ">
                            Step Into the Spotlight at  <span className="font-extrabold text-red-600">MET Utsav Talent Show 2025!</span>
                        </h2>
                        <p className="mb-4 ">
                            Are you ready to turn your talent into something extraordinary? The MET Utsav Talent Show isn’t just a stage—it’s your gateway to being trained,
                            mentored, and judged by industry professionals who know what it takes to succeed!

                            This isn’t just a competition; it’s a once-in-a-lifetime experience where participants get the chance to refine their skills, learn insider secrets,
                            and elevate their craft to new heights. Whether you’re a singer, actor, if you have a band, play an instrument, magician, or have a talent that
                            defies categories, this is your moment to shine!
                        </p>

                        <h2 className="mb-4 text-4xl tracking-tight font-bold ">

                        </h2>
                        <p className="mb-4 font-medium">

                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:items-center">
                        <div className="w-full space-y-12 lg:w-1/2 ">
                            <div>
                                <h1 className="mb-4 text-4xl tracking-tight font-bold ">
                                    Why You Can’t Miss <br /> This Opportunity:
                                </h1>

                                <div className="mt-2">
                                    <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
                                    <span className="inline-block w-3 h-1 ml-1 bg-red-500 rounded-full"></span>
                                    <span className="inline-block w-1 h-1 ml-1 bg-red-500 rounded-full"></span>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 bg-blue-100 rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <p className="text-xl font-semibold text-gray-900 capitalize ">
                                        Train with the Best: Industry experts will guide and prepare you to deliver a stellar performance.
                                    </p>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 bg-blue-100 rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <p className="text-xl font-semibold text-gray-900 capitalize ">
                                        Your talent will be evaluated by renowned professionals who know what it takes to stand out.
                                    </p>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 bg-blue-100 rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <p className="text-xl font-semibold text-gray-900 capitalize ">
                                        Unleash Your Potential: Learn, grow, and showcase your talent like never before.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                            <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] " src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" alt="" />
                        </div>
                    </div>

                    <hr className="my-12 border-gray-200 dark:border-gray-700" />

                    <div className="lg:flex lg:items-center">
                        <div className="w-full space-y-12 lg:w-1/2 ">
                            <div>
                                <h1 className="mb-4 text-4xl tracking-tight font-bold ">
                                    Event Highlights:
                                </h1>

                                <div className="mt-2">
                                    <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
                                    <span className="inline-block w-3 h-1 ml-1 bg-red-500 rounded-full"></span>
                                    <span className="inline-block w-1 h-1 ml-1 bg-red-500 rounded-full"></span>
                                </div>
                            </div>


                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 bg-blue-100 rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <p className="text-xl font-semibold text-gray-900 capitalize ">
                                        Open to all MET students and staff.
                                    </p>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 bg-blue-100 rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <p className="text-xl font-semibold text-gray-900 capitalize ">
                                        Personalized guidance to perfect your act.
                                    </p>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 bg-blue-100 rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <p className="text-xl font-semibold text-gray-900 capitalize ">
                                        A prestigious platform to wow the audience and experts alike.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">

                        </div>
                    </div>

                    <hr className="mt-12 border-gray-200 dark:border-gray-700" />

                </div>
            </section>

            <section className="bg-white">
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

export default TalentShow