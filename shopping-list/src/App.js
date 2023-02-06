import './App.css';
import Header from './components/Header'
import List from './components/List'
import Cart from './components/Cart'
import data from './products';
import { useState } from 'react';
import FilterProduct from './components/FilterProduct';


function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  let [newProductList, updateProductList] = useState(products);
  let [filterTextValue, updateFilterText] = useState('all');
  let filteredProductList = newProductList.filter((product) => {
    if(filterTextValue === 'animals'){
      return product.category === true;
    } else if(filterTextValue === 'guns'){
      return product.category === true;
    } else if(filterTextValue === 'food'){
      return product.category === true;
    } else {
      return product;
    }
  })

  const onAdd = (product) => {
    const itemExist = cartItems.find((element) => element.id === product.id);
    if(itemExist){
      setCartItems(cartItems.map((element) => {
          return element.id === product.id ? {...itemExist, quantity: itemExist.quantity + 1 } : element
      }
      )
      );
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  };

  const onOdd = (product) => {
    const itemExist = cartItems.find((element) => element.id === product.id);
    if(itemExist.quantity === 1){
      setCartItems(cartItems.filter((element) => element.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((element) => {
          return element.id === product.id ? {...itemExist, quantity: itemExist.quantity - 1 } : element
        })
      )
    }
  }

  function onFilterValueSelected(filterValue){
    updateFilterText(filterValue)
  }
  
  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>
      {/* shopping list and cart */}
      <div className='row'>
        <List onAdd={onAdd} products={products}></List>
        <Cart onAdd={onAdd} onOdd={onOdd} cartItems={cartItems}></Cart>
      </div>
      <div className='blockLook'>
        <FilterProduct filterValueSelected={onFilterValueSelected}></FilterProduct>
      </div>
    </div>
  );
}

export default App;
