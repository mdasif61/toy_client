import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PriveateRoute/PrivateRoute";
import MyToys from "../Pages/MyToys";
import Home from "../Home/Home";
import AddaToy from "../Pages/AddaToy";
import AllToy from "../Pages/AllToy";


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
            },
            {
                path:'/addtoy',
                element:<PrivateRoute><AddaToy></AddaToy></PrivateRoute>
            },
            {
                path:'/alltoys',
                element:<AllToy></AllToy>,
                loader:()=>fetch('https://b7a11-toy-marketplace-server-side-mdasif61.vercel.app/totalToy')
            }
        ]
    }
])


export default router