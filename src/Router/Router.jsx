import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import OurProjects from "../Pages/OurProjects/OurProjects";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import ServiceDetail from "../components/Services/ServiceDetail/ServiceDetail";
import Register from "../Pages/Register/Register";
import PriveteRoute from "./PrivateRoute/PrivateRoute";

 const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout></MainLayout>,
            children:[
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: ()=>fetch('/services.json')
                },
                {
                    path: 'service/:id',
                    element: <PriveteRoute><ServiceDetail></ServiceDetail></PriveteRoute>,
                    loader: ()=>fetch('/services.json')
                },
                {
                    path: '/projects',
                    element:<PriveteRoute> <OurProjects></OurProjects></PriveteRoute>,
                    loader: ()=>fetch('/projects.json')
                },
                {
                    path: '/contact',
                    element: <PriveteRoute><Contact></Contact></PriveteRoute>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                }
            ]
        }
    ])


export default router;