import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((totalPrice , product) => totalPrice + product.price, 0)
    
    let shipping = 0;
    if(totalPrice > 35){
        shipping = 0;
    }
    else if(totalPrice > 15){
        shipping = 4.99;
    }
    else if(totalPrice > 0){
        shipping = 11.99;
    }

    const tax = Math.round(totalPrice/10);
    
    return (
        <div>
            <h2>Order summary</h2>
            <p>Item orderd: {cart.length}</p>
            <p>Product price: {totalPrice}</p>
            <p>Shipping cost: ${shipping}</p>
            <p>Tax + VAT: ${tax}</p>
            <p>Total price: ${totalPrice + shipping + tax}</p>
            
        </div>
    );
};

export default Cart;