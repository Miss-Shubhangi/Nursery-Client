import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import "./EditPlant.css";

function EditPlant() {
    const { id } = useParams();  // Call useParams as a function

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const updatePlant = async () => {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`, {
                name: name,
                price: price,
                category: category,
                image: image,
                description: description
            });
            toast.success(response.data.message);

        }


    const loadplant = async () => {
        if (!id) {
            return;
        }
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`);
            const { name, image, price, category, description } = response.data.data;
            setName(name);
            setCategory(category);
            setPrice(price);
            setImage(image);
            setDescription(description);
       
        }
    

    useEffect(() => {
        loadplant();
    }, [id]);

    return (
        <div>
            <form className="edit-plant-form">
                <h2>Update Plant</h2>
                
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
                    <img src={image} className="img-preview" alt="Preview" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="button" onClick={updatePlant} className="edit-button">Update Plant</button>
            </form>

            <br/>

            <Link to="/">
                <button className="all-plants-button">All Plants</button>
            </Link>
            
            <Toaster />
        </div>
    );
}

export default EditPlant;
