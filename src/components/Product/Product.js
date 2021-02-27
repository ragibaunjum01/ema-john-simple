import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    console.log(props)
    return (
        <div className='product'>
            <div>
                <img src={props.product.img} alt=""/>
            </div>
            <div>
                <h4 className='product-name'>{props.product.name}</h4>
                <br/>
                <p><small>by: {props.product.seller}</small></p>
                <p>${props.product.price}</p>
                <br/>
                <p><small>Only {props.product.stock} left in stock</small></p>
                <button className='cart-btn' onClick = {() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;