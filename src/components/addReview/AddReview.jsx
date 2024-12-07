import React from 'react';

const AddReview = () => {
    return (
        <div className=" min-h-screen flex items-center justify-center p-6">
            <div className="bg-gray-800 text-white w-full max-w-lg rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-yellow-500">Submit a Game Review</h2>
                <form className="space-y-4">

                    <div>
                        <label htmlFor="coverImage" className="block text-gray-300 font-medium mb-1">
                            Game Cover Image (URL)
                        </label>
                        <input
                            type="url"
                            id="coverImage"
                            name="coverImage"
                            placeholder="Enter game cover URL"
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500" />
                    </div>


                    <div>
                        <label htmlFor="gameTitle" className="block text-gray-300 font-medium mb-1">
                            Game Title
                        </label>
                        <input
                            type="text"
                            id="gameTitle"
                            name="gameTitle"
                            placeholder="Enter game title"
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500" />
                    </div>


                    <div>
                        <label htmlFor="reviewDescription" className="block text-gray-300 font-medium mb-1">
                            Review Description
                        </label>
                        <textarea
                            id="reviewDescription"
                            name="reviewDescription"
                            rows="4"
                            placeholder="Write your review..."
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500" >

                        </textarea>
                    </div>


                    <div>
                        <label htmlFor="rating" className="block text-gray-300 font-medium mb-1">
                            Rating (1-10)
                        </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            min="1"
                            max="10"
                            placeholder="Enter rating"
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500" />
                    </div>


                    <div>
                        <label className="block text-gray-300 font-medium mb-1">
                            Publishing Year
                        </label>
                        <input
                            type="text"

                            name="publishingYear"
                            placeholder="Enter year (e.g., 2024)"
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500" />
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-black font-bold py-3 rounded-md hover:bg-yellow-600 " >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;




