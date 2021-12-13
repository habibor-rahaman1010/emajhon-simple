import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';


const Product = (props) => {
    const { name, img, price, seller, stock, star } = props.data;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
            <div>
                <img src={img} alt="product" />
            </div>
            <div className='product-right'>
                <h3>{name ? name : 'Empty Data'}</h3>
                <p>By: {seller ? seller : 'Empty Data'}</p>
                <p>Price: ${price ? price : 'Empty Data'}</p>
                <p>Only {stock} left in stock - order soon</p>

                <Rating
                    initialRating={star}
                    className='rating' readonly
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"

                ></Rating> <br />

                <button className='button' onClick={() => { props.handleAddToCart(props.data) }}> {element} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;