import React,{useContext} from "react";
import classes from './Modal.module.css';
import MoreItems from "./MoreItems";
import CartContex from "../Contex/Cart-Contex";
export default function Modal(props){
    const data = useContext(CartContex);
    return <>
        <div className={classes.overlay} onClick={props.modalNotVible}></div>
        <div className={classes.container}>
            <div className={classes.yeh}>
                <ul>
                   {data.items.map(item => <MoreItems key={item.id} id={item.id} name={item.name} price={item.price} increase={item.amount}/>)} 
                </ul>
            </div>
            <div className={classes.display}>
                <p>Total Amount</p>
                <p>$200</p>
            </div>
            <div className={classes.buttonD}>
                <button  onClick={props.modalNotVible}>Close</button>
                <button className={classes.you}>Order</button>
            </div>
        </div>
    </>
}