import React from 'react';
import './Review.css'

const Review = (props) => {
    const { category, key, name, img, price, wholePrice, seller, quantity } = props.details;
    return (
        <div>
            <div className='details'>
                <div>
                    <img src={img} alt="profucts" />
                </div>

                <div className='detail'>
                    <h4>{name}</h4>
                    <p>Category: {category}</p>
                    <p>Product key: {key}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Price: {price}</p>
                    <p>Whole Sell Price: {wholePrice}</p>
                    <p>Seller By: {seller}</p>
                    <button onClick={() => { props.handleRemove(key) }} className='remove-button'>Remove Item</button>
                </div>
            </div>
        </div>
    );
};

export default Review;