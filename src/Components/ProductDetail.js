import { useContext, useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import { productsDetails } from "./Contexts/ProdcutsContext";
import { CartContext } from "./Contexts/CartContext";
import ConfirmationMessage from "./ConfrimationMessage";

function ProductDetail(){
    const [quantity, setQuantity] = useState(1);
    const {productId, categoryId} = useParams();
    const category = useContext(productsDetails);
    const {addToCart} = useContext(CartContext);
    const [message, setMessage] = useState(false)

    function handleDecrease() {
        if(quantity > 1)
            setQuantity(quantity - 1);
    }
    function handleIncrease() {
        setQuantity(quantity + 1);
    }
    
    function handleAddToCart(prod){
        addToCart(prod, quantity);
        setMessage(true)
        setTimeout(()=> setMessage(false),2000)
    }

    useEffect(()=>{
        const currentCategory = category.find((item) => String(item.id) === categoryId);
        const currentProduct = currentCategory?.products.find((item) => String(item.id) === productId);
        document.title = currentProduct
            ? `SafeZone PPE Store | ${currentProduct.name}`
            : "SafeZone PPE Store | Product";
    },[category, categoryId, productId])


    const selectedCategory = category.find((item) => String(item.id) === categoryId);
    const product = selectedCategory?.products.find((item) => String(item.id) === productId);

    if (!product) {
        return <div className="empty"><h1>Product not found</h1><p>This item may no longer be available.</p><Link to="/products">Back to products</Link></div>;
    }

    return (
        <div className="product-detail">
            <div className="product">
                <img src={product.image_url} alt={product.name} />
                <h3>{product.name}</h3>
                <h4>{product.description}</h4>
                <p>Price: <span>${product.price.toFixed(2)}</span></p>
                <div className="quantity" aria-label="Product quantity">
                    <button aria-label="Decrease quantity" onClick={handleDecrease}>−</button>
                    <span>{quantity}</span>
                    <button aria-label="Increase quantity" onClick={handleIncrease}>+</button>
                </div>
                <button className="add-cart" onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
            {message && <ConfirmationMessage/>}
        </div>
    )
}
export default ProductDetail;
