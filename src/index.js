import React from "react"
import ReactDom from "react-dom/client"
import { RouterProvider , createBrowserRouter } from "react-router-dom"
import Home from "./Views/Home/Home"

const root =ReactDom.createRoot(document.getElementById("root"))   

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"*",
        element: <h1>404 Page Not Found</h1>,
    }
])

root.render(<RouterProvider router={router}/>)