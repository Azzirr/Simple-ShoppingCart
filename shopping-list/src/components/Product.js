import React from 'react';
export default function Product(props){
    const {product, onAdd} = props;
    return (
    <div>
        <div>
            <h3>{product.name}</h3>
        </div>
        <div>
            <button onClick={onAdd}>Add to cart</button>
        </div>
    </div>
    )
}