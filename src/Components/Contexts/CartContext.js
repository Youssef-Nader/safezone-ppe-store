import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(()=>{
        const cartSave = localStorage.getItem("cart");
        if(cartSave)
            return JSON.parse(cartSave);
        else 
            return [];
    });

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    // Add products to cart
    const addToCart = (product, quantity = 1) => {
        setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
            return prev.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            );
        }
        return [...prev, { ...product, quantity }];
        });
    };

     // Update Quantity of each product
    const updateQuantity = (prodId, newQuantity) => {
        setCart((prev) => {
            return prev.map((item)=>{
                if(item.id === prodId) {
                    return { ...item , quantity: Math.max(1, newQuantity)}
                }
                else {
                    return item
                }
            })
        })
    }
    

     // Delete Product from cart
    const deleteProduct = (prodId) =>{
        setCart((prev) => {
            return prev.filter((item)=>{
                return item.id !== prodId;
            })
        })
    }
    
    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, deleteProduct }}>
        {children}
        </CartContext.Provider>
    );
}
