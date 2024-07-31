import "./itemListContainer.css"
import React from 'react'
import { useParams } from "react-router-dom"
import db from "../../db/db.js"
import { collection,getDocs } from "firebase/firestore"
import { useState, useEffect } from 'react'
import ItemList from './itemlist.jsx'



const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos()
            .then((respuesta) => {
                console.log(respuesta);
                setProductos(respuesta);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Finalizó la promesa");
            });
    }, []);

    return (
        <div>
            <p className="subTitle">{saludo}</p>
            <ItemList className="itemListContainer" productos={productos} />
        </div>
    );
};

const obtenerProductos = async () => {
    const productosRef = collection(db, "productos");
    const respuesta = await getDocs(productosRef);
    const data = respuesta.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
    });
    return data;
};




export default ItemListContainer