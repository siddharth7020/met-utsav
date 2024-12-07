import { useNavigate } from "react-router-dom";


const RegistrationPage = () => {
  const navigate = useNavigate();

  const handleRegistration = () => {
    navigate("/login");
  }

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Registrater Here</h2>
          <form  onSubmit={(e) => {
            e.preventDefault(); // Prevent page reload
            handleRegistration(); // Perform custom logic
          }}>
            <div className="overflow-auto h-96 flex flex-col  p-2 " >
              <input placeholder="First Name" required className="text-sm  focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
              <input placeholder="Middle Name" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
              <input placeholder="Last Name" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
              <input placeholder="Email" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="email" />
              <input placeholder="Phone No." required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
              <input placeholder="Roll No." required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
              <input placeholder="Password" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="password" />
              <input placeholder="Confirm Password" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="password" />
              <label className="text-sm mt-3 mb-2 text-gray-900 cursor-pointer" >
                Gender
              </label>
              <select required className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label className="text-sm mt-3 mb-2 text-gray-900 cursor-pointer" >
                Intitute
              </label>
              <select required className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" id="Intitute">
                <option value="male">ICS</option>
                <option value="female">AMDC</option>
                <option value="other">IOM</option>
              </select>
              <label className="text-sm mt-3 mb-2 text-gray-900 cursor-pointer" >
                Category
              </label>
              <select required className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" id="Intitute">
                <option value="male">Dance</option>
                <option value="female">Singing</option>
                <option value="other">Play</option>
              </select>
              <label className="text-sm mt-3 mb-2 text-gray-900 cursor-pointer" >
                Type of Role
              </label>
              <select required className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" id="Intitute">
                <option value="male">Student</option>
                <option value="female">Coordinator</option>
                <option value="other">choreographer</option>
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