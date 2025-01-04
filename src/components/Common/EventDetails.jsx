import { useState, useEffect } from "react";
import Modal from "../Common/Model";
import { useLocation } from "react-router-dom";
import { Base_URL } from "../Common/Constant";
import axios from "axios";
import Swal from "sweetalert2";

const EventDetails = () => {
  const [open, setOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    fileUrl: "",
  });

  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();
  const event = location.state?.event;

  if (!event) {
    return <p>No event details available.</p>;
  }

  const userId = user.id;
  const eventId = event.id;
  const categoryId = event.categoryId;
  const categoryName = event.Category.name;


  let formattedDate = 'Invalid Date';
        try {
          const date = new Date(event.date);
          if (!isNaN(date)) {
            formattedDate = date.toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            }); // DD/MMM/YYYY format
          }
        } catch {
          console.error(`Invalid date for event ID ${event.id}:`, event.date);
        }
      
        const formatTime = (time) => {
          const [hour, minute] = time.split(':');
          const date = new Date();
          date.setHours(hour);
          date.setMinutes(minute);
      
          const options = { hour: 'numeric', minute: '2-digit', hour12: true };
          return new Intl.DateTimeFormat('en-US', options).format(date);
        };
      
        const fromTimeFormatted = formatTime(event.fromTime);
        const formattedTimeRange = `${fromTimeFormatted} Onwards`;
  

  useEffect(() => {
    const checkRegistrationStatus = async () => {
      try {
        const response = await axios.get(
          `https://utsav.met.edu/api/userevents/user/${userId}/event/${eventId}`,
          {
            timeout: 10000, // 10 seconds
          }
        );
        // console.log("Registration status:", response.data);
        // console.log("isRegistered", response.data.status);
        if (response.data && response.data.status === "Submitted") {
          setIsRegistered(true);
          localStorage.setItem(`isRegistered_${eventId}`, "true");
        }
      } catch (error) {
        console.error("Error checking registration status:", error);
      }
    };

    // Check if the registration status is already saved in localStorage if in localStorage not available then check from API
    if (localStorage.getItem(`isRegistered_${eventId}`) === "true") {
      setIsRegistered(true);
    } else {
      checkRegistrationStatus();
    }
  }, [userId, eventId]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const payload = {
      userId,
      eventId,
      categoryId,
      fileUrl: formData.fileUrl,
    };

    try {
      await axios.post("https://utsav.met.edu/api/userevents", payload);
      Swal.fire({
        icon: "success",
        title: "Registration successful!",
      });
      setIsRegistered(true);
      localStorage.setItem(`isRegistered_${eventId}`, "true");
      setOpen(false);
    } catch (error) {
      console.error("Error registering event:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to register. Please try again.",
      });
    }
  };

  return (
    <section className="py-12 sm:py-6">
      <div className="container mx-auto px-4">
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img className="h-full w-full max-w-full object-cover" src={`${Base_URL}${event.banner}`} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Banner Content */}
          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <div className="mx-auto max-w-xs rounded-xl border shadow-lg bg-white px-6 py-8 text-gray-800">
              {/* Event Name */}
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-900">
                {event.name}
              </h1>

              {/* Category */}
              <div className="mb-4 flex justify-center">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  {categoryName}
                </span>
              </div>

              {/* Date and Time */}
              <div className="mb-4">
                <p className="text-center text-gray-700">
                  <span className="font-medium">Audition Date:</span> {formattedDate}
                </p>
                <p className="text-center text-gray-700">
                  <span className="font-medium">Time:</span> {formattedTimeRange}
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-4 space-y-2">
                <div className="flex justify-between items-center rounded-lg bg-green-100 px-4 py-2">
                  <span className="font-medium text-green-700">{event.contactPerson}</span>
                </div>
                <div className="flex justify-between items-center rounded-lg bg-blue-100 px-4 py-2">
                  <span className="font-medium text-blue-700">{event.contactNumber}</span>
                </div>
              </div>

              {/* Location */}
              <div className="mb-4 text-center">
                <p className="font-medium text-gray-700">
                  <span className="font-medium">Location:</span> {event.location}
                </p>
              </div>

              {/* Divider */}
              <hr className="my-4 border-t border-gray-300" />

              {/* Register Button */}
              <button
                onClick={() => setOpen(true)}
                className="w-full rounded-lg bg-red-600 px-4 py-3 text-lg font-medium text-white transition duration-300 hover:bg-red-700 disabled:bg-gray-400"
                disabled={isRegistered}
              >
                {isRegistered ? "Already Registered" : "Register"}
              </button>
            </div>
          </div>


          {/* Modal Component */}
          <Modal open={open} onClose={() => setOpen(false)}>
            <div className="w-70">
              <div>
                <h3 className="text-lg font-black text-gray-800">Register For {event.name}</h3>

                <div className="mt-2">
                  <label htmlFor="fileUrl" className="font-medium mb-1 text-gray-500">
                    If You have any file URL Please Enter Google Drive Link
                  </label>
                  <input
                    type="text"
                    name="fileUrl"
                    value={formData.fileUrl}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border bg-gray-50 px-4 py-1 text-gray-700"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSubmit}
                  className="btn btn-danger w-full mt-4 rounded-xl bg-red-600 px-4 py-3 text-xl font-medium text-white"
                >
                  Register
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

export default EventDetails;
