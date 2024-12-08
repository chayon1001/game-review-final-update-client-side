import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider"; // Importing AuthContext

const UpdateReview = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const { user } = useContext(AuthContext); 

    
    const [review, setReview] = useState({
        gameTitle: "",
        description: "",
        rating: "",
        genres: "",
    });

  
    useEffect(() => {
        fetch(`https://game-review-server-seven.vercel.app/review/${id}`)
            .then((res) => res.json())
            .then((data) => setReview(data))
            .catch((err) => console.error("Error fetching review:", err));
    }, [id]);

  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReview((prev) => ({ ...prev, [name]: value }));
    };

  
    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch(`https://game-review-server-seven.vercel.app/review/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire("Success!", "Your review has been updated.", "success");
                    navigate("/myReviews");
                } else {
                    Swal.fire("Error!", "Failed to update the review.", "error");
                }
            })
            .catch((err) => console.error("Error updating review:", err));
    };

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Update Your Review
            </h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
              
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Game Title</label>
                    <input
                        type="text"
                        name="gameTitle"
                        value={review.gameTitle}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />
                </div>

              
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Description</label>
                    <textarea
                        name="description"
                        value={review.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        rows="4"
                        required
                    ></textarea>
                </div>

             
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Rating (0-10)</label>
                    <input
                        type="number"
                        name="rating"
                        value={review.rating}
                        onChange={handleChange}
                        min="0"
                        max="10"
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />
                </div>

              
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Genres</label>
                    <input
                        type="text"
                        name="genres"
                        value={review.genres}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />
                </div>

           
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Your Email</label>
                    <input
                        type="email"
                        name="userEmail"
                        value={user?.email} 
                        readOnly
                        className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                    />
                </div>

               
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Your Name</label>
                    <input
                        type="text"
                        name="userName"
                        value={user?.displayName || 'user'} 
                        readOnly
                        className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                    />
                </div>

              
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                    Update Review
                </button>
            </form>
        </div>
    );
};

export default UpdateReview;
