import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HighestRatedGames = () => {
    const [games, setGames] = useState([]);

    
    useEffect(() => {
        fetch("http://localhost:5000/review") 
            .then((res) => res.json())
            .then((data) => {
               
                const highestRatedGames = data
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 6);
                setGames(highestRatedGames);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className=" py-10 ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-white mb-8 text-center">
                    Highest Rated Games
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {
                        games.map((game) => (
                            <div
                                key={game._id}
                                className=" rounded-lg  border-2 bg-gray-300">

                                <div className="p-4">
                                    <img
                                        src={game.coverImage}

                                        className="w-full h-52   rounded-md" />
                                </div>
                                <div className="p-4">

                                    <h3 className="text-xl font-semibold text-black mb-2">
                                        {game.gameTitle}
                                    </h3>


                                    <p className="text-black mb-4">Rating :  {game.rating}/10

                                    </p>


                                    <p className="text-black mb-4"> Year : {game.publishingYear}

                                    </p>

                                   
                                    <Link
                                        to={`/review/${game._id}`}
                                        className="block text-center bg-yellow-500 text-black py-2 px-4 rounded-md font-semibold "
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

export default HighestRatedGames;
