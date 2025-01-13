import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const ForgetPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [step, setStep] = useState(1); // Step 1: Request OTP, Step 2: Verify OTP and Reset PIN
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleRequestOTP = async () => {
    setError(null);
    try {
      await axios.post("https://utsav.met.edu/api/auth/send-otp", { email });
      setSuccess("OTP has been sent to your email.");
      setStep(2); // Move to step 2: Verify OTP
    } catch (error) {
      setError(error.response?.data?.msg || "Failed to send OTP.");
    }
  };

  const handleResetPin = async () => {
    if (newPin !== confirmPin) {
      setError("PINs do not match");
      return;
    }

    if (newPin.length !== 4 || confirmPin.length !== 4) {
      setError("PIN must be 4 digits");
      return;
    }

    try {
      await axios.post("https://utsav.met.edu/api/auth/reset-password", {
        email,
        otp,
        newPassword: newPin,
      });
      setSuccess("PIN reset successful. Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setError(error.response?.data?.msg || "Failed to reset PIN.");
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {step === 1 ? "Forget Password - Request OTP" : "Reset PIN"}
          </h2>
          {success && <div className="text-green-500 mb-3">{success}</div>}
          {error && <div className="text-red-500 mb-3">{error}</div>}
          {step === 1 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRequestOTP();
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
              />
              <button
                className="bg-gradient-to-r from-indigo-500 to-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-red-600 transition ease-in-out duration-150"
                type="submit"
              >
                Request OTP
              </button>
            </form>
          )}
          {step === 2 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleResetPin();
              }}
            >
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
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
              <button
                className="bg-gradient-to-r from-indigo-500 to-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-red-600 transition ease-in-out duration-150"
                type="submit"
              >
                Reset PIN
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
