import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../data'; 
import "./productview.css";

function Productview() {
    const { id } = useParams();
    const selectedProduct = Products.find((productObj) => productObj.id == id);

    return (
        <div className="container">
            <div className="product-detail">
                <img src={selectedProduct.image} className="product-img" alt={selectedProduct.name} />
                <div className="product-info">
                    <h1 className="product-name">{selectedProduct.name}</h1>
                    <p className='price'>Price : <span className="product-price">${selectedProduct.price}</span></p>
                    <p className="product-description">{selectedProduct.description}</p>
                    <div className="product-meta">
                        <p className="product-category">Category: {selectedProduct.category}</p>
                        <p className="product-rating">Rating: {selectedProduct.rating}⭐</p>
                    </div>
                </div>
                <div className="product-actions">
                        <button className="btn buy-now">Buy Now</button>
                        <button className="btn add-to-cart">Add to Cart</button>
                    </div>
            </div>
        </div>
    );
}

export default Productview;
