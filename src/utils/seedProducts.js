import db from "../db/db";
import { addDoc, collection } from "firebase/firestore";


const productos = [
    {
        id: "ar0001",
        nombre: "Bate",
        descripcion: "Bate de madera",
        stock: 10,
        categoria: "armas",
        imagen: "https://media.istockphoto.com/id/1758449433/es/foto/bate-de-b%C3%A9isbol-de-madera-sobre-fondo-gris-claro-vista-superior-equipamiento-deportivo.jpg?s=612x612&w=is&k=20&c=n4ejToBc53RNUZNQVQH7ue882OolXezcvkqpwjNeKCI=",
        precio: 100
    },
    {
        id: "ar0002",
        nombre: "Palo de golf",
        descripcion: "Driver de aluminio",
        stock: 5,
        categoria: "armas",
        imagen: "https://media.istockphoto.com/id/185104351/es/foto/hierro-golf-club.jpg?s=612x612&w=is&k=20&c=rQN05g-l2yRbjCGWm-agU0rMDt6b74qRa4z0-YDFFEk=",
        precio: 100
    },
    {
        id: "ar0003",
        nombre: "Llave inglesa",
        descripcion: "Herramienta de acero",
        stock: 10,
        categoria: "armas",
        imagen: "https://media.istockphoto.com/id/476375415/es/foto/llave-de-metal-de-llave.jpg?s=612x612&w=is&k=20&c=USOukdk44nNvmfLvW6WZlB9mACUeCwJMo0BsbW5mukU=",
        precio: 100
    },
]



const seedproducts = () => {
    productos.map[({id, ...rest}) => {
        const productosRef = collection(db, "productos")
        addDoc(productosRef, rest)
        console.log("subido")
    }];
    return 
}

seedproducts()

