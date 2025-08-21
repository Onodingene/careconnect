import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Heart } from 'lucide-react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // navigate('/dashboard')
    }, 2000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-teal-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-teal-300/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="bg-white/95 backdrop-blur-lg w-full max-w-5xl flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden border border-white/20 relative z-10 transform hover:scale-[1.01] transition-transform duration-300">
        {/* Left Panel */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 md:w-1/2 flex flex-col justify-center items-center text-center p-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 border border-white/30 rounded-lg rotate-45"></div>
            <div className="absolute top-1/2 left-5 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white mr-2 animate-pulse" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Care Connect
              </h2>
            </div>
            
            <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-24 h-24 text-white/80" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">Welcome Back!</h3>
            <p className="text-purple-100 text-sm leading-relaxed px-4">
              Continue your journey of making a meaningful difference in the community.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-1/2 p-8 sm:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign In</h2>
            <p className="text-gray-600">Access your Care Connect account</p>
          </div>

          <div className="space-y-6">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-600 transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 hover:border-gray-300"
                  required
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-600 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 hover:border-gray-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <a href="/forgot-password" className="text-sm text-purple-600 hover:text-purple-700 font-semibold hover:underline transition-colors">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Signing In...
                </div>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <a href="/signup" className="text-purple-600 hover:text-purple-700 font-semibold hover:underline transition-colors">
                Create Account
              </a>
            </p>
          </div>

          {/* Social login option */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium text-gray-700">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium text-gray-700">Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;