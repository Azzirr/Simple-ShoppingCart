import React, { useState } from 'react';
import data from '../products';
export default function Product(props){
    const {product, onAdd} = props;
    // TO DO! Delete item funcionality!
    const [btnState, setBtnState] = useState(false);
    const [off, setOff] = useState(false)
    function handleClick(event){
        event.preventDefault();
        setBtnState(btnState => !btnState)
        setOff(!off)
    }
    let toggleClassCheck = btnState ? ' active' : null;
    return (
    <div>
        <div>
            <ul>
                <h3 className={`button${toggleClassCheck}`}>{product.name}</h3>
            </ul>
            <div>
                <button onClick={() => onAdd(product)} onContextMenu={handleClick} disabled={off}>Add to cart</button>
            </div>
        </div>
    </div>
    )
}