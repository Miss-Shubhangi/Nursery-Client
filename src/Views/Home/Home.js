import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Plantcard from '../../Components/Plantcard/Plantcard'
import "./Home.css"
import Header from '../../Components/Header/Header'
import toast , { Toaster } from "react-hot-toast"
function Home() {
  const [plants , setPlants]=useState([])

  const loadPlants=async ()=>{
    toast.loading("Loading Plants....")
      const response=await axios.get(`https://nursery-server-mxr3.onrender.com/plants`)
    toast.dismiss()
      toast.success("Plants loaded successfully")
      setPlants(response.data.data)
  }
  useEffect(()=>{
    loadPlants()
  },[])
  return (
    <div>
     <Header/>   
    {
      plants.map((plant,i)=>{
        const {_id ,
          name ,
          category ,
          price , 
          image,
          description}=plant
        return <Plantcard _id={_id}
        name={name}
        category={category}
        price={price}
        image={image}
        description={description}
        />
      })  
    }
    <Toaster/>
    </div>
  )
}

export default Home