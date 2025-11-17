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
                element:<AddTransaction/>
            },
            {
                path:'my-transactions',
                element:<MyTransactions/>
            },
            {
                path:'reports',
                element: <Reports/>
            },
            {
                path:'transaction/update/:id',
                element:<UpdateTransaction></UpdateTransaction>
            },
            {
                path:'transaction/:id',
                element:<TDetails/>
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
                element:<MyProfile/>
            }
           
            
        ]
    }
])
export default router;