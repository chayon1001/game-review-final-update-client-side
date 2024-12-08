import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/userReviews?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setReviews(data))
                .catch((err) => console.log(err));
        }
    }, [user?.email]);

    
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/review/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your review has been deleted.", "success");
                            setReviews(reviews.filter((review) => review._id !== id));
                        } else {
                            Swal.fire("Error!", "Failed to delete the review.", "error");
                        }
                    })
                    .catch((err) => console.log(err));
            }
        });
    };

    
    const handleUpdate = (id) => {
        navigate(`/updateReview/${id}`);
    };

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Reviews</h2>
            {reviews.length === 0 ? (
                <p className="text-center text-gray-600">No reviews found.</p>
            ) : (
                <table className="table-auto w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Game Title</th>
                            <th className="px-4 py-2">Rating</th>
                            <th className="px-4 py-2">Genre</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((review) => (
                                <tr key={review._id} className="border-b ">
                                    <td className="px-4  py-2">{review.gameTitle}</td>
                                    <td className="px-4 py-2">{review.rating}/10</td>
                                    <td className="px-4 py-2">{review.genres}</td>
                                    <td className="px-4 py-2 flex gap-2">
                                        <button
                                            onClick={() => handleUpdate(review._id)}
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(review._id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )}
        </div>
    );

};

export default MyReviews;
