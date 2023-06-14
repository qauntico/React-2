import React, { useReducer } from "react";
import CartContex from "./Cart-Contex";
const initialItems = {
    items: [],
    totalAmount: 0
  };

const reducer = (state, action) => {
  if (action.type === "ADD") {
    const newItem = action.item;
    const status = state.items.find(result => result.id === newItem.id);
    if (status){
        const update = state.items.map(result => result.id === newItem.id ? {...result, amount: Number(result.amount) + Number(newItem.amount)}: result)
        return  {
            items: update,
            totalAmount:0
        }
    }
    const addItem = state.items.concat(newItem);
        return {
            items: addItem,
            totalAmount: 0
        }       
  }else if(action.type === "QAUNTITY"){
        const quantity = state.items.map(item => item.id === action.id ? {...item, amount: Number(item.amount) + 1}: item)
        return {
          items: quantity,
          totalAmount: 0
        }
  }else {
      const newArray = state.items.filter((item,id) => item.id !== action.id)
      return {
        items: newArray,
        totalAmount: 0
      }
  }
};

  


export default function CartProvider(props) {
  const [cartState, dispatch] = useReducer(reducer,initialItems);

  function AddItem(item) {
    dispatch({ type: "ADD", item: item });
  }

  function RemoveItem(id) {
    dispatch({ type: "REMOVE", id: id });
  }
  function Qauntity(id) {
    dispatch({type: "QAUNTITY", id: id})
  }

  const cartContext = {
    items: cartState.items, 
    amount: cartState.totalAmount,
    add: AddItem,
    remove: RemoveItem,
    increment: Qauntity
  };

  return (
    <CartContex.Provider value={cartContext}>
      {props.children}
    </CartContex.Provider>
  );
}
