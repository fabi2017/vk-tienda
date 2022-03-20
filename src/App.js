import "./App.css";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <div className="app">
      <NavBar />
        <ItemListContainer>
          <p>Productos destacados</p>
        </ItemListContainer>
        <ItemListContainer>
          <p>Ofertas Semanales</p>
          <span>Grandes descuentos</span>
        </ItemListContainer>
     
    </div>
  );
}

export default App;
