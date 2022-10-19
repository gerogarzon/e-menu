import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const URL = process.env.REACT_APP_URL;

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const getProductsCart = async () => {
    return await axios
      .get(`${URL}/api/menusCart`)
      .then(({ data }) => setCartItems(data.menusCart))
  };

  useEffect(() => {
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {
    const { title, picture, price } = product;
    await axios
      .post(`${URL}/api/menusCart`, {
        title,
        picture,
        price,
      })
      .then(
        Swal.fire({
          title: "Agregado!",
          icon: "success",
          showConfirmButton: false,
          timer: 600,
        })
      );
    getProductsCart();
  };

  const editItemToCart = async (menuId, query, amount) => {
    if (query === "del" && amount === 1) {
      Swal.fire({
        title: "Eliminado!",
        icon: "error",
        showConfirmButton: false,
        timer: 400,
      })
      await axios
        .delete(`${URL}/api/menusCart/${menuId}`)
    } else {
      Swal.fire({
        title: "Ok!",
        icon: "success",
        showConfirmButton: false,
        timer: 400,
      })
      await axios
        .put(`${URL}/api/menusCart/${menuId}?query=${query}`, {
          amount,
        })
    }
    getProductsCart();
  };

  const cleanCart = () => {
    setCartItems(0);
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isAdmin");
    const userRole = JSON.parse(localStorage.getItem("userRole"));
    if (userRole === "ADMIN_ROLE") {
      localStorage.removeItem("userRole");
    }
    getProductsCart();
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, editItemToCart, cleanCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
