import React, {useContext} from "react";
import classes from "./MoreItems.module.css";
import CartContex from "../Contex/Cart-Contex";
export default function MoreItems(props){
    const data = useContext(CartContex);
    
    return <li className={classes.list} >
        <div className={classes.container}>
            <div className={classes.container2}>
                <div>
                    <h1>{props.name}</h1>
                    <p className={classes.price}>${props.price}</p>
                </div>
                <div className={classes.number}>
                    <p>x{props.increase}</p>
                </div>
            </div>
            <di className={classes.btn}>
                <button className={classes.btn1}  onClick={() => data.remove(props.id)}>-</button>
                <button className={classes.btn2} onClick={() => data.increment(props.id)}>+</button>
            </di> 
            
        </div>
    </li>
}