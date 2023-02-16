import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Details from "../Pages/Home/Details";
import Home from "../Pages/Home/Home";
import Project from "../Pages/Home/Project";
import Bike from "../Pages/Projects/Bike";
import Coder from "../Pages/Projects/Coder";
import Tour from "../Pages/Projects/Tour";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";




export const Routes = createBrowserRouter([
   {
      path: '/', element: <Main />, children: [
         { path: '/', element: <Home /> },
         { path: '/home', element: <Home /> },
         { path: '/contact', element: <Contact /> },
         { path: '/about', element: <About /> },
         { path: '/blog', element: <Blog /> },
         { path: '/products/1', element: <Bike /> },
         { path: '/products/2', element: <Tour /> },
         { path: '/products/3', element: <Coder /> }
      ]
   },
   { path: '*', element: <ErrorPage /> }
])

