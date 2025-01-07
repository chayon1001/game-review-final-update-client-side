import React from "react";
import { FaFacebook, FaTwitter, FaGlobe, FaBehance, FaLinkedin } from "react-icons/fa";
import { SiAmazon, SiAmazongames } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900  text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-xl font-bold text-yellow-500 flex items-center gap-2">
            <span className="text-3xl"><SiAmazongames /></span> Game Warrior
          </h2>
          <p className="mt-4 text-gray-400">
            Heaven fruitful doesn't over lesser days appear creeping seasons so
            behold bearing days open.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <p className="text-gray-400">Address: Mahigonj, Rangpur, Bangladesh.</p>
          <p className="mt-2 text-gray-400">Phone: +880 1878250186</p>
          <p className="mt-2 text-gray-400">Email: harishankarbarman50@gmail.com</p>
        </div>


        <div>
          <h3 className="text-xl font-bold mb-4">Important Link</h3>
          <ul className="text-gray-400 space-y-2">
            <Link to='/contactUs'><li>Contact</li></Link>
            <Link to='/blog'><li>Blogs</li></Link>
            <Link to='/allReviews'><li>All Reviews</li></Link>
            <Link to='/myReviews'><li>My Reviews</li></Link>
            <Link to='/addReview'><li>Add Reviews</li></Link>

          </ul>
        </div>


        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="text-gray-400">
            Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing days open.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-l-md w-full bg-slate-800 text-gray-300"
            />
            <button className="bg-yellow-500 px-7 py-3 rounded-r-md ">

            </button>
          </div>
        </div>
      </div>


      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
        <p className="mb-4">
          Copyright ©2025 All rights reserved

        </p>
        <div className="flex justify-center space-x-4 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaTwitter />
          </a>
         
          <a
            href="https://www.linkedin.com/in/harishankar-barman-045a5b32b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaLinkedin />
          </a>
        </div>

        </div>
    </footer>
  );
};

export default Footer; 
