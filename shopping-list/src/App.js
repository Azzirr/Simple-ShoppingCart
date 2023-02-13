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
    console.log('test123dsadsadsad', filterTextValue)
    if(filterTextValue === 'all'){
      return product
    }
        // x

    
    else if(filterTextValue === 'animals'){
      return product.category.includes('animals')
    } else if(filterTextValue === 'guns'){
      return product.category.includes('guns')
    } else if(filterTextValue === 'food'){
      return product.category.includes('food')
    }
    
    else if(filterTextValue === 'Gunsy i zwierzaki'){
      return product.category.includes('guns') || product.category.includes('animals')
    }
     else if(product.name.toLowerCase().includes(filterTextValue.toLowerCase())){
      return product.name.toLowerCase().includes(filterTextValue.toLowerCase())
    } else {
      return product.category.includes[filterTextValue]

    }
  })

  const onAdd = (product) => {
    const itemExist = cartItems.find((element) => element.id === product.id);
    if(itemExist){
      setCartItems(cartItems.map((element) => {
          return element.id === product.id ? {...itemExist, quantity: itemExist.quantity + 1 } : element
      }));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  };

  const onOdd = (product, event) => {
    event.preventDefault()
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

  function onFilterValueSelected(filterValue, fromCheckbox){
    if(fromCheckbox){
      updateFilterText('Gunsy i zwierzaki')
    } else {
      updateFilterText(filterValue)
    }
  }
  console.log(filterTextValue)
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
        <FilterProduct avalibaleProducts={newProductList} filterValueSelected={onFilterValueSelected}></FilterProduct>
        <AddProduct addProductToList={(addProduct) => updateProductList([...newProductList, addProduct])}></AddProduct>
      </div>
      <input className='blockLook' type="text" placeholder="Search..." onChange={(e)=>onFilterValueSelected(e.target.value)}></input>
    </div>
  );
}

export default App;
