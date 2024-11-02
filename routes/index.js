import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { Children } from "react";

const router = createBrowserRouter([
    (
        path = "/",
        element = <App/>,
        Children=[
            {
                path: "",
                element: <Home/>
            }
        ]
    )
])

export default router