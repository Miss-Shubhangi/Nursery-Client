import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Plantcard from '../../Components/Plantcard/Plantcard'
import "./Home.css"
import Header from '../../Components/Header/Header'
import toast , { Toaster } from "react-hot-toast"
import { Link } from 'react-router-dom'
function Home() {
  const [plants , setPlants]=useState([])

  const loadPlants=async ()=>{
    toast.loading("Loading Plants....")
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`);
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
     <Link to="/addplant" className="add-plant-section">
        <button className="add-plant-button" >
         New Plant
        </button>
      </Link>  
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
        loadPlants={loadPlants}
        />
      })  
    }
    <Toaster/>
    </div>
  )
}

export default Home