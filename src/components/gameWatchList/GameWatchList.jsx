import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';



const GameWatchlist = () => {
    const [watchlist, setWatchlist] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    useEffect(() => {
        if (user?.email) {
            fetch(`https://game-review-server-seven.vercel.app/myWatchlist?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setWatchlist(data))
                .catch((err) => console.error('Error fetching watchlist:', err));
        } else {
            navigate('/auth/login');
        }
    }, [user?.email, navigate]);


    const handleRemove = (id) => {
        console.log("Attempting to delete game with ID:", id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, remove it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://game-review-server-seven.vercel.app/myWatchlist/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error(`Failed to delete: ${res.statusText}`);
                        }
                        return res.json();
                    })
                    .then((data) => {
                        Swal.fire("Removed!", "The game has been removed from your watchlist.", "success");
                        setWatchlist(watchlist.filter((game) => game._id !== id));
                    })
                    .catch((error) => {
                        console.error("Error removing game:", error);
                        Swal.fire("Error!", "Failed to remove the game.", "error");
                    });
            }
        });
    };




    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Game Watchlist</h2>
            {watchlist.length === 0 ? (
                <p className="text-center text-gray-600">Your watchlist is empty.</p>
            ) : (
                <table className="table-auto w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Game Title</th>
                            <th className="px-4 py-2">Genre</th>
                            <th className="px-4 py-2">Rating</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            watchlist.map((game) => (
                                <tr key={game._id} className="border-b">
                                    <td className="px-4 py-2">{game.gameTitle}</td>
                                    <td className="px-4 py-2">{game.genres}</td>
                                    <td className="px-4 py-2">{game.rating}/10</td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => handleRemove(game._id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                        >
                                            Remove
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

export default GameWatchlist;
