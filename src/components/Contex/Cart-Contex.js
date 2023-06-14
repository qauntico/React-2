import React from "react";

const  CartContex = React.createContext({
    items: [],
    amount: 0,
});

export default CartContex;