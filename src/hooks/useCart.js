import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const saveCard = getStoredCart()
        const storedCart = [];
        if (products.length) {
            for (const key in saveCard) {
                if (Object.hasOwnProperty.call(saveCard, key)) {
                    const keys = key;
                    const addedProduct = products.find(product => product.key === keys);
                    if (addedProduct) {
                        //set quantity....
                        const quantity = saveCard[key];
                        addedProduct.quantity = quantity;
                        storedCart.push(addedProduct);
                    }
                }
                setCart(storedCart);
            }
        }
    }, [products])
    return [cart, setCart];
}

export default useCart