export default function FilterProduct(props){
    function onFilterValueChanged(event){
        props.filterValueSelected(event.target.value)
    }
    return(
        <div>
            <select onChange={onFilterValueChanged}>
                <option value='all'>All</option>
                <option value='animals'>Animals</option>
                <option value='food'>Food</option>
                <option value='guns'>Guns</option>
            </select>
            <div className='row2'>
                <input value="food" type="checkbox" onChange={onFilterValueChanged}></input>
                <p>Is food?</p>
            </div>
            <div>
                <input type="text" placeholder="Search for items"></input>
            </div>
        </div>
    )
}