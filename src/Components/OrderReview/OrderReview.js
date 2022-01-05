import React from 'react';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import useCart from '../../hooks/useCart';
import Review from '../Review/Review';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router-dom';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemove = (key) => {
        const newCart = cart.filter((product) => product.key !== key)
        setCart(newCart);
        removeFromDb(key);
    }
    const history = useHistory();
    const clickHandler = () => {
        history.push('/place_order');
        setCart([]);
        clearTheCart();
    }

    return (
        [
            <div>
                <div className='shop-container'>
                    <div className='product-container'>
                        <h3 className='mt-4'>This is your shopping products details here... </h3>
                        {
                            cart.map((details) => <Review details={details} key={details.key} handleRemove={handleRemove}></Review>)
                        }
                    </div>

                    <div>
                        <Cart cart={cart} key={cart[0]?.key}>
                            <button className='button' onClick={clickHandler} >Pleace Order</button>
                        </Cart>
                    </div>
                </div>
            </div>
        ]
    );
};

export default OrderReview;