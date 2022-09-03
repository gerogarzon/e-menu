import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const URL = process.env.REACT_APP_URL;

/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {

  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  

  

  const getProductsCart = async () => {
    return await axios
      .get(`${URL}/api/menusCart`)
      .then(({ data }) => setCartItems(data.menusCart))
      .catch((error) => console.error(error));     
  };

  useEffect(() => {  
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {
    const { title, picture, price } = product;
     await axios.post(`${URL}/api/menusCart`, {
      title,
      picture,
      price,
    }).then(Swal.fire({
      title: "Agregado!",
      icon: "success",
      showConfirmButton: false,
      timer: 600,}
    )); 
    getProductsCart();
  };

  const editItemToCart = async (menuId, query, amount) => {
    if (query === "del" && amount === 1) {
      await axios
        .delete(`${URL}/api/menusCart/${menuId}`)
        .then(({ data }) => console.log(data));
    } else {
      await axios
        .put(`${URL}/api/menusCart/${menuId}?query=${query}`, {
          amount,
        })
        .then(({ data }) => console.log(data));
    }    
    getProductsCart();
  };

  const cleanCart = () => {
    setCartItems(0);
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isAdmin");
    getProductsCart();
  }

  return (
    
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades
     que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, addItemToCart, editItemToCart, cleanCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
