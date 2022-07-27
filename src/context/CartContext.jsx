import { createContext, useEffect, useState } from "react";
import axios from "axios";

/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {

  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);

  const getProductsCart = async () => {

    return await axios
      .get("http://localhost:3100/api/menusCart")
      .then(({ data }) => setCartItems(data.menusCart))
      .catch((error) => console.error(error));
     
  };

  useEffect(() => {  
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {
    const { title, picture, price } = product;
    console.log("add:", product);
    await axios.post("http://localhost:3100/api/menusCart", {
      title,
      picture,
      price,
    });  
    getProductsCart();
  };

  const editItemToCart = async (menuId, query, amount) => {
    if (query === "del" && amount === 1) {
      await axios
        .delete(`http://localhost:3100/api/menusCart/${menuId}`)
        .then(({ data }) => console.log(data));
    } else {
      await axios
        .put(`http://localhost:3100/api/menusCart/${menuId}?query=${query}`, {
          amount,
        })
        .then(({ data }) => console.log(data));
    }    
    getProductsCart();
  };

  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, addItemToCart, editItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
