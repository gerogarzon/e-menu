import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import  "./cartItemsStyles.scss";

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { editItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item;

  return (
    <div className="cartItem">
      <img src={item.picture} alt={item.title} className="cartitemImg"/>
      <div className="dataContainer">
        <div className="left">
          <p>{item.title}</p>
          <div className="buttons">
            <button onClick={() => editItemToCart(item._id, "add", amount)}>
              +
            </button>
            <button onClick={() => editItemToCart(item._id, "del", amount)}>
              -
            </button>
          </div>
        </div>
        <div className="right">
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};
