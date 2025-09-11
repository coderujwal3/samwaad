import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold">SAMWAAD CLUB</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Fostering communication, creativity, and community among students. Join us to explore new horizons and build lasting connections.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>College Campus, Main Building</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>samwaad@college.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">About Us</a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Events</a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Gallery</a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://facebook.com/samwaadclub"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/samwaadclub"
                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/samwaadclub"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/samwaadclub"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Stay connected and get the latest updates about our events and activities!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SAMWAAD CLUB. All rights reserved. Made with ❤️ by our community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;