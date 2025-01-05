import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "../Privet/PrivetRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/Dashboard/cart";
import AllUser from "../Pages/Dashboard/AllUsers/AllUser";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <PrivetRoute><Menu /></PrivetRoute>
            },
            {
                path: '/shop/:category',
                element: <PrivetRoute><Shop /></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path:'dashboard',
        element:<DashBoard/>,
        children:[
            {
                path:'cart',
                element:<Cart/>

            },


            //admin routes
            {
                path:'all-users',
                element:<AllUser/>
            }
        ]
    }
])

export default router;