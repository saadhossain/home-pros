import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";
import PropertyLoader from "../Loader/PropertyLoader";
import Login from '../Components/Login/Login'
import Register from "../Components/Register/Register";
import Properties from "../Components/Properties/Properties";
export const routers = createBrowserRouter([
    {
        path: '/',
        loader:PropertyLoader,
        element:<Main></Main>,
        children:[
            {path:'/', element:<Home></Home>},
            {path:'/properties', element:<Properties></Properties>},
            {path:'/login', element:<Login></Login>},
            {path:'/register', element:<Register></Register>},
        ],
    }
])