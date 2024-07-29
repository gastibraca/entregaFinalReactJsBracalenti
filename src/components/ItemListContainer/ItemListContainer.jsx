import "./itemListContainer.css"
import React from 'react'
import { obtenerProductos } from '../data.js'
import { useState, useEffect } from 'react'
import ItemList from './itemlist.jsx'
import db from "../../db/db.js"

const ItemListContainer = ({saludo}) => {
    const [productos, setProductos] = useState([]);
    useEffect(() =>{
        obtenerProductos()
.then((respuesta)=>{
    console.log(respuesta)
    setProductos(respuesta);
})
.catch ((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Finalizo la promesa")
});
    }, []);

    return (
        <div>
            <p>{saludo}</p>
            <ItemList classname="itemList" productos = {productos} />
        </div>
    )
}



export default ItemListContainer