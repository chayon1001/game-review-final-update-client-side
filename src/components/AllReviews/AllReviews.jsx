import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch all reviews from the server
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.error("Error fetching reviews:", err));
    }, []);

    return (
        <div className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    All Reviews
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div
                            key={review._id}
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            <img
                                src={review.coverImage}
                                alt={review.gameTitle}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {review.gameTitle}
                                </h3>
                                <p className="text-gray-600">
                                    Rating: {review.rating}/10
                                </p>
                                <p className="text-gray-600">
                                    Genre: {review.genres}
                                </p>
                                {/* Dynamic Link to the Review Details page */}
                                <Link
                                    to={`/review/${review._id}`} // Correct dynamic URL
                                    className="block bg-yellow-500 text-black text-center py-2 mt-4 rounded-md font-semibold hover:bg-yellow-600 transition"
                                >
                                    Explore Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllReviews;
