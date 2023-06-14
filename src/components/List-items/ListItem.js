import React,{useContext} from "react";
import classes from './ListItem.module.css'
import Form from "../Gui/Form";
import CartContex from "../Contex/Cart-Contex";
export default function ListItems(props) {
    const data = useContext(CartContex);
    function TotalItem(amount){
        const item = {
            id: props.id,
            name:props.name,
            description: props.description,
            price: props.price,
            amount: amount
            
        };
        data.add(item)

    }
    //each form item is already being rendered with the button so clicking on button it will know where the click came from 
    return <li className={classes.display}>
            <p className={classes.name}>{props.name}</p>
            <p>{props.description}</p>
            <p className={classes.amount}>${props.price}</p>
            <Form amount={TotalItem} />
        </li>
};