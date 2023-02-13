import React from 'react';

export default function Cart(props){
    const {cartItems, onAdd, onOdd} = props;
        // x

    return(
        <div className='row blockLook'>
            <h2>Cart</h2>
            <div>{cartItems.length === 0 && <div className='row blockLook'>Cart is empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row blockLook">
                    <div className='col-2'>{item.name}</div>
                    <div className='col-2'>
                        <button onClick={() => onAdd(item)} className="add">Add</button>
                        <button onContextMenu={(event) => onOdd(item, event)} className="odd">Odd</button>
                    </div>
                    <div className='col-2'>
                        {item.quantity}
                    </div>
                </div>
            ))}
        </div>
    )
}

