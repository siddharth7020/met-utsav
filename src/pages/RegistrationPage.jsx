import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const RegistrationPage = () => {
  const navigate = useNavigate();
  const addFName = useRef();
  const addMName = useRef();
  const addLName = useRef();
  const addEmail = useRef();
  const addPhoneNo = useRef();
  const addRollNo = useRef();
  const createPassword = useRef();
  const reEnterPassword = useRef();
  const [selectGender, setSelectGender] = useState(null);
  const [selectIntitute, setSelectIntitute] = useState(null);
  const [selectCategory, setSelectCategory] = useState(null);
  const [selectRole, setSelectRole] = useState(null);

  const handleRegistration = async (event) => {
    event.preventDefault();
    try {
      const userData = {
        fname: addFName.current.value,
        mname: addMName.current.value,
        lname: addLName.current.value,
        email: addEmail.current.value,
        phoneNo: addPhoneNo.current.value,
        rollNo: addRollNo.current.value,
        gender: selectGender,
        intitute: selectIntitute?.value,
        category: selectCategory?.value,
        role: selectRole?.value,
        password: createPassword.current.value,
        reEnterPassword: reEnterPassword.current.value,
      }
      await axios.post('https://utsav.hello.met.edu/api/auth/register', userData);
      navigate("/login");
      console.log('Data added successfully');
    } catch (error) {
      if (error.response) {
        if (error.response.status === 500) {
          console.error('Server error:', 'Something went wrong');
        } else if (error.response.status === 422) {
          console.error('Invalid input:', error.message);
        } else {
          console.error(error.message);
        }
      } else {
        console.error('Error:', error.message);
      }
    }
  }

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Registrater Here</h2>
          <form onSubmit={handleRegistration}>
            <div className="overflow-auto h-96 flex flex-col  p-2 " >
              <input ref={addFName} placeholder="First Name" required className="text-sm  focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
              <input ref={addMName} placeholder="Middle Name" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
              <input ref={addLName} placeholder="Last Name" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
              <input ref={addEmail} placeholder="Email" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="email" />
              <input ref={addPhoneNo} placeholder="Phone No." required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
              <input ref={addRollNo} placeholder="Roll No." required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
              <input ref={createPassword} placeholder="Password" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="password" />
              
              <label className="text-sm mt-3 mb-2 text-gray-900 cursor-pointer" >
                Gender
              </label>
              <select required defaultValue={selectGender}
                onChange={(event) => setSelectGender(event.target.value)}
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <label className="text-sm mt-3 mb-2 text-gray-900 cursor-pointer" >
                Intitute
              </label>
              <select required defaultValue={selectIntitute}
                onChange={(event) => setSelectIntitute(event.target.value)}
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" id="Intitute">
                <option value="ICS">ICS</option>
                <option value="AMDC">AMDC</option>
                <option value="IOM">IOM</option>
              </select>

              <label className="text-sm mt-3 mb-2 text-gray-900 cursor-pointer" >
                Category
              </label>
              <select required defaultValue={selectCategory}
                onChange={(event) => setSelectCategory(event.target.value)}
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" id="Intitute">
                <option value="Dance">Dance</option>
                <option value="Singing">Singing</option>
                <option value="Play">Play</option>
              </select>
              <label className="text-sm mt-3 mb-2 text-gray-900 cursor-pointer" >
                Type of Role
              </label>
              <select required defaultValue={selectRole}
                onChange={(event) => setSelectRole(event.target.value)}
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" id="Intitute">
                <option value="Student">Student</option>
                <option value="Coordinator">Coordinator</option>
              </select>
            </div>
            <p className="text-gray-900 mt-4"> Already have an account? <a className="text-sm text-blue-500 -200 hover:underline mt-4" href="/login" onClick={handleRegistration}>Login</a></p>
            <button className="bg-gradient-to-r from-indigo-500 to-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-red-600 transition ease-in-out duration-150" type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage