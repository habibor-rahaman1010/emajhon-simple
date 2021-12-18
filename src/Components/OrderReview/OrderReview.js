import React from 'react';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import useCart from '../../hooks/useCart';
import Review from '../Review/Review';
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemove = (key) => {
        const newCart = cart.filter((product) => product.key !== key)
        setCart(newCart);
        removeFromDb(key);
    }

    return (
        [
            <div>
                <div className='shop-container'>
                    <div className='product-container'>
                        <h3>This is your shopping products details here... </h3>
                        {
                            cart.map((details) => <Review details={details} key={details.key} handleRemove={handleRemove}></Review>)
                        }
                    </div>

                    <div>
                        <Cart cart={cart} key={cart[0]?.key}></Cart>
                    </div>
                </div>
            </div>
        ]
    );
};

export default OrderReview;