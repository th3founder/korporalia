
import React from 'react'
import { useParams } from 'react-router-dom' /* se usa en el cazo de que la url para acceder a este componente tenga mas parametros */
/* Gracias a useParams nos permitira devolver el ID */
import { useState,useEffect } from 'react'
import { obtenerProductoXId } from "../services/productosService";
import Loading from '../components/Loading';


export default function ProductoView(){

    const [producto, setProduct] = useState({});
    const [load, setLoad] = useState(true);
    const {id} = useParams();

    

    const getProducto = async()=>{
        try{
            
            let productoObtenido = await obtenerProductoXId(id); /* se pasa como parametro el useParams */
            console.log(id,"Este es el id");
            console.log(producto);
            console.log(productoObtenido, "este es de la funcion del otro arcchivo");
            setProduct(productoObtenido);
            console.log("Este es el use state",producto);
            setLoad(false);
            /*termina de cargar los datos */

        }catch{
            
            console.log("Error");
        }
    }

    useEffect(()=>{
        getProducto();
    }, [])
    
/* Es una funcion que se va a ejecutar en el montaje */

  return (
    <div>
        {load ? (<Loading/>): (
            
        <div>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-6 col-lg-3'> 
                        <div>
                            <img src={producto.prod_imagen} alt={producto.prod_imagen} className='card-img-top'>

                            </img>
                        </div>
                        <div className='card-body'>
                            <h6 className='card-title'>{producto.prod_nombre}ss</h6>
                        </div>
                        <span className='fw-bold'>{producto.prod_precio}</span>
                    </div>
                </div>
            </div>

        </div>
        )}
        {/* pregunta ?, si es verdad: si es falso */}
    </div>
  )

}
