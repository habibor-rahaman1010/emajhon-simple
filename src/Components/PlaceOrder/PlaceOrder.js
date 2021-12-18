import React from 'react';
import img from '../../images/giphy.gif'

const PlaceOrder = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Thank you for place ordered..</h1>
            <img src={img} alt="gift" />
        </div>
    );
};

export default PlaceOrder;