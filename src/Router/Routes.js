import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Review from "../Pages/Review/Review";
import Services from "../Pages/Services/Services";
import SingUp from "../Pages/SingUp/SingUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
       children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/singup',
            element: <SingUp></SingUp>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/review',
            element: <Review></Review>
        },
        {
            path: '/service',
            element: <Services></Services>
        },
        {
            path: '/addservice',
            element: <AddService></AddService>
        }
       ]
        
    }
])

export default routes;