import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>Name:{name}</h3>
                <p>Price: ${price}</p>
                <p>Brand: {seller}</p>
                <small><p>Ratings: {ratings} stars</p></small>
            </div>
        </div>
    );
};

export default Product;