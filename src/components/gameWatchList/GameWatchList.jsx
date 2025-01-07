import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const GameWatchList = () => {
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        axios
            .get('https://game-review-server-side-sage.vercel.app/watchlist')
            .then((response) => {
                console.log('Axios fetched data:', response.data);
                setWatchlist(response.data);
            })
            .catch((error) => console.error('Error fetching data with axios:', error));
    }, []);

    const handleRemove = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, remove it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://game-review-server-side-sage.vercel.app/watchlist/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error('Failed to delete');
                        }
                        return res.json();
                    })
                    .then(() => {
                        Swal.fire('Removed!', 'The game has been removed from your watchlist.', 'success');
                        setWatchlist(watchlist.filter((game) => game._id !== _id));
                    })
                    .catch((error) => {
                        console.error('Error removing game:', error);
                        Swal.fire('Error!', 'Failed to remove the game.', 'error');
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
                        {watchlist.map((game) => (
                            <tr key={game._id} className="border-b">
                                <td className="px-4 py-2">{game.gameTitle || 'Unknown Title'}</td>
                                <td className="px-4 py-2">{game.genres || 'Unknown Genre'}</td>
                                <td className="px-4 py-2">{game.rating ? `${game.rating}/10` : 'No Rating'}</td>
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

export default GameWatchList;
