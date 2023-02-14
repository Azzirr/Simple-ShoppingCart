import { useState } from "react";
export default function FilterProduct(props){
    const [shouldDisabled, setShouldDisabled] = useState('')
    function onFilterValueChanged(event){
        if(event.target.name === 'test' && event.target.checked){
            setShouldDisabled(true)
        } else {
            setShouldDisabled(false)
        }
        props.filterValueSelected(event.target.value, event.target.name === 'test' && event.target.checked)

    }
    let uniqueCategories = [...new Set (props.avalibaleProducts.map((element) => element.category))]

    let categories = uniqueCategories.map((element) => ({value: element, name: element}))
  
    return(
        <div>
            {/* <select onChange={onFilterValueChanged}>
                <option value='all'>All</option>
                <option value='animals'>Animals</option>
                <option value='food'>Food</option>
                <option value='guns'>Guns</option>
            </select> */}
            <select onChange={onFilterValueChanged} disabled={shouldDisabled}>
                <option value="all">Select</option>
                {categories.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
            </select>
            <div className='row2'>
                <input name="test" value="all" type="checkbox" onChange={onFilterValueChanged}></input>
                <p>Animal or gun</p>
            </div>
        </div>
    )
}