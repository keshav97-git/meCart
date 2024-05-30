import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, remove } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                border: "2px solid orange",
                margin: "10px",
                paddingBottom: "5px",
                listStyle: "none",
              }}
            >
              <h3>
                {item.name} INR {item.price}
              </h3>
              <button onClick={() => remove(item)}>Remove</button>{" "}
              <span style={{ marginLeft: "10px" }}>
                {" "}
                Quantity : {item.quantity}
              </span>
            </li>
          );
        })}
      </ul>
      <h5>
        Total Price :{" "}
        {cart.reduce((total, item) => (total += item.price * item.quantity), 0)}
      </h5>
    </div>
  );
}
