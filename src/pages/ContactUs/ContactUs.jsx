import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start p-8 bg-gray-100">
   
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-2xl font-bold mb-4">Contact us</h2>
        <p className="text-gray-600 mb-6">
          Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl.
          Duis feugiat bibendum orci, non elementum urna. Cras sit amet sapien
          aliquam.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-orange-500 font-semibold">Address</h3>
            <p className="text-gray-600">1481 Dhaka<br />Bangladesh, CA 931</p>
          </div>
          <div>
            <h3 className="text-orange-500 font-semibold">Phone</h3>
            <p className="text-gray-600">+53 345 7953 32453</p>
          </div>
          <div>
            <h3 className="text-orange-500 font-semibold">E-mail</h3>
            <p className="text-gray-600">yourmail@gmail.com</p>
          </div>
        </div>
      
      </div>

    
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Leave a Reply</h2>
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
