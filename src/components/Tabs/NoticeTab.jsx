import { useState } from "react";
import NoticeCard from "../Common/NoticeCard";
import NoticeForm from "../Common/NoticeForm";


const NoticeTab = () => {
  const [showNoticeForm, setShowNoticeForm] = useState(false);

  const handleNoticeButtonClick = () => {
    setShowNoticeForm(true);
  }
  
  return (
    <div className="bg-gray-300 h-full ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-row justify-between mb-2">
          <h2 className="text-2xl font-bold mb-2">Student Attendance</h2>
          <button
            onClick={handleNoticeButtonClick}
            className="flex gap-2 text-white px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
            Event
          </button>
        </div>

        {
          showNoticeForm && (
              <NoticeForm setShowNoticeForm={setShowNoticeForm}/>
          )
        }
          <NoticeCard />
      </div>
    </div>
  )
}

export default NoticeTab