import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doLogin } from "./Auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = doLogin(username, password, navigate);

    if (success) {
      setSuccessMessage("Login successful!");
    } else {
      setErrorMessage("Login Failed! Please check your credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Login
        </button>
        {/* Success Message */}
        {successMessage && (
          <div className="mt-4 text-green-600 text-center">
            {successMessage}
          </div>
        )}
        {/* Error Message */}
        {errorMessage && (
          <div className="mt-4 text-red-400 text-center">{errorMessage}</div>
        )}
        {/* Bottom Text for Switching */}
      <p className="mt-4 text-center text-gray-600">
        Don't have an account?
        <span
          onClick={() => navigate("/auth/register")}
          className="text-blue-500 cursor-pointer hover:underline ml-1"
        >
        Register here
        </span>
      </p>
      </form>
      
    </div>
  );
};

export default Login;
