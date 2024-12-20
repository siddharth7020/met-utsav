import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
import JoditEditor from "jodit-react";

const EventForm = ({ categories, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    fromTime: "",
    toTime: "",
    location: "",
    contactPerson: "",
    contactNumber: "",
    contactEmail: "",
    categoryId: "",
    banner: null,
  });

  const editor = useRef(null);
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };


  useEffect(() => {
    if (formData.startTime && formData.endTime) {
      setFormData((prevData) => ({
        ...prevData,
      }));
    }
  }, [formData.startTime, formData.endTime]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        eventData.append(key, value);
      }
    });
    eventData.append("aboutEvent", description);
    eventData.append("instructions", instruction);
    onSubmit(eventData);
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="w-full max-w-lg mt-1 bg-white rounded-lg shadow-md p-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Create Event</h2>

        {[ // Form fields (name, date, startTime, etc.)
          { name: "name", type: "text", placeholder: "Enter Event Name" },
          { name: "date", type: "date" },
          { name: "fromTime", type: "time" },
          { name: "toTime", type: "time" },
          { name: "location", type: "text", placeholder: "Enter Location" },
          { name: "contactPerson", type: "text", placeholder: "Enter Contact Person" },
          { name: "contactNumber", type: "text", placeholder: "Enter Contact Number" },
          { name: "contactEmail", type: "email", placeholder: "Enter Contact Email" },
        ].map((field) => (
          <div className="mb-4" key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-gray-700 font-medium mb-2"
            >
              {field.placeholder || field.name}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              value={formData[field.name]}
              onChange={handleChange}
              required
              disabled={field.disabled}
            />
          </div>
        ))}

        {[ // Jodit editor for description and instruction
          {
            name: "aboutEvent",
            label: "Event Description",
            value: description,
            onChange: setDescription,
          },
          {
            name: "instructions",
            label: "Event Instruction",
            value: instruction,
            onChange: setInstruction,
          },
        ].map((editorField) => (
          <div className="mb-4" key={editorField.name}>
            <label
              htmlFor={editorField.name}
              className="block text-gray-700 font-medium mb-2"
            >
              {editorField.label}
            </label>
            <JoditEditor
              ref={editor}
              value={editorField.value}
              onChange={(newContent) => editorField.onChange(newContent)}
            />
          </div>
        ))}

        <div className="mb-4">
          <label
            htmlFor="categoryId"
            className="block text-gray-700 font-medium mb-2"
          >
            Select Category
          </label>
          <select
            id="categoryId"
            name="categoryId"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            value={formData.categoryId}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="banner"
            className="block text-gray-700 font-medium mb-2"
          >
            Upload Banner
          </label>
          <input
            id="banner"
            name="banner"
            type="file"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm font-bold rounded-xl transition duration-200"
          >
            Submit
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-red-100 hover:bg-red-200 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

EventForm.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EventForm;
