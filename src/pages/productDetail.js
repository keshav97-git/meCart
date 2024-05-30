import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductDetail({ products }) {
  const { productId } = useParams();
  const { handleClick } = useContext(CartContext);

  const newArr = products.find((item) => item.id == productId);
  console.log(newArr);
  return (
    <div>
      <h1>Product Details</h1>
      <h3
        style={{
          border: "2px solid orange",
          margin: "10px",
          padding: "10px",
        }}
      >
        {newArr.name} INR {newArr.price}
      </h3>
      <button onClick={() => handleClick(newArr)}>Add to Cart</button>
    </div>
  );
}
