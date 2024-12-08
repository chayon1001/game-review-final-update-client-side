import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [sortOption, setSortOption] = useState("rating-desc"); 
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  

  // Sorting functions
  const sortingFunctions = {
    "rating-desc": (a, b) => b.rating - a.rating, 
    "year-asc": (a, b) => a.year - b.year,
  };

 
  const sortReviews = (reviews, option) => {
    const sortFunction = sortingFunctions[option];
    return sortFunction ? [...reviews].sort(sortFunction) : reviews;
  };

  
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

 
  const sortedReviews = sortReviews(reviews, sortOption);

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          All Reviews
        </h2>

        
        <div className="mb-6">
          <label htmlFor="sort" className="mr-2 font-semibold text-gray-700">
            Sort by:
          </label>
          <select
           
            value={sortOption}
            onChange={handleSortChange}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none"
          >
            <option value="rating-desc">Rating (Descending)</option>
            <option value="year-asc">Year (Ascending)</option>
          </select>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedReviews.map((review) => (
            <div key={review._id} className="bg-white shadow-md rounded-lg">
              <img
                src={review.coverImage}
                alt={review.gameTitle}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {review.gameTitle}
                </h3>
                <p className="text-gray-600">Rating: {review.rating}/10</p>
                <p className="text-gray-600">Genre: {review.genres}</p>
                <p className="text-gray-600">Year: {review.year}</p>

                <Link
                  to={`/review/${review._id}`} 
                  className="block bg-yellow-500 text-black text-center py-2 mt-4 rounded-md font-semibold"
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
