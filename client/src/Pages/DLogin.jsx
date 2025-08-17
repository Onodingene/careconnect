
import React from "react";
import frontpic from "../assets/register.jpg";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
    <div className="bg-white w-full max-w-5xl rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden">    
      <div className="bg-purple-100 md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
        <img src={frontpic} alt="Teacher" className="w-full h-auto mb-6" />
        <p className="text-sm text-gray-700 max-w-xs ">
          A platform that connects thos that have to those that need <br />
        </p>
      </div>


      {/* Right Section */}
      <div className="md:w-1/2 p-10 relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome  Back!</h2>
        <p className="text-sm text-gray-500 mb-6">
          Please Enter Login Details Below
        </p>


        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter mail"
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition duration-200">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
);
};
export default Login;
