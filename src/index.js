import React from "react"
import ReactDom from "react-dom/client"
import { RouterProvider , createBrowserRouter } from "react-router-dom"
import Home from "./Views/Home/Home"
import Addplant from "./Views/AddPlant/Addplant"
import EditPlant from "./Views/EditPlant/EditPlant"

const root =ReactDom.createRoot(document.getElementById("root"))   

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/addplant",
        element:<Addplant/>
    },
    {
        path:"/EditPlant/:id",
        element:<EditPlant/>
    },
    {
        path:"*",
        element: <h1>404 Page Not Found</h1>,
    }
])

root.render(<div><RouterProvider router={router}/>
</div>)