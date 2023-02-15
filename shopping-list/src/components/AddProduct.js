import data from '../products.js'
import React, {useState} from 'react';
export default function AddProduct(props){
    const [newName, setName] = useState('')
    const [newCategory, setCategory] = useState('')
    const [checked, setChecked] = useState(false);
    function getName(event){
        setName(event.target.value)
    }
    function getCategory(event){
        setCategory(event.target.value)
    }
    const handleChange = () => { 
      setChecked(!checked);
    };
    function addItem(){
        function getNextId(){
            let newID = data.products.slice(-1)[0].id;
            // converting to number and adding 1 to get new ID
            newID = +newID + 1;
            newID = newID.toString();
            return newID;
        }
        let id = getNextId();
        let name = newName;
        let category = newCategory;
        if(checked === true){
            category = 'food'
        } else {
            category = newCategory;
        }
        const newProduct = {id: id, name: name, category: category};

        props.addProductToList(newProduct)
        data.products.push(newProduct);

        console.log(data);
        
    }
    return(
        <div>
            <div>
                <input type="text" placeholder="Type name" onChange={getName}></input>
            </div>
            <div>
                <input id="1" type="text" onChange={getCategory} disabled={checked}></input>
            </div>
            <div className='row2'>
                <input type="checkbox" onChange={handleChange}></input>
                <p>Is food?</p>
            </div>
            <div>
                <button onClick={addItem}>Add</button>
            </div>
        </div>
    )
}