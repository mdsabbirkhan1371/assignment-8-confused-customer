import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css'
const Product = (props) => {

    const { addToCart } = props;
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
            <button onClick={() => addToCart(props.product)} className='button'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} className="btn-icon"></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;