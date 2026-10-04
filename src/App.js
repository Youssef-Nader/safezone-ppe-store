import "./styles/index.css";
import {Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import Products from "./Components/Products"
import ProductDetail from "./Components/ProductDetail"
import Cart from "./Components/Cart"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer"
import NotFound from './Components/NotFound';
// Contexts
import { allCategories } from './Components/Contexts/CategoriesContext';
import { productsDetails } from './Components/Contexts/ProdcutsContext';
import { CartProvider } from './Components/Contexts/CartContext';
// import products.json file
import productsData from "./data/products.json"

function App() {
  const categories = [
        {id : 1, title : "Helmets"},
        {id : 2, title : "Gloves"},
        {id : 3, title : "Reflective Vests"},
        {id : 4, title : "Safety Shoes"},
        {id : 5, title : "First Aid Kits"},
        {id : 6, title : "Goggles"},
    ]
  return (
    <CartProvider>
      <Navbar/>
      <main>
        <allCategories.Provider value={categories}>
          <productsDetails.Provider value = {productsData.categories} >
              <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/category/:categoryId" element={<Products/>}/>
                <Route path ="/products/category/:categoryId/:productId" element = {<ProductDetail/>} />
                <Route path ="/cart" element = {<Cart/>} />
                <Route path ="/login" element = {<Login/>} />
                <Route path ="/register" element = {<Register/>} />
                <Route path='*' element = {<NotFound />} />
              </Routes>
          </productsDetails.Provider>
        </allCategories.Provider>
      </main>
      <Footer/>
    </CartProvider>
  );
}

export default App;
