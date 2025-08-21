import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

function OTPVerification() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-teal-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Verify Your OTP</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Enter the 6-digit code sent to your email.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">OTP Code</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                maxLength="6"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold py-2.5 rounded-lg transition duration-200"
            onClick={() => navigate('/dashboard')}
          >
            Verify OTP
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Didn’t receive a code?{' '}
          <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
            Resend OTP
          </a>
        </p>
      </div>
    </div>
  );
}

export default OTPVerification;