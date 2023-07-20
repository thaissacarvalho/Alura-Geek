import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Storage from './Pages/Storage';
import RootLayout from './Pages/RootLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [{
            index: true,
            element: <Home/>
        }, {
            path: "login",
            element: <Login/>,
        },
        {
            path: "products",
            element: <Products/>,
        },
        {
            path: "add-products",
            element: <Storage/>,
        },],
    },
])

export default router;

