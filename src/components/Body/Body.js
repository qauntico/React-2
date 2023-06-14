import React from "react";
import classes from './Body.module.css'

function Body(){
    return <>
        <div className={classes.container}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and
                of course by experienced chefs!
            </p> 
        </div>
    </>
}

export default Body;