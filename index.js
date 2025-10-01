import { obtenerProductos } from "./funciones/funciones.js";

const argumentos = process.argv.slice(2);
console.log(argumentos);

if (argumentos[0] == "GET" && argumentos[1] == "products") { // con == es el contenido con === es el contenido y el tipo de dato
    console.log("obtener productos")
    obtenerProductos()  
}
else if (argumentos[0] == "GET" && argumentos[1].includes("/products/")) {
    obtenerProductos(argumentos[1])
} 
else if (argumentos[0] == "POST" && argumentos[1].lenght>0 && argumentos[2].lenght > 0 && argumentos[3].lenght > 0 ){
    console.log("comando no reconocido")
}
