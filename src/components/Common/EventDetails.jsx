import { useState } from "react";
import Modal from "../Common/Model";
import { useLocation } from "react-router-dom";
import {Base_URL} from '../Common/Constant';

const EventDeatils = () => {
  const [open, setOpen] = useState(false);
  const [isGroup, setIsGroup] = useState(false); // State to track if 'Group' is selected

  // Handle radio button change
  const handleRadioChange = (e) => {
    setIsGroup(e.target.id === "radio3");
  };

  const location = useLocation();
  const event = location.state?.event; // Access the event details passed via state

  if (!event) {
    return <p>No event details available.</p>; // Handle the case where no event is passed
  }
  // i want to date formate in date and time
  const date = new Date(event.date);
  const formattedDateTime = date.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  

  return (
    <section className="py-12 sm:py-6">
      <div className="container mx-auto px-4">
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 ">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img className="h-full w-full max-w-full object-cover" src={`${Base_URL}${event.banner}`} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Banner Content */}
          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <div className="mx-auto max-w-xs rounded-xl border bg-white px-6 py-8 text-gray-800">
              <h1 className="mb-2 text-2xl font-medium">{event.name}</h1>
              <div className="mb-4 flex items-center space-x-5">
                <span className="font-medium">{event.categoryId}</span>
              </div>
              <div className="mb-4 flex items-center space-x-5">
                <span className="font-medium">{formattedDateTime} | {event.fromTime} - {event.toTime}</span>
              </div>
              <div className="mb-4 flex items-center space-x-5">
                <span className="font-medium">{event.contactPerson} | {event.contactNumber}</span>
              </div>
              <div className="mb-4 flex items-center space-x-5">
                <span className="font-medium">{event.location}</span>
              </div>
              <hr className="border-r-2 border-gray-400 m-0" />
              <button
                onClick={() => setOpen(true)}
                className="w-full mt-4 rounded-xl bg-red-600 px-4 py-3 text-xl font-medium text-white"
              >
                Register
              </button>
            </div>
          </div>

          {/* Modal Component */}
          <Modal open={open} onClose={() => setOpen(false)}>
            <div className="w-70">
              <div>
                <h3 className="text-lg font-black text-gray-800">Talent Show Registration</h3>
                <p className="font-medium mt-1 mb-1 text-gray-500">Type</p>
                <div className="flex gap-x-4">
                  <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                    <input
                      className="peer hidden"
                      type="radio"
                      name="radio"
                      id="radio1"
                      checked={!isGroup}
                      onChange={handleRadioChange}
                    />
                    <label
                      className="peer-checked:border-blue-400 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                      htmlFor="radio1"
                    >
                      {" "}
                    </label>
                    <div className="peer-checked:border-transparent peer-checked:bg-blue-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-400 ring-offset-2"></div>
                    <span className="pointer-events-none z-10">Solo</span>
                  </div>
                  <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                    <input
                      className="peer hidden"
                      type="radio"
                      name="radio"
                      id="radio3"
                      checked={isGroup}
                      onChange={handleRadioChange}
                    />
                    <label
                      className="peer-checked:border-blue-400 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                      htmlFor="radio3"
                    >
                      {" "}
                    </label>
                    <div className="peer-checked:border-transparent peer-checked:bg-blue-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-400 ring-offset-2"></div>
                    <span className="pointer-events-none z-10">Group</span>
                  </div>
                </div>

                {/* Leader Name and Team Members Fields */}
                {isGroup && (
                  <>
                    <div className="mt-4">
                      <label htmlFor="" className="font-medium mb-1 text-gray-500">
                        Leader Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border bg-gray-50 px-4 py-3 text-gray-700"
                      />
                    </div>

                    <div className="mt-4">
                      <label htmlFor="" className="font-medium mb-1 text-gray-500">
                        Team Members
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border bg-gray-50 px-4 py-3 text-gray-700"
                      />
                    </div>
                  </>
                )}

                {/* Phone No. and File Upload Fields (Always shown) */}
                <div className="mt-4">
                  <label htmlFor="" className="font-medium mb-1 text-gray-500">
                    Phone No.
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border bg-gray-50 px-4 py-3 text-gray-700"
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="" className="font-medium mb-1 text-gray-500">
                    File Upload
                  </label>
                  <input
                    type="file"
                    className="w-full rounded-xl border bg-gray-50 px-4 py-3 text-gray-700"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button className="btn btn-danger w-full mt-4 rounded-xl bg-red-600 px-4 py-3 text-xl font-medium text-white">
                  Save
                </button>
              </div>
            </div>
          </Modal>

          <div className="lg:col-span-3">
            <div className="mt-8 flow-root sm:mt-2">
              <h1 className="text-3xl font-bold">About the Event</h1>
              <div className="mt-4" dangerouslySetInnerHTML={{ __html: event.aboutEvent }} />
            </div>
            <div className="mt-8 flow-root sm:mt-2">
              <h1 className="text-3xl font-bold">Event Instructions</h1>
              <div className="mt-4" dangerouslySetInnerHTML={{ __html: event.instructions }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDeatils;
