import React, {Component, useState} from 'react';
import data from '../products';
export default function Product(props){
    const {product, onAdd} = props;
    const [search, setSearch] = useState('')
    // TO DO! Delete item funcionality!
    function deleteItem(id){
        console.log(data.products[1]) 
    }
    return (
    <div>
        <div>
            <div>
                <ul>
                    <h3>{product.name}</h3>
                </ul>
            </div>
            <div>
                <button onClick={() => onAdd(product)} id="ButtonAdd" onContextMenu={(e) => {deleteItem()}}>Add to cart</button>
            </div>
        </div>
        <div>
            <input placeholder='Search for products' onChange={(element) => setSearch(element.target.value)}></input>
        </div>
    </div>
    )
}