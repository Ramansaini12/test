import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import ContactUs from './components/home/ContactUs';
import Resources from './components/home/Resources';
import Experiences from './components/home/Experiences';
import OurServices from './components/home/OurServices';


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/our-services",
          element: <OurServices />
        },
        {
          path: "/our-experience",
          element: <Experiences />
        },
        {
          path: "/resources",
          element: <Resources />
        },
        {
          path: "contact-us",
          element: < ContactUs />
        },
      ]
    }
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
