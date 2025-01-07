import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Fade } from "react-awesome-reveal";

import './HighestRated.css'

const HighestRatedGames = () => {
    const [games, setGames] = useState([]);


    useEffect(() => {
        fetch("https://game-review-server-seven.vercel.app/review")
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
        <div className="w-10/12 mx-auto py-10 highest-rated-games">
            <div className=" px-4">
                <Fade duration={1000}>
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">
                        Highest Rated Games
                    </h2>
                </Fade>

                <Fade delay={500} duration={1000}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
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


                                        <p className="text-black mb-4">  {game.rating}/10

                                        </p>


                                        <p className="text-black mb-4">  {game.publishingYear}

                                        </p>


                                        <Link
                                            to={`/review/${game._id}`}
                                            className="block text-center bg-yellow-500 text-black py-2 px-4 rounded-md font-semibold "
                                        >
                                           See More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    </div>

                </Fade>
            </div>
        </div>
    );
};

export default HighestRatedGames;
