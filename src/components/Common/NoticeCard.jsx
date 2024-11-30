import { useState } from "react";

const NoticeCard = () => {
  const [visibleRows, setVisibleRows] = useState(2); // Start with 2 rows
  const cardsPerRow = 2; // Number of cards per row

  const cards = [
    { id: 1, title: "Event 1",subject:"Early Good Morning", description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit This approach ensures responsiveness, dynamic behavior, and a clean, functional UIThis approach ensures responsiveness, dynamic behavior, and a clean, functional UIThis approach ensures responsiveness, dynamic behavior, and a clean, functional UIThis approach ensures responsiveness, dynamic behavior, and a clean, functional UIThis approach ensures responsiveness, dynamic behavior, and a clean, functional UIThis approach ensures responsiveness, dynamic behavior, and a clean, functional UI", date: "May 12, 2023 : 9:00 AM",name:"Sr. Omprakash Mandage" },
    { id: 2, title: "Event 2",subject:"Early Good Morning", description: "Sed diam nonummy nibh euismod...", date: "May 15, 2023 : 2:00 PM" , name:"Sr. Omprakash Mandage" },
    { id: 3, title: "Event 3",subject:"Early Good Morning", description: "Ut laoreet dolore magna aliquam...", date: "June 10, 2023 : 1:00 PM" , name:"Sr. Omprakash Mandage" },
    { id: 4, title: "Event 4",subject:"Early Good Morning", description: "Consectetuer adipiscing elit...", date: "July 5, 2023 : 5:00 PM",name:"Sr. Zagade harshad" },
    { id: 5, title: "Event 5",subject:"Early Good Morning", description: "Euismod tincidunt ut laoreet...", date: "August 20, 2023 : 11:00 AM",name:"Sr. Jamhedji Irani" },
    { id: 6, title: "Event 6",subject:"Early Good Morning", description: "Diam nonummy nibh euismod...", date: "September 15, 2023 : 3:00 PM" , name:"Sr. Sumedh Sir"},
    { id: 7, title: "Event 7",subject:"Early Good Morning", description: "Lorem ipsum dolor sit amet...", date: "October 8, 2023 : 10:00 AM", name:"Sr. Omprakash Mandage"},
    { id: 8, title: "Event 8",subject:"Early Good Morning", description: "Sed diam nonummy nibh euismod...", date: "November 20, 2023 : 2:00 PM", name:"Sr. Omprakash Mandage"},
    { id: 9, title: "Event 9",subject:"Early Good Morning", description: "Ut laoreet dolore magna aliquam...", date: "December 5, 2023 : 6:00 PM", name:"Sr. Omprakash Mandage"},
    { id: 10, title: "Event 10",subject:"Early Good Morning", description: "Consectetuer adipiscing elit...", date: "January 15, 2024 : 4:00 PM" , name:"Sr. Omprakash Mandage"},
    { id: 11, title: "Event 11",subject:"Early Good Morning", description: "Euismod tincidunt ut laoreet...", date: "February 10, 2024 : 8:00 AM", name:"Sr. Omprakash Mandage"},
    { id: 12, title: "Event 12",subject:"Early Good Morning", description: "Diam nonummy nibh euismod...", date: "March 5, 2024 : 12:00 PM", name:"Sr. Omprakash Mandage"},
    { id: 13, title: "Event 13",subject:"Early Good Morning", description: "Lorem ipsum dolor sit amet...", date: "April 20, 2024 : 6:00 PM", name:"Sr. Omprakash Mandage"},
    { id: 14, title: "Event 14",subject:"Early Good Morning", description: "Sed diam nonummy nibh euismod...", date: "May 15, 2024 : 10:00 AM", name:"Sr. Omprakash Mandage"},
    { id: 15, title: "Event 15",subject:"Early Good Morning", description: "Ut laoreet dolore magna aliquam...", date: "June 10, 2024 : 2:00 PM", name:"Sr. Omprakash Mandage"},
    { id: 16, title: "Event 16",subject:"Early Good Morning", description: "Consectetuer adipiscing elit...", date: "July 5, 2024 : 8:00 AM", name:"Sr. Omprakash Mandage"},
    { id: 17, title: "Event 17",subject:"Early Good Morning", description: "Euismod tincidunt ut laoreet...", date: "August 20, 2024 : 4:00 PM", name:"Sr. Omprakash Mandage"},
    { id: 18, title: "Event 18",subject:"Early Good Morning", description: "Diam nonummy nibh euismod...", date: "September 15, 2024 : 12:00 PM", name:"Sr. Omprakash Mandage"},
    { id: 19, title: "Event 19",subject:"Early Good Morning", description: "Lorem ipsum dolor sit amet...", date: "October 8, 2024 : 6:00 PM", name:"Sr. Omprakash Mandage"},
    { id: 20, title: "Event 20",subject:"Early Good Morning", description: "Sed diam nonummy nibh euismod...", date: "November 20, 2024 : 10:00 AM", name:"Sr. Omprakash Mandage"},
    { id: 21, title: "Event 21",subject:"Early Good Morning", description: "Ut laoreet dolore magna aliquam...", date: "December 5, 2024 : 2:00 PM", name:"Sr. Omprakash Mandage"},
    { id: 22, title: "Event 22",subject:"Early Good Morning", description: "Consectetuer adipiscing elit...", date: "January 15, 2025 : 8:00 AM", name:"Sr. Omprakash Mandage"},
  ];

  // Dynamically calculate total rows
  const totalRows = Math.ceil(cards.length / cardsPerRow);

  const handleSeeMore = () => {
    if (visibleRows < totalRows) setVisibleRows(visibleRows + 1);
  };

  const visibleCards = cards.slice(0, visibleRows * cardsPerRow);

  return (
    <div className="m-5">
      {/* Card Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {visibleCards.map((card) => (
          <div
            key={card.id}
            className="group bg-white flex flex-col rounded-lg border p-4 text-gray-700 shadow transition hover:shadow-lg"
          >
            <h3 className="text-xs text-gray-600">{card.title}</h3>
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
      {visibleRows < totalRows && (
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSeeMore}
            className="rounded-lg bg-red-500 px-4 py-2 text-white shadow hover:bg-red-600 focus:outline-none"
          >
            See More Notices
          </button>
        </div>
      )}

      {/* Scrollable Section */}
      {visibleRows === totalRows && (
        <div className="mt-4  overflow-y-auto border-t pt-4">
          <p className="text-gray-500 text-sm text-center">
            End of notices. 
          </p>
        </div>
      )}
    </div>
  );
};

export default NoticeCard;
