import { useNavigate, Link } from "react-router-dom";



const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  }
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
          <form onSubmit={(e) => {
            e.preventDefault(); // Prevent page reload
            handleLogin(); // Perform custom logic
          }}>
            <div className="overflow-auto h-96 flex flex-col  p-2 " >

              <input placeholder="Email" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="email" />
              <input placeholder="Password" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="password" />

              <label className="text-sm mt-3 mb-2 text-gray-900 cursor-pointer" >
                Intitute
              </label>
              <select required className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" id="Intitute">
                <option value="male">ICS</option>
                <option value="female">AMDC</option>
                <option value="other">IOM</option>
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
            <p className="text-gray-900 mt-4"><Link className="text-sm text-blue-500 -200 hover:underline mt-4" href="/login" to={"/register"}>Register/</Link>  <Link className="text-sm text-blue-500 -200 hover:underline mt-4" href="/login" to={"/forget_password"}>Forgot Password</Link></p>
            <button className="bg-gradient-to-r from-indigo-500 to-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-red-600 transition ease-in-out duration-150" type="submit">login</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default LoginPage;