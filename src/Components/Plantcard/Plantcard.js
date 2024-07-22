import React from 'react';
import './Plantcard.css';

const Plantcard = ({ _id,image, name, category, price, description, onEdit, onDelete }) => {
  return (
    <div className="plant-card">
      <img src={image} alt={name} className="plant-image" />
      <div className="plant-details">
        <h2 className="plant-name">{name}</h2>
        <p className="plant-category">{category}</p>
        <p className="plant-price">₹ {price} /-</p>
        <p className="plant-description">{description}</p>
        <div className="plant-actions">
          <button className="edit-button" onClick={onEdit}>Edit</button>
          <button className="delete-button" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Plantcard;