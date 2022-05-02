/* Este no va con mayusuclas porque no es un componente solamente los componentes usan mayusculas */
import { useState } from "react";
import { createContext } from "react";
import React from 'react'


export const CarritoContext = createContext()

const CarritoContextProvider = (props) =>{

    const [carrito, setCarrito] = useState([])

    const anadirACarrito = (producto) =>{
        setCarrito([...carrito,producto])
    }

    return(
            <CarritoContext.Provider value={{carrito,anadirACarrito}}>{/* Van a ser accesibles por los demas componentes */}
                {props.children}
            </CarritoContext.Provider>
        
    )

}

export default CarritoContextProvider