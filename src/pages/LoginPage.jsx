import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const isSuccess = await login(email, password);
      if (isSuccess) {
        navigate("/"); // Redirect on successful login
      }
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="overflow-auto h-96 flex flex-col p-2">
              <input
                placeholder="Email"
                required
                className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                required
                className="text-sm mt-3 focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <p className="text-gray-900 mt-4">
              <a className="text-sm text-blue-500 hover:underline" href="/register">
                Register
              </a>{" "}
              /{" "}
              <a className="text-sm text-blue-500 hover:underline" href="/forget_password">
                Forgot Password
              </a>
            </p>
            <button
              className="bg-gradient-to-r from-indigo-500 to-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-red-600 transition ease-in-out duration-150"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
