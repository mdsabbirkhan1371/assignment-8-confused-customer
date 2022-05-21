import React from 'react';
import './Cart.css'
const Cart = (props) => {

    const { cart } = props;
    return (
        <div>
            <p>{cart.name}</p>
        </div>
    );

};

export default Cart;