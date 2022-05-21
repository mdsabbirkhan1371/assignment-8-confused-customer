import React from 'react';
import './Cart.css'
const Cart = (props) => {

    const { cart } = props;
    return (

        <li>{cart.name}</li>

    );

};

export default Cart;