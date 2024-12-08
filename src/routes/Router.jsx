import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ErrorElement from "../pages/ErrorElement";
import AllReviews from "../components/AllReviews/AllReviews";
import AddReview from "../components/addReview/AddReview";
import MyReviews from "../components/myReviews/MyReviews";
import GameWatchList from "../components/gameWatchList/GameWatchList";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ReviewDetails from "../components/ReviewDetails/ReviewDetails";
import UpdateReview from "../components/UpdateReview/UpdateReview";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/allReviews",
                element: <AllReviews></AllReviews>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: "/addReview",
                element: <PrivateRoute>
                    <AddReview></AddReview>
                </PrivateRoute>
            },
            {
                path: "/myReviews",
                element: <PrivateRoute>
                    <MyReviews></MyReviews>
                </PrivateRoute>
            },

            {
                path: "/gameWatchList",
                element: <PrivateRoute>
                    <GameWatchList></GameWatchList>
                </PrivateRoute>
            },

            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/review/:id',
                element: <ReviewDetails></ReviewDetails>
            },
            {
                path: "/updateReview/:id",
                element: <UpdateReview></UpdateReview>
            }


        ]

    }
])