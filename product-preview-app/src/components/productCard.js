//rfce
import React from 'react';
import { Link } from 'react-router-dom';
import "./productCard.css";

function ProductCard({ id, name, price, image }) {
    return (
        <Link className="product-container" to={`/product/${id}`}>
            <div className="product-card">
                <img src={image} alt={name} className="product-img" />
                <div className="product-details">
                    <h2 className="product-name">{name}</h2>
                    <p className="product-price">${price}</p>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
