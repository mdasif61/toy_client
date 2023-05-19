import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PriveateRoute/PrivateRoute";
import MyToys from "../Pages/MyToys";
import Home from "../Home/Home";
import AddaToy from "../Pages/AddaToy";
import AllToy from "../Pages/AllToy";
import Details from "../Pages/Details";
import Modal from "../Modals/Modal";
import Error from "../Pages/Error";
import UpdateData from "../Pages/UpdateData";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
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
                loader:()=>fetch('https://sports-special-server.onrender.com/totalToy')
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader:({params})=>fetch(`https://sports-special-server.onrender.com/uniqueToy/${params.id}`)
            },
            {
                path:'/updateData/:id',
                element:<UpdateData></UpdateData>,
                loader:({params})=>fetch(`https://sports-special-server.onrender.com/uniqueToy/${params.id}`)
            }
        ]
    }
])


export default router