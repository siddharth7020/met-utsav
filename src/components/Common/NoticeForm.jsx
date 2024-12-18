import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const NoticeForm = ({ setShowNoticeForm, initialData }) => {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    description: "",
    date: "",
    name: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData); // Prefill form with selected card data
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setShowNoticeForm(false);
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        {/* Dropdown for Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Institute
          </label>
          <select
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="" disabled>
              Select Title
            </option>
            <option value="Event 1">ICS</option>
            <option value="Event 2">AMDC</option>
            <option value="Event 3">IOM</option>
          </select>
        </div>

        {/* Input for Subject */}
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Textarea for Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-red-500 text-white rounded-lg"
          >
            Submit
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-gray-200 rounded-lg"
            onClick={() => setShowNoticeForm(false)}
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
  initialData: PropTypes.object, // Optional, only provided for editing
};

export default NoticeForm;
