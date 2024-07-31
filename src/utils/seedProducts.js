import db from "../db/db.js";
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
    {
        id: "eq0001",
        nombre: "Campera de cuero",
        descripcion: "Campera de cuero oscura",
        stock: 10,
        categoria: "equipo",
        imagen: "https://acdn.mitiendanube.com/stores/591/146/products/1-campera-hombre-cuero-clasica-rock-napon-liam-leather1-f49d90b85ba90d830d15506126397918-640-0.jpg",
        precio: 50
    },
    {
        id: "eq0002",
        nombre: "Chaleco liviano",
        descripcion: "Chaleco resistente",
        stock: 5,
        categoria: "equipo",
        imagen: "https://http2.mlstatic.com/D_837514-MLA70759897591_072023-C.jpg",
        precio: 150
    },
    {
        id: "eq0003",
        nombre: "Armadura de placas",
        descripcion: "Set completo de armadura de acero",
        stock: 1,
        categoria: "equipo",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rustning%2C_Gustav_Vasa_-_Livrustkammaren_-_32921.tif/lossy-page1-220px-Rustning%2C_Gustav_Vasa_-_Livrustkammaren_-_32921.tif.jpg",
        precio: 10000
    },
        {
        id: "su0001",
        nombre: "Botiquin",
        descripcion: "Botiquin de primeros auxilios",
        stock: 50,
        categoria: "Un uso",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_914955-MLA50784954155_072022-O.webp",
        precio: 10
    },
    {
        id: "su0002",
        nombre: "Granada",
        descripcion: "Granada de fragmentación",
        stock: 10,
        categoria: "Un uso",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/M67b.jpg/250px-M67b.jpg",
        precio: 20
    },
    {
        id: "su0003",
        nombre: "Acetato de trenbolona",
        descripcion: "Inflate como un sapo",
        stock: 1,
        categoria: "Un uso",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrfYiR4nj7yw5DOd8x18XDR-pzbQFe9kn9Q&s",
        precio: 1000
    },
]



const seedProducts = () => {
    productos.map(({id, ...rest}) => {
        const productosRef = collection(db, "productos") 
        addDoc(productosRef, rest)
    });
    return
}

seedProducts()

