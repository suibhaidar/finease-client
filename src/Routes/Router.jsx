import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import AddTransaction from "../pages/AddTransaction";
import MyTransactions from "../pages/MyTransactions";
import Reports from "../pages/Reports";



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
            }
        ]
    }
])
export default router;