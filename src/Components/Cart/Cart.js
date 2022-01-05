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
    const shipping = total > 0 ? 50 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div className='mt-3'>
            <h3 className='text-success'>Order Summary</h3>
            <h5>Item Ordered : {totalQuantity}</h5>
            <h5>Total: {total.toFixed(2)}</h5>
            <h5>Tax: {tax.toFixed(2)}</h5>
            <h5>Shipping: {shipping.toFixed(2)}</h5>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
            {props.children}
        </div>
    );
};

export default Cart;