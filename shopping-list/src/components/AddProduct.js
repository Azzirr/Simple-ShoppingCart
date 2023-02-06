export default function AddProduct(){
    return(
        <div>
            <div>
                <input type="text" placeholder="Type name"></input>
            </div>
            <div>
                <input type="text" placeholder="Type category"></input>
            </div>
            <input type="checkbox" placeholder="Is food?"></input>
            <div>
                <button>Add</button>
            </div>
        </div>
    )
}