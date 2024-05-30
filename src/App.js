import "./styles.css";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { products } from "./api/productData";
import Home from "./pages/home";
import Cart from "./pages/cart";
import { useContext } from "react";
import { CartContext } from ".";
import ProductDetail from "./pages/productDetail";
export default function App() {
  const { cart } = useContext(CartContext);
  return (
    <div className="App">
      <nav>
        <h1>myCart</h1>
        <h3>Item in the cart : {cart.length}</h3>
        <NavLink to={"/"} style={{ margin: "10px" }}>
          Home
        </NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route
          path="/product/:productId"
          element={<ProductDetail products={products} />}
        />
      </Routes>
    </div>
  );
}
