import React from 'react';
import './Plantcard.css';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { Link } from 'react-router-dom';

const Plantcard = ({ _id,image, name, category, price, description, onEdit, loadPlants }) => {
const deleteplant=async(plantId)=>{
   const response =await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${plantId}`)

   toast.success(response.data.message)
   loadPlants()
}

  return (
    <div className="plant-card">
      <img src={image} alt={name} className="plant-image" />
      <div className="plant-details">
        <h2 className="plant-name">{name}</h2>
        <p className="plant-category">{category}</p>
        <p className="plant-price">₹ {price} /-</p>
        <p className="plant-description">{description}</p>
        <div className="plant-actions">
          <Link to={`/editplant/${_id}`} type='button' className="edit-button" onClick={onEdit}>Edit</Link>
          <button type='button'className="delete-button" onClick={()=>{
            deleteplant(_id)
          }}>Delete</button>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default Plantcard;