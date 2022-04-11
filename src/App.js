import "./App.css";
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "./secciones/Nosotros";
import Contacto from "./secciones/Contacto";
import Home from "./secciones/Home";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Carrito from "./secciones/Carrito";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext"



function App() {
  return (
    <div className="app">
      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categoria/:categoria"
                element={<ItemListContainer />}/>
              <Route path="/:item/:id" element={<ItemDetailContainer />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/cart" element={<Carrito />} />
              <Route path="*"element={<h1 className="tituloList">Error 404</h1>}/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
