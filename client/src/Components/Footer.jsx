import React from "react";

function Footer() {
  return (
    <footer className="bg-[#077A7D] text-white w-full min-h-[400px] flex flex-col justify-between">
      <div className="mx-auto w-full py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-4">Make A Difference, Today!</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            A web application that connects verified orphanages,
            shelters, underfunded schools, and other NGOs with people and organizations that want to help
            either through donations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-base w-full">
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <div className="flex items-start gap-2 mb-2">
              <span>08068824305</span>
            </div>
            <div className="flex items-start gap-2">
              <span>careconnect@gmail.com</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navigate</h4>
            <ul className="space-y-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Follow Us</h4>
            <ul className="space-y-4">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-300 py-4 text-gray-200 flex flex-col md:flex-row justify-between items-center bg-[#066A6C]">
        <p className="w-full text-center">©2025, Careconnect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;