import React, { useState } from 'react';
import data from '../products';
export default function Product(props){
    const {product, onAdd} = props;
    const {style, setStyle} = useState()
    // TO DO! Delete item funcionality!
    function deleteItem(event){
        event.preventDefault()
        setStyle({"text-decoration": `${product.name === "Beer" ? "line-through" : "auto" }`})
    }
    return (
    <div>
        <div>
            <ul>
                <h3 style={style}>{product.name}</h3>
            </ul>
            <div>
                <button onClick={() => onAdd(product)} onContextMenu={deleteItem}>Add to cart</button>
            </div>
        </div>
    </div>
    )
}