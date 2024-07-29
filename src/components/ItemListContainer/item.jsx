import db from "../../db/db"

const Item = ({producto}) =>{
    return(
        <div className="Item" key={producto.id}>
            <img src={producto.imagen} width={200} alt="" />
            <p>{producto.nombre}</p>
            <p>${producto.precio}</p>
        </div>
    )
}

export default Item