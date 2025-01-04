
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegistrationPage = () => {
  const Navigation = useNavigate();
  const [institutes, setInstitutes] = useState([]);
  const [selectGender, setSelectGender] = useState("");
  const [selectInstitute, setSelectInstitute] = useState("");
  const [selectType, setSelectType] = useState("");
  const [selectYear, setSelectYear] = useState("");


  // Refs for input fields
  const addFName = useRef();
  const addMName = useRef();
  const addLName = useRef();
  const addEmail = useRef();
  const addPhoneNo = useRef();
  const addRollNo = useRef();
  const createPassword = useRef();

  // Fetch institutes and categories on component mount
  useEffect(() => {
    const fetchInstitutes = async () => {
      try {
        const response = await fetch("https://utsav.met.edu/api/institutes/");
        const data = await response.json();
        setInstitutes(data);
      } catch (error) {
        console.error("Error fetching institutes:", error);
      }
    };


    fetchInstitutes();
  }, []);

  // Handle registration form submission
  const handleRegistration = async (event) => {
    event.preventDefault();

    const payload = {
      firstName: addFName.current.value,
      middleName: addMName.current.value,
      lastName: addLName.current.value,
      gender: selectGender,
      email: addEmail.current.value,
      password: createPassword.current.value,
      role: "User", // Default role
      type: selectType,
      pg_class: selectYear,
      rollNo: addRollNo.current.value,
      instituteId: parseInt(selectInstitute),
      phoneNo: addPhoneNo.current.value,
      // categoryId: parseInt(selectCategory),
    };
    try {
      const response = await fetch("https://utsav.met.edu/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "Please login to continue",
        });
        Navigation("/login");

      } else {
        const errorData = await response.json();
        // alert("Registration failed: " + errorData.message);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: errorData.message,
        });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      // alert("An error occurred. Please try again.");
      Swal.fire({
        icon: "error",
        title: "An error occurred",
        text: "Please try again",
      });
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 4) {
      event.target.value = inputValue.slice(0, 4);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen">

        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Register Here</h2>
          <form onSubmit={handleRegistration}>
            <div className="overflow-auto h-96 flex flex-col p-2">

              <input ref={addFName} placeholder="First Name" required className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-700" type="text" />

              <input ref={addMName} placeholder="Middle Name" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-700" type="text" />

              <input ref={addLName} placeholder="Last Name" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-700" type="text" />

              <select required value={selectGender} onChange={(e) => setSelectGender(e.target.value)} className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-700">
                <option>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <input ref={addPhoneNo} placeholder="Phone No." required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-700" type="text" pattern="^\d{10}$" />

              <input ref={addEmail} placeholder="Email" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-700" type="email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />

              <input
                ref={createPassword}
                placeholder="Enter a 4-digit PIN"
                required
                className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-700"
                type="password"
                pattern="^\d{4}$"
                title="PIN should be a 4-digit number"
                onChange={handleInputChange}
              />

              <select required value={selectInstitute} onChange={(e) => setSelectInstitute(e.target.value)} className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-700">
                <option value="">Select Institute</option>
                {institutes.map((institute) => (
                  <option key={institute.id} value={institute.id}>
                    {institute.name}
                  </option>
                ))}
              </select>

              <input ref={addRollNo} placeholder="Roll No." required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-700" type="text" />

              <select required value={selectType} onChange={(e) => setSelectType(e.target.value)} className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-700">
                <option >Select type</option>
                <option value="Staff">Staff</option>
                <option value="Student">Student</option>
              </select>

              <select required value={selectYear} onChange={(e) => setSelectYear(e.target.value)} className="text-sm  mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-700">
                <option >Select Year</option>
                <option value="Firstyear">First year</option>
                <option value="Secondyear">Second year</option>
                <option value="Thirdyear">Third year</option>
                <option value="Fourthyear">Fourth year</option>
                <option value="Staff">Staff</option>
              </select>



              {/* <label className="text-sm mt-3 mb-2 text-gray-900">Category</label>
            <select required value={selectCategory} onChange={(e) => setSelectCategory(e.target.value)} className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-700">
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select> */}
            </div>
            <p className="text-gray-900 mt-4">Already have an account? <a className="text-sm text-blue-500 hover:underline" href="/login">Login</a></p>
            <button className="bg-gradient-to-r from-indigo-500 to-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-red-600 transition ease-in-out duration-150" type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
