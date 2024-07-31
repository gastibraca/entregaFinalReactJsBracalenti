import React, { useState } from 'react';

const Item = ({ producto }) => {
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador((prevContador) => prevContador + 1);
    };

    return (
        <div className="Item" key={producto.id}>
            <img src={producto.imagen} width={200} alt="" />
            <p>{producto.nombre}</p>
            <p>{producto.descripcion}</p>
            <p>stock: {producto.stock}</p>
            <p>${producto.precio}</p>
            <button className="botCompra" onClick={handleClick}>AGREGAR</button>
        </div>
    );
};

export default Item;



