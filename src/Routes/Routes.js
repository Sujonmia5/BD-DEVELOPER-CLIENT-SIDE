import { createBrowserRouter } from "react-router-dom"
import Course from "../Components/Course/Course"
import Home from "../Components/Home/Home"
import Login from "../Components/Login/Login"
import Register from "../Components/Register/Register"
import Layout from "../Layout/Layout"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/category/:id', element: <Course />
            },

        ]
    },
    {
        path: '/register', element: <Register />
    },
    {
        path: '/login', element: <Login />
    },



])
export default routes