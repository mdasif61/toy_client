import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PriveateRoute/PrivateRoute";
import MyToys from "../Pages/MyToys";
import Home from "../Home/Home";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/mytoys',
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
            }
        ]
    }
])


export default router