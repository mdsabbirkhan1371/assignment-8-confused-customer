import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Queston from '../Question/Queston';
import('./Shop.css')
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <div className='cart'>
                    <h2>Selcted Watches</h2>
                    {cart.map(singleCart => <Cart key={singleCart.id} cart={singleCart}></Cart>)}
                    <button className='btn'><p>Chose One For Me</p></button>
                </div>
            </div>
            <Queston></Queston>
        </div>



    )
}

export default Shop;