import React from 'react';
import { FaRegSadTear } from 'react-icons/fa'; // You can use any icon library like React Icons

const ErrorElement = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96 text-center">
                <FaRegSadTear className="text-6xl text-yellow-500 mb-4" />
                <h3 className="text-4xl font-semibold text-gray-700 mb-4">Page Not Found</h3>
                <p className="text-lg text-gray-500 mb-6">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <a 
                    href="/" 
                    className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
                >
                    Go Back to Home
                </a>
            </div>
        </div>
    );
};

export default ErrorElement;
