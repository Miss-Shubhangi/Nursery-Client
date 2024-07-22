import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Plantcard from '../../Components/Plantcard/Plantcard'

function Home() {
  const [plants , setPlants]=useState([])

  const loadPlants=async ()=>{
      const response=await axios.get(`http://localhost:8000/plants`)
      console.log(response)
  }
  useEffect(()=>{
    loadPlants()
  },[])
  return (
    <div>
        <h1>Plants</h1>
    {
      Plants.map((plant,i)=>{
        const {_id ,name ,category ,price , image,description}=plant
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