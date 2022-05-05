import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../Context/carritoContext'

export default function CarritoView() {

    const {carrito} = useContext(CarritoContext)
    console.log(carrito)
    

    return (
    <div>
        <div className='container'>
            <div className='my-4 text-center'>
                <h1>
                    Carrito de Compras
                </h1>
            </div>
        </div>

        <table className='table'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Precio Total</th>
                </tr>
            </thead>
            <tbody>
                {carrito.map((producto,key)=>(
                    <tr key={key}>
                        <td>{producto.prod_nombre}</td>
                        <td>{producto.cantidad}</td>
                        <td>{producto.prod_precio}</td>
                        <td>{producto.cantidad*producto.prod_precio}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
