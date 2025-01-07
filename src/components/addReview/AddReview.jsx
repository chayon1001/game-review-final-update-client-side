import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';

const AddReview = () => {
    const { user } = useContext(AuthContext);

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;

        const coverImage = form.coverImage.value;
        const gameTitle = form.gameTitle.value;
        const reviewDescription = form.reviewDescription.value;
        const rating = form.rating.value;
        const publishingYear = form.publishingYear.value;
        const genres = form.genres.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;

        const user = { coverImage, gameTitle, reviewDescription, rating, publishingYear, genres, userName, userEmail};
        console.log(user);

        fetch('https://game-review-server-side-sage.vercel.app/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                toast.success('Game review successfully added');
            }
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="bg-gray-800 text-white w-full max-w-lg rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-yellow-500">Submit a Game Review</h2>
                <form onSubmit={handleAddReview} className="space-y-4">
                    <div>
                        <label className="block text-gray-300 font-medium mb-1">Game Cover Image (URL)</label>
                        <input
                            type="url"
                            name="coverImage"
                            placeholder="Enter game cover URL"
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-medium mb-1">Game Title</label>
                        <input
                            type="text"
                            name="gameTitle"
                            placeholder="Enter game title"
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-medium mb-1">Review Description</label>
                        <textarea
                            name="reviewDescription"
                            rows="4"
                            placeholder="Write your review..."
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-300 font-medium mb-1">Rating (1-10)</label>
                        <input
                            type="number"
                            name="rating"
                            min="1"
                            max="10"
                            placeholder="Enter rating"
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-medium mb-1">Publishing Year</label>
                        <input
                            type="text"
                            name="publishingYear"
                            placeholder="Enter year (e.g., 2024)"
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-medium mb-1">Genres</label>
                        <select
                            name="genres"
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            <option value="Action">Action</option>
                            <option value="RPG">RPG</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Strategy">Strategy</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-300 font-medium mb-1">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            value={user?.displayName || 'user'}
                            readOnly
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-400 cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-medium mb-1">User Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            value={user?.email}
                            readOnly
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-400 cursor-not-allowed"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-black font-bold py-3 rounded-md hover:bg-yellow-600 transition duration-300"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;




