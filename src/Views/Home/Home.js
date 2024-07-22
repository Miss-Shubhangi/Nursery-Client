import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Plantcard from '../../Components/Plantcard/Plantcard'
import "./Home.css"
import Header from '../../Components/Header/Header'

function Home() {
  const [plants , setPlants]=useState([])

  const loadPlants=async ()=>{
      const response=await axios.get(`http://localhost:8000/plants`)
      console.log(response.data.data)
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
    </div>
  )
}

export default Home