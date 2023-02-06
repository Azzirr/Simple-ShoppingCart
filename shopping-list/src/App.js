import './App.css';
import Header from './components/Header'
import List from './components/List'
import Cart from './components/Cart'
import data from './products';
import { useState } from 'react';
import FilterProduct from './components/FilterProduct';
import AddProduct from './components/AddProduct';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [newProductList, updateProductList] = useState(data.products);
  const [filterTextValue, updateFilterText] = useState('all');
  const filteredProductList = newProductList.filter((product) => {
    if(filterTextValue === 'all'){
      return product
    } else if(filterTextValue === 'animals'){
      return product.category.includes('animals')
    } else if(filterTextValue === 'guns'){
      return product.category.includes('guns')
    } else if(filterTextValue === 'food'){
      return product.category.includes('food')
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
      <div className='row blockLook'>
        <List onAdd={onAdd} products={filteredProductList}></List>
        <Cart onAdd={onAdd} onOdd={onOdd} cartItems={cartItems}></Cart>
      </div>
      <div className='blockLook row'>
        <FilterProduct filterValueSelected={onFilterValueSelected}></FilterProduct>
        <AddProduct></AddProduct>
      </div>
    </div>
  );
}

export default App;
