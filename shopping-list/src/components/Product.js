import React from 'react';
import data from '../products';
export default function Product(props){
    const {product, onAdd} = props;
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
    </div>
    )
}