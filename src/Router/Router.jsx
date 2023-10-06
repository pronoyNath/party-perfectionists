import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import OurProjects from "../Pages/OurProjects/OurProjects";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import ServiceDetail from "../components/Services/ServiceDetail/ServiceDetail";

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
                    element: <ServiceDetail></ServiceDetail>,
                    loader: ()=>fetch('/services.json')
                },
                {
                    path: '/projects',
                    element: <OurProjects></OurProjects>
                },
                {
                    path: '/contact',
                    element: <Contact></Contact>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                }
            ]
        }
    ])


export default router;