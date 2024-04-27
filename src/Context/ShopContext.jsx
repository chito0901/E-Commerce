import {createContext, useState} from "react";
import allProducts from '../Components/Assets/AllProducts.js'
import similarProducts from '../Components/Assets/SimilarProducts.js'
import dataArrivals from '../Components/Assets/NewArrivals.js'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let listedProducts = [...allProducts, ...similarProducts, ...dataArrivals];
    let cart = {};
    for (let index = 0; index <listedProducts.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const getDefaultFave = () => {
    let listedProducts = [...allProducts, ...similarProducts, ...dataArrivals];
    let fave = {};
    for (let index = 0; index <listedProducts.length + 1; index++) {
        fave[index] = 0;
    }
    return fave;
} 

function ShopContextProvider(props) {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [faveItems, setFaveItems] = useState(getDefaultFave());
    const [totalItem, setTotalItem] = useState(0);
    const [totalFaveItem, setTotalFaveItem] = useState(0);

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        setTotalItem(totalItem + 1);
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        setTotalItem(totalItem - 1);
    }
    
    const addToFave = (itemId) => {
        setFaveItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        setTotalFaveItem(totalFaveItem + 1);
        console.log(totalFaveItem)
    }
    const removeFromFave = (itemId) => {
        setFaveItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        setTotalFaveItem(totalFaveItem - 1);
        console.log(totalFaveItem)
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let listedProducts = [...allProducts, ...similarProducts, ...dataArrivals];
                let itemInfo = listedProducts.find((product) => product.id === Number(item))
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems)
        {
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const getTotalFaveItems = () => {
        let totalFaveItem = 0;
        for (const item in faveItems)
        {
            if(faveItems[item]>0){
                totalFaveItem += faveItems[item];
            }
        }
        return totalFaveItem;
    }
    
    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        getTotalFaveItems,        
        allProducts,
        similarProducts,
        dataArrivals, 
        cartItems,
        faveItems,
        addToCart,
        removeFromCart,
        addToFave,
        removeFromFave,
        totalItem,
        totalFaveItem};
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;