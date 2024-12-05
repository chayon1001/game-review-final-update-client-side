import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ErrorElement from "../pages/ErrorElement";

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

        ]

    }
])