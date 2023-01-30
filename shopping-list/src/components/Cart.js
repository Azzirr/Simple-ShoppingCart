import React from 'react';

export default function Cart(props){
    const {cartItems, onAdd, onOdd} = props;
    return(
        <div className='row'>
            <h2>Cart</h2>
            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div>{item.name}</div>
                    <div>
                        <button onClick={() => onAdd(item)} className="add">Add</button>
                        <button onClick={() => onOdd(item)} className="odd">Odd</button>
                    </div>
                    <div>
                        {item.quantity}
                    </div>
                </div>
            ))}
        </div>
    )
}

