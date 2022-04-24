import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useState,useEffect } from 'react';
import { obtenerProductos,obtenerProductoXId } from '../services/productosService'

export default function CustomCarruzel() {

    const [data, setdata] = useState([]);
    const [aleatorio,setAleatorio] = useState();

    const [img, setImg] = useState([]);




    const showData = async()=>{
        try{
            let obtenData = await obtenerProductos();
            setdata(obtenData);

/*             for (let index = 0; index <=3; index++) {
                let imgaenPorObtener = await obtenerProductoXId(id);
                setImg(imgaenPorObtener.data);
            }

 */
            console.log("data de carruzel",data);
        }catch(err){
            console.log("Error")
        }
    }



    const getImagen = async()=>{
        try{
            for (let index = 1; index <= 3; index++) {
                const aleatorio = Math.floor(Math.random() * ((data.length-1)-0));
                let productoObtenido = await obtenerProductoXId(aleatorio);
                setImg(productoObtenido.data)
            }        
             /* se pasa 
            como parametro el useParams */
            /*termina de cargar los datos */
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        showData();
        getImagen();
     }, []);

     console.log(data, "datos carru");
     console.log(img, "imagen")


  return (
    <div style={{
        width:"300px",
        height: "300px",
        margin:"auto"
    }}>
    <Carousel>
        {}
        {img.map((prod,key)=>(
        <Carousel.Item key={key}>
        <img
            className="d-block w-100 h-100"
            src={prod.pro_imagen}
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        ))}
    </Carousel>
    </div>
  )
}
