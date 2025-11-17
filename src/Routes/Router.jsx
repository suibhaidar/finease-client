import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import AddTransaction from "../pages/AddTransaction";
import MyTransactions from "../pages/MyTransactions";
import Reports from "../pages/Reports";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdateTransaction from "../pages/UpdateTransaction";
import TDetails from "../pages/TDetails";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "../Provider/PrivateRouter";




 const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path:'add-transaction',
                element:<PrivateRoute><AddTransaction/></PrivateRoute>
            },
            {
                path:'my-transactions',
                element:<PrivateRoute><MyTransactions/></PrivateRoute>
            },
            {
                path:'reports',
                element: <PrivateRoute><Reports/></PrivateRoute>
            },
            {
                path:'transaction/update/:id',
                element:<PrivateRoute><UpdateTransaction></UpdateTransaction></PrivateRoute>
            },
            {
                path:'transaction/:id',
                element:<PrivateRoute><TDetails/></PrivateRoute>
            }
        ]
    },
    {
        path: '/auth',
        element:<AuthLayout/>,
        children:[
            {
                path:'/auth/login',
                element:<Login/>
            },
            {
                path:'/auth/register',
                element:<Register/>
            },
            {
                path:'/auth/myProfile',
                element:<PrivateRoute><MyProfile/></PrivateRoute>
            }
           
            
        ]
    }
])
export default router;