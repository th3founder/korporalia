
import React from 'react'
import { useParams } from 'react-router-dom' /* se usa en el cazo de que la url para acceder a este componente tenga mas parametros */
/* Gracias a useParams nos permitira devolver el ID */
import Loading from '../components/Loading';
import { useState,useEffect,useContext } from 'react'
import { obtenerProductoXId } from "../services/productosService";
import {CarritoContext} from '../Context/carritoContext';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom' /* Es como el link: to, redirige */


export default function ProductoView(){

    const [producto, setProduct] = useState([]);
    const [load, setLoad] = useState(true);
    const {id} = useParams();
    const navigate = useNavigate();

    const {anadirACarrito} = useContext(CarritoContext);/* Estamos accediendo a un estado global */
    /* Cuando se use un useContext la variable a almacenarlo debe ir entre parentesis */
    
    console.log(anadirACarrito);


    const getProducto = async()=>{
        try{
            let productoObtenido = await obtenerProductoXId(id);
            setLoad(false)
            setProduct(productoObtenido.data);
        
             /* se pasa 
            como parametro el useParams */
            /*termina de cargar los datos */
        }catch(err){
            console.log(err)
        }
    }

    const anadirACarritoContext = () =>{
        anadirACarrito(producto)

        const resultadoAgregar = Swal.fire({ 
            /* Lanza mensaje cuando se agrega algo al carrito */
            icon:'success',
            title:'Producto añadido',
            showConfirmButton:true,
            showDenyButton:true,
            confirmButtonText:'Seguir comprando',
            denyButtonText:'Ir a carrito'
        }).then((resultado)=>{ /* Aqui redirigimos a los sitios */
            if(resultado.isConfirmed){
                navigate('/')
            }else if(resultado.isDenied){
                navigate('/carrito')
            }
        })
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
                    <h2>{producto.prod_nombre}</h2>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                            <img className='img-fluid' src={producto.prod_imagen} alt={producto.prod_imagen}>
                            </img>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <h5 className='fw-bold'>Descripción</h5>
                            <p>{producto.prod_descripcion}</p>
                            <div className='py-3 d-flex justify-content-between'>
                                <span>$ {producto.prod_precio}</span>
                                <button className='btn btn-dark btn-lg' onClick={anadirACarritoContext}>
                                <i className="fa fa-shopping-cart"></i>
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        {/* pregunta ?, si es verdad: si es falso */}
    </div>
  )

}
