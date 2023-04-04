import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../Home/Home/Home";
import NotFound from "../Share/NotFound/NotFound";
import Services from "../Services/Services";
import About from "../About/About";
import SignUp from "../Authentication/SignUp/SignUp";
import Blogs from "../Blogs/Blogs";
import Report from "../Report/Report";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import ServicesDetails from "../Services/ServicesDetails/ServicesDetails";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/home", element: <Home></Home> },
            { path: "/services", element: <Services></Services> },
            { path: "/about", element: <About></About> },
            { path: "/blogs", element: <Blogs></Blogs> },
            { path: "/testimonials", element: <Testimonials></Testimonials> },
            { path: "/report", element: <Report></Report> },
            { path: "/blogs", element: <Blogs></Blogs> },
            { path: "/signUp", element: <SignUp></SignUp> },
            { path: "/contact", element: <Contact></Contact> },
            // { path: "/services/:id",loader={({ params }) => 
            //     fetch("Services.json");
            //   }, element: <ServicesDetails></ServicesDetails> },
             
            // { path: "/products", element: <Products></Products> },

        ]
    },
    { path: "*", element: <NotFound></NotFound>}
   

])

export default routes;