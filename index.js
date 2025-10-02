import { obtenerProductos,obtenerProducto, agregarProducto , eliminarProducto} from "./funciones/funciones.js";

const argumentos = process.argv.slice(2);
console.log("argumentos",argumentos);
console.log("Argumentos 1",argumentos[1]);
console.log("largo de argumento 1 = ",argumentos.length)

if (argumentos[0] == "GET" && argumentos[1] == "products") { // con == es el contenido con === es el contenido y el tipo de dato
    console.log("Entro en obtener productos")

    obtenerProductos()  
}
else if (argumentos[0] == "GET" && argumentos[1].includes("products/")) {
    console.log("obtener producto por id", argumentos[1].substr(9,2))
    obtenerProducto( argumentos[1].substr(9,2))
} 
else if (argumentos[0] == "POST" && argumentos[1] == "products" && argumentos.length == 5 ){
    console.log("agregar productos")
    const producto = {
        title: argumentos[2],
        price: argumentos[3],
        category: argumentos[4]}
    agregarProducto(producto)
}
else if (argumentos[0] == "DELETE" && argumentos[1].includes("product/") ){
    const id = argumentos[1].substr(8,2)
    console.log("eliminar dentro del if id : ", id)
    eliminarProducto(id)
}
else {
    console.log("comando no reconocido")
}

