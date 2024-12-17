import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const NoticeForm = ({ setShowNoticeForm, initialData, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    instituteId: "",
    title: "",
    message: "",
  });
  const [institutes, setInstitutes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // fetch user from locastorage
  const user = JSON.parse(localStorage.getItem("user"));

  // combine first name and last name
  const userName = user ? `${user.firstName} ${user.lastName}` : "";

  useEffect(() => {
    const fetchInstitutes = async () => {
      try {
        const response = await fetch("http://utsav.hello.met.edu/api/institutes/");
        if (response.ok) {
          const data = await response.json();
          setInstitutes(data);
        } else {
          console.error("Failed to fetch institutes");
        }
      } catch (error) {
        console.error("Error fetching institutes:", error);
      }
    };

    fetchInstitutes();

    if (initialData) {
      setFormData({
        ...initialData, // Populate all fields, including `instituteId`
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const url = initialData
        ? `http://utsav.hello.met.edu/api/notice/${initialData.id}`
        : "http://utsav.hello.met.edu/api/notice/add";

      const method = initialData ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          addBy: userName,
          updateBy: userName,
        }),
      });

      if (response.ok) {
        const updatedNotices = await response.json();
        onFormSubmit(updatedNotices);
        setShowNoticeForm(false);
      } else {
        console.error("Failed to submit notice");
        alert("Failed to submit the notice. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting notice:", error);
      alert("An error occurred while submitting the notice.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-lg shadow-md p-6"
      >
        <div className="mb-4">
          <label htmlFor="instituteId" className="block text-gray-700 font-semibold mb-2">
            Institute
          </label>
          <select
            id="instituteId"
            value={formData.instituteId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          >
            <option value="" disabled>
              Select Institute
            </option>
            {institutes.map((institute) => (
              <option key={institute.id} value={institute.id}>
                {institute.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Description
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          ></textarea>
        </div>

        <div className="flex justify-end space-x-4 mt-4">
          <button
            type="submit"
            className={`px-6 py-2 rounded-lg text-white ${
              isSubmitting ? "bg-gray-400" : "bg-red-500 hover:bg-red-700"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-gray-200 rounded-lg"
            onClick={() => setShowNoticeForm(false)}
            disabled={isSubmitting}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

NoticeForm.propTypes = {
  setShowNoticeForm: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    id: PropTypes.number,
    instituteId: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
  }),
  onFormSubmit: PropTypes.func.isRequired,
};

export default NoticeForm;
