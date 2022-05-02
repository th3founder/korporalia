import axios from "axios";

/* Axios es la libreria para realizar peticiones */

const URL = `${process.env.REACT_APP_API_URL}/productos`
/* el env es un objeto que va a ayudar a acceder a las variables de entorno que es lo que esta dentro de la url*/

/* para utilizar el await debemos de utilizar dentro de un bloque que sea async */

const obtenerProductos = async() =>{
    try{
       //Intenta ejecutar este bloque de codigo
       //Equivalente al .then
       //Para usar el await debe de utilizarse dentro de un bloque que sea de async
       let {data} = await axios.get(URL)
       return data

    }catch{
        //Si hay errores captura ese error
        console.log('error no data')
        console.log(URL);
    }
}


const obtenerProductoXId = async(id) =>{
    try{
        let {data} = await axios.get(`${URL}/${id}`);
        return {data}
    }catch{
        console.log('error')
        
    }
}

const obtenerImagenes = async() =>{
    try{
       //Intenta ejecutar este bloque de codigo
       //Equivalente al .then
       //Para usar el await debe de utilizarse dentro de un bloque que sea de async
       let {data} = await axios.get(URL);
       let almacen = data
       const imgs=[];
        for (let index = 0; index <=2; index++) {
            let aleatorio = Math.floor(Math.random()*((almacen.length)-0)+0);
            imgs.push(almacen[aleatorio]);
            console.log("obtener data:",imgs);
        }
       return imgs

    }catch{
        //Si hay errores captura ese error
        console.log('error no data')
        console.log(URL);
    }
}




export{
    obtenerProductos,obtenerProductoXId,obtenerImagenes   
}