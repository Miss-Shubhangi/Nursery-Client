import { useState } from "react";
import React from 'react';
import toast, { Toaster } from "react-hot-toast";
import "./Addplant.css";
import axios from "axios";

const Addplant = () => { 
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
     
    const PlantAdd = async () => {
        toast.loading("Adding plant ....");
        
        if(!name || !category || !price || !image || !description) {
            toast.error("Please enter all details");
            return;
        }
        
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant`, {
                name: name,
                price: price,
                category: category,
                image: image,
                description: description
            });
            toast.dismiss();
            toast.success(response.data.message);
            setName('');
            setCategory('');
            setPrice('');
            setImage('');
            setDescription('');
        } 
           
    

    return (
        <div>
            <form className="add-plant-form">
                <h2>Add New Plant</h2>
                
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="00.0"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Image URL</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="button" onClick={PlantAdd} className="add-button">Add Plant</button>
            </form>
            <Toaster />
        </div>
    );
};

export default Addplant;
