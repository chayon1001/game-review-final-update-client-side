import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';

const ReviewDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState(null);

  useEffect(() => {
    // Fetch the review details from the server
    fetch(`http://localhost:5000/review/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((err) => console.error('Error fetching review:', err));
  }, [id]);

  const handleAddToWatchlist = () => {
    if (!user) {
      toast.error('You must be logged in to add to the watchlist.');
      return;
    }

    const watchlistData = {
      review,
      userEmail: user.email,
      userName: user.displayName || 'Anonymous',
    };

    fetch('http://localhost:5000/watchlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(watchlistData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success('Added to watchlist successfully!');
        } else {
          toast.error('Failed to add to watchlist.');
        }
      })
      .catch((err) => {
        console.error('Error adding to watchlist:', err);
        toast.error('Something went wrong.');
      });
  };

  if (!review) {
    return <div className="text-center text-white">Loading...</div>;
  }

  const { coverImage, gameTitle, reviewDescription, rating, genres, userName, userEmail } = review;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <img src={coverImage} alt={gameTitle} className="w-full h-64 object-cover rounded-md mb-6" />
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">{gameTitle}</h2>
        <p className="mb-4">{reviewDescription}</p>
        <p className="mb-4">
          <strong>Rating:</strong> {rating}/10
        </p>
        <p className="mb-4">
          <strong>Genre:</strong> {genres}
        </p>
        <p className="mb-4">
          <strong>Reviewer:</strong> {userName}
        </p>
        <p className="mb-6">
          <strong>Email:</strong> {userEmail}
        </p>
        <button
          onClick={handleAddToWatchlist}
          className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
        >
          Add to WatchList
        </button>
      </div>
    </div>
  );
};

export default ReviewDetails;
