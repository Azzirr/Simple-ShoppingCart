import './App.css';
import Header from './components/Header'
import List from './components/List'
import Cart from './components/Cart'
import data from './products';
import { useState } from 'react';


function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const itemExist = cartItems.find((element) => element.id === product.id);
    if(itemExist){
      setCartItems(cartItems.map((element) => 
      element.id === product.id ? {...itemExist, quantity: itemExist.quantity + 1 } : element
      )
      );
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  };
  
  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>
      {/* shopping list and cart */}
      <div className='row'>
        <List onAdd={onAdd} products={products}></List>
        <Cart onAdd={onAdd} cartItems={cartItems}></Cart>
      </div>
    </div>
  );
}

export default App;
