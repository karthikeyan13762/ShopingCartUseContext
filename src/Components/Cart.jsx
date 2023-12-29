import React, { createContext, useEffect, useReducer } from "react";
import "./Cart.css";

import jsonObjectArray from "./Products";
import CartContext from "./CartContext";
import { reduser } from "./reduser";

export const CreateContext = createContext();
function Cart() {
  const intialState = {
    item: jsonObjectArray,
    totalAmount: 0,
    totalItem: 0,
  };
  const [state, dispatch] = useReducer(reduser, intialState);

  const remove = (id) => {
    return dispatch({
      type: "Remove",
      payload: id,
    });
  };
  const clear = () => {
    return dispatch({
      type: "Clear",
    });
  };
  const incremunt = (id) => {
    return dispatch({
      type: "Incremunt",
      payload: id,
    });
  };
  const decrement = (id) => {
    return dispatch({
      type: "Decrement",
      payload: id,
    });
  };
  useEffect(() => {
    dispatch({ type: "Total" });
  }, [state.item]);

  return (
    <>
      <CreateContext.Provider
        value={{ ...state, remove, clear, incremunt, decrement }}
      >
        <CartContext />
      </CreateContext.Provider>
    </>
  );
}

export default Cart;
