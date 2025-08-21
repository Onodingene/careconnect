import React, { useState } from 'react';
import { Mail, User, Lock, Eye, EyeOff, ArrowRight, Heart, Check } from 'lucide-react';
import register from '../assets/register.jpg';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ 
    email: '', 
    username: '', 
    password: '',
    agreeToTerms: false
  });
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      // navigate('/dashboard')
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });

    
    if (name === 'password') {
      let strength = 0;
      if (value.length >= 8) strength++;
      if (/[A-Z]/.test(value)) strength++;
      if (/[a-z]/.test(value)) strength++;
      if (/[0-9]/.test(value)) strength++;
      if (/[^A-Za-z0-9]/.test(value)) strength++;
      setPasswordStrength(strength);
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Medium';
    return 'Strong';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-purple-700 to-purple-600 flex items-center justify-center p-4 relative overflow-hidden">

      <div className="bg-white/95 backdrop-blur-lg w-full max-w-5xl flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden border border-white/20 relative z-10 transform hover:scale-[1.01] transition-transform duration-300">
        {/* Left Panel */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-800 md:w-1/2 flex flex-col justify-center items-center text-center p-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 border border-white/30 rounded-lg rotate-45"></div>
            <div className="absolute top-1/2 right-5 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
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
                <div className="grid grid-cols-2 gap-2">
                  <div className="w-8 h-8 bg-white/60 rounded-full"></div>
                  <div className="w-8 h-8 bg-white/40 rounded-full"></div>
                  <div className="w-8 h-8 bg-white/40 rounded-full"></div>
                  <div className="w-8 h-8 bg-white/60 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">Join Our Community</h3>
            <p className="text-teal-100 text-sm leading-relaxed px-4">
              Connect with people who care and start making a difference today.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-1/2 p-8 sm:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
            <p className="text-gray-600">Join the Care Connect community</p>
          </div>

          <div className="space-y-6">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-teal-600 transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 hover:border-gray-300"
                  required
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-teal-600 transition-colors" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Choose a unique username"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 hover:border-gray-300"
                  required
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-teal-600 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a strong password"
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 hover:border-gray-300"
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
              
              {/* Password strength indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                        style={{ width: `${(passwordStrength / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span className={`text-xs font-medium ${passwordStrength <= 2 ? 'text-red-500' : passwordStrength <= 3 ? 'text-yellow-500' : 'text-green-500'}`}>
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-start space-x-3">
              <input 
                type="checkbox" 
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 mt-1" 
              />
              <label className="text-sm text-gray-700 leading-relaxed">
                I agree to the{' '}
                <a href="/terms" className="text-teal-600 hover:text-teal-700 font-semibold hover:underline">
                  Terms of Service
                </a>
                {' '}and{' '}
                <a href="/privacy" className="text-teal-600 hover:text-teal-700 font-semibold hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading || !formData.agreeToTerms}
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <a href="/login" className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition-colors">
                Sign In
              </a>
            </p>
          </div>

          {/* Benefits section */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <h4 className="text-sm font-semibold text-gray-800 mb-3">What you'll get:</h4>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Check className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                <span>Connect with your community</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Check className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                <span>Make a meaningful impact</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Check className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                <span>Access to exclusive resources</span>
              </div>
            </div>
          </div>

          {/* Social signup option */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or sign up with</span>
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

export default Register;