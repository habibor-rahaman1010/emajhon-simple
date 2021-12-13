import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        const URl = `./fakeData/products.JSON`;
        fetch(URl)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setDisplayProducts(data);
            })
    }, [])

    //load local stroage data here....
    useEffect(() => {
        const saveCard = getStoredCart()
        const storedCart = [];
        if (products.length) {
            for (const key in saveCard) {
                if (Object.hasOwnProperty.call(saveCard, key)) {
                    const keys = key;
                    const addedProduct = products.find(product => product.key === keys);
                    if (addedProduct) {
                        const quantity = saveCard[key];
                        addedProduct.quantity = quantity;
                        storedCart.push(addedProduct);
                    }
                }
                setCart(storedCart);
            }
        }
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
    }

    //search functionality here....
    const handleSearch = (event) => {
        const searchText = event.target.value;
        const matchedProduct = products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProduct);
    }

    return (
        [
            <div className='search-container'>
                <input onChange={handleSearch} type="text" placeholder='Search Your Product!' />
            </div>,

            <div className='shop-container'>
                <div className='product-container'>
                    <h3>This is shopping website... </h3>
                    <h3>Products: {displayProducts.length}</h3>
                    {
                        displayProducts.map((product) => <Product data={product} handleAddToCart={handleAddToCart} key={product.key}></Product>)
                    }
                </div>

                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        ]
    );
};

export default Shop;