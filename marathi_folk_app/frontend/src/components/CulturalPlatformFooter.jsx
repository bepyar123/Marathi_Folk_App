
import React from "react";

const CulturalPlatformFooter = () => {
  return (
    <footer className="bg-[#d32f2f]  text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/20 pb-8">
          <div className="col-span-full md:col-span-1">
            <h3 className="text-xl font-bold mb-2">
              <span className="block leading-tight">महाराष्ट्र सांस्कृतिक मंच</span>
              <span className="block text-sm font-normal">Cultural AI Platform</span>
            </h3>
            <p className="text-sm text-gray-200 mt-4">
              Preserving and celebrating Maharashtra's rich cultural heritage through AI-powered insights and community collaboration.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-300 transition duration-150">🎶 Folk Song Prediction</a></li>
              <li><a href="#" className="hover:text-amber-300 transition duration-150">🔍 Culture Explorer</a></li>
              <li><a href="#" className="hover:text-amber-300 transition duration-150">🤖 AI Stories</a></li>
              <li><a href="#" className="hover:text-amber-300 transition duration-150">🌐 Community Hub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Cultural Elements</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-300 transition duration-150">Traditional Costumes</a></li>
              <li><a href="#" className="hover:text-amber-300 transition duration-150">Festivals & Celebrations</a></li>
              <li><a href="#" className="hover:text-amber-300 transition duration-150">Maharashtrian Cuisine</a></li>
              <li><a href="#" className="hover:text-amber-300 transition duration-150">Folk Arts & Crafts</a></li>
              <li><a href="#" className="hover:text-amber-300 transition duration-150">Sacred Traditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <ul className="space-y-1 text-sm mb-6">
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:info@maharashtraculture.ai" className="hover:text-amber-300 transition duration-150">info@maharashtraculture.ai</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                <span>Nashik, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-xs text-gray-200">
          <p>© 2025 Maharashtra Cultural AI Platform. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-amber-300">Privacy Policy</a>
            <a href="#" className="hover:text-amber-300">Terms of Service</a>
            <a href="#" className="hover:text-amber-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CulturalPlatformFooter;
