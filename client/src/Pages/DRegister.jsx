import React from "react";
import frontpic from "../assets/register.jpg";

function Register() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-6xl  flex flex-col md:flex-row overflow-hidden scale-105">
        <div className="bg-purple-100 md:w-1/2 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-bold text-gray-800 ">
            Welcome to <span className="text-purple-600">Care Connect!</span>
          </h2>
          <img src={frontpic} alt="Teacher" className="w-80 h-auto mb-6" />
          <p className="text-lg text-gray-700 mb-4 px-6">
            A platform that connects those that have to those that need.
          </p>
        </div>

       
        <div className="md:w-1/2 ">
          <h2 className="text-3xl font-bold text-gray-800">
            Let’s create your account
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 border border-gray-300 rounded-lg px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Username</label>
              <input
                type="text"
                placeholder="Choose a username"
                className="w-full mt-2 border border-gray-300 rounded-lg px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-2 border border-gray-300 rounded-lg px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>



            <button
              type="submit"
              className="w-semifull bg-teal-500 hover:bg-teal-600 text-white text-lg font-semibold py-3 rounded-lg transition duration-200"
            >
              Register
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Register;
