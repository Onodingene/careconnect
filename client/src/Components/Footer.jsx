import React from 'react';
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-teal-700 text-white w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Make A Difference, Today!</h2>
          <p className="text-gray-200 text-sm sm:text-base max-w-md mx-auto">
            A web application that connects verified orphanages, shelters, underfunded schools, and other NGOs with people and organizations that want to help through donations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-3 text-base">Contact</h4>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Phone className="w-4 h-4" />
              <span>08068824305</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:careconnect@gmail.com" className="hover:text-pink-400 transition-colors">careconnect@gmail.com</a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-3 text-base">Navigate</h4>
            <ul className="space-y-1">
              <li><a href="#home" className="hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-pink-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-3 text-base">Follow Us</h4>
            <ul className="space-y-1">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-pink-400 transition-colors" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-pink-400 transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-pink-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-pink-400 transition-colors" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-teal-800 border-t border-gray-600 py-3 text-gray-200 text-center text-xs">
        <p>©2025, Careconnect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;