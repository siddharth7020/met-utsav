import { useState } from "react";
import PropTypes from "prop-types";

const NoticeCard = ({ onEdit }) => {
  const cards = [
    { id: 1, title: "Event 1", subject: "Early Good Morning", description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit This approach ensures responsiveness, dynamic behavior, and a clean, functional UIThis approach ensures responsiveness, dynamic behavior, and a clean, functional UIThis approach ensures responsiveness, dynamic behavior, and a clean, functional UIThis approach ensures responsiveness, dynamic behavior, and a clean, functional UIThis approach ensures responsiveness, dynamic behavior, and a clean, functional UIThis approach ensures responsiveness, dynamic behavior, and a clean, functional UI", date: "May 12, 2023 : 9:00 AM", name: "Sr. Omprakash Mandage" },
    { id: 2, title: "Event 2", subject: "Early Good Morning", description: "Sed diam nonummy nibh euismod...", date: "May 15, 2023 : 2:00 PM", name: "Sr. Omprakash Mandage" },
    { id: 3, title: "Event 3", subject: "Early Good Morning", description: "Ut laoreet dolore magna aliquam...", date: "June 10, 2023 : 1:00 PM", name: "Sr. Omprakash Mandage" },
    { id: 4, title: "Event 4", subject: "Early Good Morning", description: "Consectetuer adipiscing elit...", date: "July 5, 2023 : 5:00 PM", name: "Sr. Zagade harshad" },
    { id: 5, title: "Event 5", subject: "Early Good Morning", description: "Euismod tincidunt ut laoreet...", date: "August 20, 2023 : 11:00 AM", name: "Sr. Jamhedji Irani" },
    { id: 6, title: "Event 6", subject: "Early Good Morning", description: "Diam nonummy nibh euismod...", date: "September 15, 2023 : 3:00 PM", name: "Sr. Sumedh Sir" },
    { id: 7, title: "Event 7", subject: "Early Good Morning", description: "Lorem ipsum dolor sit amet...", date: "October 8, 2023 : 10:00 AM", name: "Sr. Omprakash Mandage" },
    { id: 8, title: "Event 8", subject: "Early Good Morning", description: "Sed diam nonummy nibh euismod...", date: "November 20, 2023 : 2:00 PM", name: "Sr. Omprakash Mandage" },
    { id: 9, title: "Event 9", subject: "Early Good Morning", description: "Ut laoreet dolore magna aliquam...", date: "December 5, 2023 : 6:00 PM", name: "Sr. Omprakash Mandage" },
    { id: 10, title: "Event 10", subject: "Early Good Morning", description: "Consectetuer adipiscing elit...", date: "January 15, 2024 : 4:00 PM", name: "Sr. Omprakash Mandage" },
    { id: 11, title: "Event 11", subject: "Early Good Morning", description: "Euismod tincidunt ut laoreet...", date: "February 10, 2024 : 8:00 AM", name: "Sr. Omprakash Mandage" },
    { id: 12, title: "Event 12", subject: "Early Good Morning", description: "Diam nonummy nibh euismod...", date: "March 5, 2024 : 12:00 PM", name: "Sr. Omprakash Mandage" },
    { id: 13, title: "Event 13", subject: "Early Good Morning", description: "Lorem ipsum dolor sit amet...", date: "April 20, 2024 : 6:00 PM", name: "Sr. Omprakash Mandage" },
    { id: 14, title: "Event 14", subject: "Early Good Morning", description: "Sed diam nonummy nibh euismod...", date: "May 15, 2024 : 10:00 AM", name: "Sr. Omprakash Mandage" },
    { id: 15, title: "Event 15", subject: "Early Good Morning", description: "Ut laoreet dolore magna aliquam...", date: "June 10, 2024 : 2:00 PM", name: "Sr. Omprakash Mandage" },
    { id: 16, title: "Event 16", subject: "Early Good Morning", description: "Consectetuer adipiscing elit...", date: "July 5, 2024 : 8:00 AM", name: "Sr. Omprakash Mandage" },
    { id: 17, title: "Event 17", subject: "Early Good Morning", description: "Euismod tincidunt ut laoreet...", date: "August 20, 2024 : 4:00 PM", name: "Sr. Omprakash Mandage" },
    { id: 18, title: "Event 18", subject: "Early Good Morning", description: "Diam nonummy nibh euismod...", date: "September 15, 2024 : 12:00 PM", name: "Sr. Omprakash Mandage" },
    { id: 19, title: "Event 19", subject: "Early Good Morning", description: "Lorem ipsum dolor sit amet...", date: "October 8, 2024 : 6:00 PM", name: "Sr. Omprakash Mandage" },
    { id: 20, title: "Event 20", subject: "Early Good Morning", description: "Sed diam nonummy nibh euismod...", date: "November 20, 2024 : 10:00 AM", name: "Sr. Omprakash Mandage" },
    { id: 21, title: "Event 21", subject: "Early Good Morning", description: "Ut laoreet dolore magna aliquam...", date: "December 5, 2024 : 2:00 PM", name: "Sr. Omprakash Mandage" },
    { id: 22, title: "Event 22", subject: "Early Good Morning", description: "Consectetuer adipiscing elit...", date: "January 15, 2025 : 8:00 AM", name: "Sr. Omprakash Mandage" },
  ];


  const [showAll, setShowAll] = useState(false);

  const displayedCards = showAll ? cards : cards.slice(0, 4);

  return (
    <div className="m-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {displayedCards.map((card) => (
          <div
            key={card.id}
            className="group bg-white flex flex-col rounded-lg border p-4 text-gray-700 shadow transition hover:shadow-lg"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xs text-gray-600">{card.title}</h3>
              <button
                className="flex justify-center items-center hover:text-[#BD1F1F]"
                onClick={() => onEdit(card)} // Pass card details to edit
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
              </button>
            </div>
            <a href="#" className="mb-2 text-base font-semibold sm:text-lg">
              {card.subject}
            </a>
            <p className="text-xs text-gray-500">{card.description}</p>
            <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
              <div>
                Date & Time:
                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                  {card.date}
                </span>
              </div>
              <div>
                Name:
                <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                  {card.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {cards.length > 4 && (
        <div className="mt-4 flex justify-center">
          <button
            className="px-6 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};

NoticeCard.propTypes = {
  onEdit: PropTypes.func.isRequired,
};

export default NoticeCard;
