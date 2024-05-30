import { useContext } from "react";
import { CartContext } from "..";
import { Link } from "react-router-dom";

export default function Home({ products }) {
  const { handleClick } = useContext(CartContext);
  return (
    <div>
      <ul>
        {products.map((item) => {
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
              <button onClick={() => handleClick(item)}>Add to Cart</button>
              <Link to={`/product/${item.id}`} style={{ marginLeft: "10px" }}>
                Details
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
