import Home from "../Pages/Home/Home";

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
        }
       ]
        
    }
])

export default routes;