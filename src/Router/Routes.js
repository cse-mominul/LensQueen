import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Review from "../Pages/Review/Review";
import Serviceall from "../Pages/Services/Serviceall";
import Services from "../Pages/Services/Services";
import ServicesDetails from "../Pages/Services/ServicesDetails";
import SingUp from "../Pages/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute";

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
            element: <PrivateRoute><Review></Review></PrivateRoute>
        },
        {
            path: '/service',
            element: <Services></Services>
        },
        {
            path: '/addservice',
            element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
            path:'/service/:id',
            element: <ServicesDetails></ServicesDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        { path: '/ser',
        element: <Serviceall></Serviceall>

        }
       ]
        
    }
])

export default routes;