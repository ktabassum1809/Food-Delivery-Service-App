import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-gray-200 text-center py-6">
      <div className="container mx-auto px-6">
        {/* 🚀 Quick Links */}
        <nav className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-6 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-white transition-all hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="hover:text-white transition-all hover:scale-105"
          >
            Menu
          </Link>
          <Link
            to="/orders"
            className="hover:text-white transition-all hover:scale-105"
          >
            Orders
          </Link>
          <Link
            to="/about"
            className="hover:text-white transition-all hover:scale-105"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-white transition-all hover:scale-105"
          >
            Contact
          </Link>
        </nav>

        {/* 📢 Newsletter Signup */}
        <div className="mt-6">
          <p className="text-sm">Subscribe to our newsletter for updates!</p>
          <div className="flex justify-center mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg text-black focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <button className="bg-gray-900 hover:bg-gray-700 px-4 py-2 rounded-r-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* 🔗 Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="#"
            className="text-2xl hover:text-white transition-all hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-white transition-all hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-white transition-all hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>

        {/* 📄 Copyright */}
        <p className="mt-4 text-xs">
          © {new Date().getFullYear()} FoodDelivery. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
