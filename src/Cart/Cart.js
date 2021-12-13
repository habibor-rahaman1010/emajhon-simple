import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    //total price calculate here...
    let total = 0;
    let totalQuantity = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];

        //defualt value set of product quantit
        // if (!product.quantity) {
        //     product.quantity = 1
        // }
        product.quantity = !product.quantity ? 1 : product.quantity //this is shorcut wayt to up condition..
        total += product.price * product.quantity;
        totalQuantity += product.quantity;

    }

    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Item Ordered : {totalQuantity}</h3>
            <h3>Total: {total.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;