import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  // const [quantity, setQuantity] = useState(0);

  const handleClick = (item) => {
    setCart((cart) => {
      const itemExists = cart.find((pro) => pro.id == item.id);
      if (itemExists) {
        return cart.map((pro) =>
          pro.id == item.id ? { ...pro, quantity: pro.quantity + 1 } : pro
        );
      } else {
        return [...cart, { ...item, quantity: 1 }];
      }
    });
  };

  const remove = (item) => {
    setCart((cart) => {
      return cart.reduce((acc, pro) => {
        if (pro.id == item.id) {
          if (pro.quantity > 1) {
            acc.push({ ...pro, quantity: pro.quantity - 1 });
          }
        } else {
          acc.push(pro);
        }
        return acc;
      }, []);
    });
  };

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, handleClick, remove }}>
      {children}
    </CartContext.Provider>
  );
}
