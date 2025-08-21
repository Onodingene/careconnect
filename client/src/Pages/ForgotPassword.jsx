import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';

function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-teal-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Reset Your Password</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Enter your email to receive a password reset link or OTP.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold py-2.5 rounded-lg transition duration-200"
            onClick={() => navigate('/otp-verification')}
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Back to{' '}
          <a href="/login" className="text-purple-600 hover:text-purple-700 font-medium">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;