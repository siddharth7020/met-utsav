import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const ForgetPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState(null);

  const handleForgetPassword = async () => {
    if (newPin !== confirmPin) {
      setError("PINs do not match");
      return;
    }

    if (newPin.length !== 4 || confirmPin.length !== 4) {
      setError("PIN must be 4 digits");
      return;
    }

    try {
      const response = await axios.get(`http://utsav.hello.met.edu/api/auth/allusers`);
      const users = response.data;
      const user = users.find((user) => user.email === email);
      if (!user) {
        setError("User not found");
        return;
      }

      const userId = user.id;
      await axios.put(`http://utsav.hello.met.edu/api/auth/${userId}`, {
        password: newPin,
      });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Forget Password</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleForgetPassword();
            }}
          >
            <div className="overflow-auto h-96 flex flex-col p-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
              />
              <input
                type="number"
                value={newPin}
                onChange={(e) => setNewPin(e.target.value)}
                placeholder="New PIN"
                required
                className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
              />
              <input
                type="number"
                value={confirmPin}
                onChange={(e) => setConfirmPin(e.target.value)}
                placeholder="Confirm PIN"
                required
                className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
              />
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <button
              className="bg-gradient-to-r from-indigo-500 to-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-red-600 transition ease-in-out duration-150"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;