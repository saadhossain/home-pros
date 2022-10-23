import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";
import PropertyLoader from "../Loader/PropertyLoader";

export const routers = createBrowserRouter([
    {
        path: '/',
        loader:PropertyLoader,
        element:<Main></Main>,
        children:[
            {path:'/', element:<Home></Home>}
        ]
    }
])