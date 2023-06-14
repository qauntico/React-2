import React from "react";
import classes from './Header.module.css'
import backgroundimage from '../../asserts/meals.jpg'
import CartButton from "./Cart-Button";

function CartHeader(props) {

    return  <>
            <nav className={`navbar navbar-expand-lg bg-body-tertiary ${classes.navcolor}`} >
                <div className="container">
                <a className="navbar-brand" href="#" >ReactMeals</a>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <div>
                        <CartButton modalVisible={props.modalVisible} />
                    </div>
                </div>
                </div>
            </nav>
            <div>
                <img src={backgroundimage} alt="image" className={classes['background-img']}/>
            </div>
        </>
}; 
            
   

export default CartHeader;
   