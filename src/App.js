import "./App.css";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <div className="app">
      <NavBar />
        <ItemListContainer>
          <p>Productos Destacados</p>          
        </ItemListContainer>     
    </div>
  );
}

export default App;
