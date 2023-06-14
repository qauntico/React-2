import classes from './Form.module.css';
import { useRef } from 'react';

export default function Form(props) {
    const numberInputRef = useRef();
    function getAmount(e){
        e.preventDefault();
        const inputValue = numberInputRef.current.value;
        if(!inputValue){
            return
        }
        props.amount(inputValue);
        numberInputRef.current.value = '';

    };
    return (
            <div>
                <form className={classes.container} onSubmit={getAmount}>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" min="1" max="5" id="amount" ref={numberInputRef}/><br/>
                    <button type="submit" >+ Add</button>
                </form>
            </div>
    )
}