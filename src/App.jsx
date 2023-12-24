import './App.css'

import AboutUs from './components/AboutUs'
import ContactUS from './components/Contact-us'
import BasicExample from './Navbar';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GlobalLayout from './layout/GlobalLayout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicExample />,
  },

  {
    path: "/about-us",
    element:
     
    <GlobalLayout>
      <AboutUs />,
    </GlobalLayout>
    
  },

  {
    path: "/contact-us",
    element: 
    <GlobalLayout>
    <ContactUS />,
  </GlobalLayout>,
  },
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
