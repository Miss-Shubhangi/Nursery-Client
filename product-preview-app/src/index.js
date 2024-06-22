import ReactDom from "react-dom/client"
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from "./Views/Home/home";
import "./index.css"
import Productview from "./Views/Product-Preview/productview";

const root =ReactDom.createRoot(document.getElementById("root"))

const router = createBrowserRouter([

  {
    path:"/",
    element : <Home/>
  },
  {
    path : "/product/:id",
    element:<Productview/>
  }
])


  root.render(
   <RouterProvider router= {router}/>
  )  
