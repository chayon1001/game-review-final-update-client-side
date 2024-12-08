import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoGameControllerOutline } from "react-icons/io5";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <nav className="bg-slate-900 text-white border-b-4 border-yellow-500">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
               
                <div className="flex items-center justify-center gap-3">
                    <IoGameControllerOutline className="text-yellow-500 text-3xl" />
                    <div className="text-yellow-500 font-bold text-2xl">
                        <span className="text-white">Game</span> Warrior
                    </div>
                </div>

                
                <div className="flex space-x-6 items-center">
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
                        Game WatchList
                    </NavLink>

                    <NavLink
                        to="/contactUs"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-500 border-yellow-500" : "hover:text-yellow-500"
                        }
                    >
                        Contact
                    </NavLink>


                  
                    <div className="relative z-20">
                        {user && user.email ? (
                            <div
                                className="flex items-center gap-3 cursor-pointer"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)} >

                                <img
                                    src={user.photoURL}

                                    className="w-10 h-10 rounded-full border-2 border-yellow-500" />

                                {
                                    isHovered && (
                                        <div className="absolute top-12 left-0 bg-gray-800 text-white px-3 py-1 rounded-md shadow-lg">
                                            {user.displayName || "User"}
                                        </div>
                                    )
                                }

                                <button
                                    onClick={logOut}
                                    className="px-4 py-2 bg-yellow-500 rounded-lg text-black font-semibold"
                                >
                                    Log Out
                                </button>
                            </div>
                        )
                            :
                            (
                                <Link
                                    to="/auth/login"
                                    className="px-4 py-2 bg-yellow-500 rounded-lg text-black font-semibold"
                                >
                                    Login
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
