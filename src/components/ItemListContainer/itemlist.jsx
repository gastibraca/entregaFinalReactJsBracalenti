import Item from "./item.jsx"
import db from "../../db/db.js";

const ItemList = ({productos}) => {
    return (
        <div className="itemList">
                        {productos.map((producto)=>(
                            <Item key={producto.id} producto = {producto}/>
            ))}
        </div>
    )
}

export default ItemList;