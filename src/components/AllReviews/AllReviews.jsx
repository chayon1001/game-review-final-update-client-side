import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState([]);

    const [sortOption, setSortOption] = useState("rating-desc");

    const [selectedGenre, setSelectedGenre] = useState("");

    const [genres, setGenres] = useState([]);



    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                setFilteredReviews(data);

                const allGenres = [
                    ...new Set(
                        data
                            .map((review) => review.genres)
                            .flat()
                            .filter((genre) => genre)
                    ),
                ];
                setGenres(allGenres);
            })
            .catch((err) => console.error("Error fetching reviews:", err));
    }, []);


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


    const handleGenreChange = (event) => {
        const genre = event.target.value;
        setSelectedGenre(genre);


        if (genre === "") {
            setFilteredReviews(reviews);
        }
        else {
            const filtered = reviews.filter((review) => {
                
                const genresArray = Array.isArray(review.genres) ? review.genres : [review.genres];
                return genresArray.includes(genre);
            });
            setFilteredReviews(filtered);
        }
    };

  
    const sortedReviews = sortReviews(filteredReviews, sortOption);

    return (
        <div className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    All Reviews
                </h2>

                
                <div className="mb-6 flex justify-between">
                    <div className="flex items-center">
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

               
                    <div className="flex items-center">
                        <label htmlFor="genre" className="mr-2 font-semibold text-gray-700">
                            Filter by Genre:
                        </label>
                        <select
                            id="genre"
                            value={selectedGenre}
                            onChange={handleGenreChange}
                            className="px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none"
                        >
                            <option value="">All Genres</option>
                            {genres.map((genre, index) => (
                                <option key={index} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>
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
                                <p className="text-gray-600">
                                    Genre: {Array.isArray(review.genres) ? review.genres.join(", ") : review.genres}
                                </p>
                                <p className="text-gray-600">Year: {review.publishingYear}</p>

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
