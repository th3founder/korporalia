import React from 'react'
import Loading from '../components/Loading';
import { obtenerProductos } from '../services/productosService';
import { useState } from 'react';
import { useEffect } from 'react';
import GroupProducts from "../components/GroupProducts";

export default function ProductosView() {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    

    const getProductos = async() =>{
        try{
            let productosObtenidos = await obtenerProductos();
            setProductos(productosObtenidos);
            setCargando(false);
    
        }catch{
            console.error('Error');
        }
    }

    useEffect(()=>{
        getProductos()
    },[])


  return (
    <div>
        {cargando ? 
        (<Loading/>):
        (
        <div>
            <GroupProducts productos={productos}>

            </GroupProducts>
        </div>
        )}
    </div>
  )
}
