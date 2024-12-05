import React from "react";
import { NavLink } from "react-router-dom";
import { IoGameControllerOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className="bg-slate-900 text-white">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">

                <div className="flex items-center justify-center gap-3">
                    <IoGameControllerOutline className="text-yellow-500 text-3xl" />
                    <div className="text-yellow-500 font-bold text-2xl"> <span className="text-white">Game</span>  Warrior</div>
                </div>


                <div className="flex space-x-6 items-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-500  border-yellow-500"
                                : "hover:text-yellow-500"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/allReviews"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-500  border-yellow-500"
                                : "hover:text-yellow-500"
                        }
                    >
                        All Reviews
                    </NavLink>
                    <NavLink
                        to="/addReview"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-500  border-yellow-500"
                                : "hover:text-yellow-500"
                        }
                    >
                        Add Review
                    </NavLink>
                    <NavLink
                        to="/myReviews"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-500 border-yellow-500"
                                : "hover:text-yellow-500"
                        }
                    >
                        My Reviews
                    </NavLink>
                    <NavLink
                        to="/gameWatchList"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-500  border-yellow-500"
                                : "hover:text-yellow-500"
                        }
                    >
                        Game WatchList
                    </NavLink>

                    <div className="">
                        <button className="bg-yellow-500  text-black  text-xl py-2 px-4 rounded-xl">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
