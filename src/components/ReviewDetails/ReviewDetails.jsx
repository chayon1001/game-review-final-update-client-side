import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const ReviewDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://game-review-server-side-sage.vercel.app/review/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch review details");
                }
                return res.json();
            })
            .then((data) => {
                setReview(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching review details:", err);
                setLoading(false);
            });
    }, [id]);

    const handleAddToWatchlist = () => {
        if (!user) {
            navigate("/auth/login");
            toast.error("You must be logged in to add to the watchlist.");
            return;
        }

        const watchlistData = {
            review,
            userEmail: user.email,
            userName: user.displayName,
        };

        fetch("https://game-review-server-side-sage.vercel.app/addwatchlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(watchlistData),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to add to watchlist");
                }
                return res.json();
            })
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Added to watchlist successfully!");
                } else {
                    toast.error("Failed to add to watchlist.");
                }
            })
            .catch((err) => {
                console.error("Error adding to watchlist:", err);
                toast.error("Something went wrong.");
            });
    };

    if (loading) {
        return <div className="text-center py-20">Loading review details...</div>;
    }

    if (!review) {
        return <div className="text-center py-20">Review not found.</div>;
    }

    const { coverImage, gameTitle, reviewDescription, rating, genres, userName, userEmail } = review;

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-7xl mx-auto rounded-lg shadow-lg p-6">
                <img
                    src={coverImage}
                    alt={gameTitle}
                    className="w-full h-[500px] object-cover rounded-md mb-6"
                />
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">{gameTitle}</h2>
                <p className="mb-4">{reviewDescription}</p>
                <p className="mb-4">Rating: {rating}/10</p>
                <p className="mb-4">Genre: {genres}</p>
                <p className="mb-4">Reviewer: {userName}</p>
                <p className="mb-6">Email: {userEmail}</p>
                <button
                    onClick={handleAddToWatchlist}
                    className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-md"
                >
                    Add to WatchList
                </button>
            </div>
        </div>
    );
};

export default ReviewDetails;
