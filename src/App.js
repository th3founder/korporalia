import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortadaView from "./views/PortadaView";
import ProductoView from './views/ProductoView';
import NavTop from './components/NavTop';
import { Navbar } from 'react-bootstrap';

export default function App() {
  return (
    <div>
      <BrowserRouter>{/* Este componente seria el react-router-dom */}
      <NavTop></NavTop>
        <Routes>{/* El Routes va a verificar que ruta necesitamos y que componente usar */}
          <Route exact path="/" element={<PortadaView/>}></Route>
          <Route exact path="/detalle/:id" element={<ProductoView/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

