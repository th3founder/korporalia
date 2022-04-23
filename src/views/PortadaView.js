import { useState,useEffect } from "react";
import { obtenerProductos, obtenerProductosXId} from "../services/productosService";
import GroupProducts from "../components/GroupProducts";

import React from 'react'

export default function PortadaView() {

    const [productos,setProductos] = useState([]);

    const getProductos = async() =>{
        try{
            let productosObtenidos = await obtenerProductos();
            setProductos(productosObtenidos);
    

        }catch{
            console.error('Error');
        }
    }

    useEffect(()=>{
        getProductos();
    },[]); //Los corchetes son para que no se haga bucle

    console.log(productos,"Hola");

  return (
    <div>
        <GroupProducts productos={productos}/>
    </div>
  )
}
