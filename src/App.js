import "./App.css";
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "./secciones/Nosotros";
import Contacto from "./secciones/Contacto";
import Home from "./secciones/Home";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetail from "./componentes/ItemDetail";

function App() {
  return (

    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
          <Route path="/:item/:id" element={<ItemDetail/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="*" element={<h1 className="tituloList">Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
