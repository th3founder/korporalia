/* Este no va con mayusuclas porque no es un componente solamente los componentes usan mayusculas */
import { useState } from "react";
import { createContext } from "react"; /* importamos la libreriaa create context */
import React from 'react'


export const CarritoContext = createContext() /* creamos el contexto para ingresarlo en una constante */

const CarritoContextProvider = (props) =>{

    const [carrito, setCarrito] = useState([])

    const anadirACarrito = (producto) =>{

        for (let index = 0; index < carrito.length; index++) { /* for para agregar x cantidad de veces que se agrego un mismo carrito */
            if(carrito[index].prod_id === producto.prod_id){/* Aqui significa que tenemos el producto ya adentro del carrito */

                const productoExistente = {
                    ...carrito[index],
                    cantidad: carrito[index].cantidad + 1
                }

                let carritoTmp = [...carrito] /* copia del carrito ya que carrito es inmutable */

                carritoTmp.splice(index,1) /* remuevo el producto que aumentara su cantidad */

                carritoTmp.push(productoExistente)/*Servira para volver a agregar el producto pero con una cantidad acutalizada  */

                setCarrito(carritoTmp) /* Actializo el carrito con la copia actualizada */

                return 
            }            
            
        }

        setCarrito([...carrito,{...producto,cantidad:1}]) /*  */
    }

    return(
            <CarritoContext.Provider value={{carrito,anadirACarrito}}>{/* Van a ser accesibles por los demas componentes */}
                {props.children} {/* .children porque no sabemos a que componente se le puede aplicar y queremos que sea para cualquier componente */}
            </CarritoContext.Provider> /* .provider es un proveedor Sirve para que otros componentes puedan utilizarlo */
        
    )

}

export default CarritoContextProvider


/* El value: lo que quieres que use al usar el estado global */