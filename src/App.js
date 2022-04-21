import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//SECCIONES
import Nosotros from "./secciones/Nosotros";
import Contacto from "./secciones/Contacto";
import Home from "./secciones/Home";
import Carrito from "./secciones/Carrito";
import Page404 from "./extra/Page404"
//COMPONENTES
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import NavBar from "./componentes/NavBar";
//
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
              <Route path="*"element={<Page404/>} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
