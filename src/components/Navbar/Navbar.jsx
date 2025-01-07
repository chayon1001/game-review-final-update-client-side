import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoGameControllerOutline } from "react-icons/io5";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-slate-900 text-white border-b-4 border-yellow-500 w-full sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
                <div className="flex items-center gap-3">
                    <IoGameControllerOutline className="text-yellow-500 text-3xl" />
                    <div className="text-yellow-500 font-bold text-2xl hidden lg:block">
                        <span className="text-white">Game</span> Warrior
                    </div>
                </div>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-yellow-500 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                <div className="hidden lg:flex space-x-6 items-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-500 border-yellow-500" : "hover:text-yellow-500"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/allReviews"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-500 border-yellow-500" : "hover:text-yellow-500"
                        }
                    >
                        All Reviews
                    </NavLink>

                    {/* Show these links only if the user is logged in */}
                    {user && user.email && (
                        <>
                            <NavLink
                                to="/addReview"
                                className={({ isActive }) =>
                                    isActive ? "text-yellow-500 border-yellow-500" : "hover:text-yellow-500"
                                }
                            >
                                Add Review
                            </NavLink>
                            <NavLink
                                to="/myReviews"
                                className={({ isActive }) =>
                                    isActive ? "text-yellow-500 border-yellow-500" : "hover:text-yellow-500"
                                }
                            >
                                My Reviews
                            </NavLink>
                            <NavLink
                                to="/gameWatchList"
                                className={({ isActive }) =>
                                    isActive ? "text-yellow-500 border-yellow-500" : "hover:text-yellow-500"
                                }
                            >
                                My WatchList
                            </NavLink>
                        </>
                    )}

                    <NavLink
                        to="/contactUs"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-500 border-yellow-500" : "hover:text-yellow-500"
                        }
                    >
                        Contact
                    </NavLink>

                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-500 border-yellow-500" : "hover:text-yellow-500"
                        }
                    >
                        Blog
                    </NavLink>

                    <div className="relative">
                        {user && user.email ? (
                            <div
                                className="flex items-center gap-3 cursor-pointer"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-yellow-500"
                                />
                                {isHovered && (
                                    <div className="absolute top-12 left-0 bg-gray-800 text-white px-3 py-1 rounded-md shadow-lg">
                                        {user.displayName || "User"}
                                    </div>
                                )}
                                <button
                                    onClick={logOut}
                                    className="px-4 py-2 bg-yellow-500 rounded-lg text-black font-semibold"
                                >
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <Link
                                to="/auth/login"
                                className="px-4 py-2 bg-yellow-500 rounded-lg text-black font-semibold"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-slate-900 text-white flex flex-col items-center py-4 space-y-4 w-full">
                    <NavLink
                        to="/"
                        className="text-yellow-500 hover:text-yellow-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/allReviews"
                        className="text-yellow-500 hover:text-yellow-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        All Reviews
                    </NavLink>
                    {user && user.email && (
                        <>
                            <NavLink
                                to="/addReview"
                                className="text-yellow-500 hover:text-yellow-500"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Add Review
                            </NavLink>
                            <NavLink
                                to="/myReviews"
                                className="text-yellow-500 hover:text-yellow-500"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                My Reviews
                            </NavLink>
                            <NavLink
                                to="/gameWatchList"
                                className="text-yellow-500 hover:text-yellow-500"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                My WatchList
                            </NavLink>
                        </>
                    )}
                    <NavLink
                        to="/contactUs"
                        className="text-yellow-500 hover:text-yellow-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className="text-yellow-500 hover:text-yellow-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Blog
                    </NavLink>

                    {/* Display login/logout options */}
                    <div>
                        {user && user.email ? (
                            <div className="flex flex-col items-center">
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-yellow-500"
                                />
                                <button
                                    onClick={logOut}
                                    className="px-4 py-2 bg-yellow-500 rounded-lg text-black font-semibold mt-2"
                                >
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <Link
                                to="/auth/login"
                                className="px-4 py-2 bg-yellow-500 rounded-lg text-black font-semibold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
