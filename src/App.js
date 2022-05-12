import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; /* Permite movernos entre rutas */
import PortadaView from "./views/PortadaView";
import ProductoView from './views/ProductoView';
import NavTop from './components/NavTop';
import CarritoContextProvider from './Context/carritoContext';
import CarritoView from './views/CarritoView';
import ProductosView from './views/ProductosView';

export default function App() {
  return (
    <div>
      <BrowserRouter>{/* Este componente seria el react-router-dom */}
        <CarritoContextProvider> {/* Tiene que estar en cabecera porque de esta manera lo puede usar cualquier componente */}
          <NavTop/>
            <Routes>{/* El Routes va a verificar que ruta necesitamos y que componente usar */}
              <Route exact path="/" element={<PortadaView/>}></Route>
              <Route exact path="/detalle/:id" element={<ProductoView/>}></Route>
              <Route exact path="/productos" element={<ProductosView/>}></Route>  
              <Route exact path="/carrito" element={<CarritoView/>}></Route>  

            </Routes>
        </CarritoContextProvider>
      </BrowserRouter>
    </div>
  );
}

