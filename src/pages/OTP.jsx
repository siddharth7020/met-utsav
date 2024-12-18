import { useNavigate } from "react-router-dom";


const OTP = () => {
  const navigate = useNavigate();

  const handleOTP = () => {
    navigate("/newpassword");
  }

  return (
    <div className="bg-gray-100">
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">OTP</h2>
        <form  onSubmit={(e) => {
          e.preventDefault(); // Prevent page reload
          handleOTP(); // Perform custom logic
        }}>
          <div className="overflow-auto h-96 flex flex-col  p-2 " >
            
            <input placeholder="Enter OTP" required className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />

          </div>  
          <button className="bg-gradient-to-r from-indigo-500 to-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-red-600 transition ease-in-out duration-150" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default OTP