import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const API = `./fakeData/products.json`;
        fetch(API)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [])
    return [products];
}

export default useProducts;