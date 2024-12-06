import React from "react";
import { FaFacebook, FaTwitter, FaGlobe, FaBehance } from "react-icons/fa";
import { SiAmazon, SiAmazongames } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-xl font-bold text-yellow-500 flex items-center gap-2">
            <span className="text-3xl"><SiAmazongames/></span> Game Warrior
          </h2>
          <p className="mt-4 text-gray-400">
            Heaven fruitful doesn't over lesser days appear creeping seasons so
            behold bearing days open.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <p className="text-gray-400">Address: Your address goes here, your demo address. Bangladesh.</p>
          <p className="mt-2 text-gray-400">Phone: +880 44338899</p>
          <p className="mt-2 text-gray-400">Email: info@colorlib.com</p>
        </div>

        
        <div>
          <h3 className="text-xl font-bold mb-4">Important Link</h3>
          <ul className="text-gray-400 space-y-2">
            <li>WHMCS-bridge</li>
            <li>Search Domain</li>
            <li>My Account</li>
            <li>Shopping Cart</li>
            <li>Our Shop</li>
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
          Copyright ©2024 All rights reserved | This template is made with  by 
          <span className="text-yellow-500 pl-1">Colorlib</span>
        </p>
        <div className="flex justify-center space-x-4 text-xl">
          <FaFacebook className="hover:text-yellow-500 " />
          <FaTwitter className="hover:text-yellow-500 " />
          <FaGlobe className="hover:text-yellow-500 " />
          <FaBehance className="hover:text-yellow-500 " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
