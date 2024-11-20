import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeitem } from "../utils/cartSlice";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch()

  const handleDelete = (deleteitem) => {
    dispatch(removeitem(deleteitem))

    // const updatedCart = cartitems.filter(item =>item.name !== deleteitem.name);
    // console.log(updatedCart)
    // setCart(updatedCart)

  }
  const calculateTotal = (cartitems) => {
    return cartitems.reduce((total, item) => total + item.price, 0);
  };
    return (
    <div className="cartcontainer">
      <h2>Shopping Cart</h2>
      {cartitems.length > 0 ? (
        <>
          {cartitems.map((item) => (
            <div className="cartdiv" key={item.id}>
              <img className="cartimg" src={item.imageURL} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <h4>Rs {item.price}</h4>
              </div>
              <button
                className="deletebtn"
                onClick={() => handleDelete(item)}
              >
                Delete
              </button>
            </div>
          ))}
          <div className="totaldiv">
            <h4>
              Total Amount <span>Rs {calculateTotal(cartitems)}</span>
            </h4>
          </div>
        </>
      ) : (
        <h4>Your cart is empty!</h4>
      )}
    </div>
  );
};

export default Cart;
