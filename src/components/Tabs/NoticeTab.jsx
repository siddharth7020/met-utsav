import { useState, useEffect } from "react";
import NoticeCard from "../Common/NoticeCard";
import NoticeForm from "../Common/NoticeForm";
import axios from "axios";

const NoticeTab = () => {
  const [showNoticeForm, setShowNoticeForm] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [notices, setNotices] = useState([]);
  const [institutes, setInstitutes] = useState([]);

  // Fetch institutes
  useEffect(() => {
    const fetchInstitutes = async () => {
      try {
        const response = await axios.get("http://utsav.hello.met.edu/api/institutes/");
        setInstitutes(response.data);
      } catch (error) {
        console.error("Error fetching institutes:", error);
      }
    };
    fetchInstitutes();
  }, []);

  // Fetch notices
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get("http://utsav.hello.met.edu/api/notice");
        const data = response.data;
        setNotices(data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };
    fetchNotices();
  }, []);

  const handleNoticeButtonClick = () => {
    setShowNoticeForm(true);
    setSelectedNotice(null);
  };

  const handleEditNotice = (notice) => {
    setSelectedNotice(notice);
    setShowNoticeForm(true);
  };

  const handleFormSubmit = (updatedNotice) => {
    if (Array.isArray(updatedNotice)) {
      setNotices(updatedNotice);
    } else {
      // Update the specific notice in the state
      setNotices((prevNotices) =>
        prevNotices.map((notice) =>
          notice.id === updatedNotice.id ? updatedNotice : notice
        )
      );
    }
    setShowNoticeForm(false);
  };

  // Map the instituteId to instituteName for each notice
  const getInstituteNameById = (instituteId) => {
    const institute = institutes.find((inst) => inst.id === instituteId);
    return institute ? institute.name : "Unknown Institute";
  };

  return (
    <div className="bg-gray-200 h-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-row justify-between mb-2">
          <h2 className="text-2xl font-bold mb-2">Notices</h2>
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
            Add Notice
          </button>
        </div>

        {showNoticeForm && (
          <NoticeForm
            setShowNoticeForm={setShowNoticeForm}
            initialData={selectedNotice}
            onFormSubmit={handleFormSubmit}
          />
        )}

        <div>
          {notices.map((notice) => (
            <NoticeCard
              key={notice.id}
              notice={{
                ...notice,
                instituteName: getInstituteNameById(notice.instituteId), // Pass instituteName to the card
              }}
              onEdit={handleEditNotice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeTab;
