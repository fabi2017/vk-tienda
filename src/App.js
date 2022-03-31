import "./App.css";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
function App() {
  return (
    <div className="app">
      <NavBar />
      <h2 className="tituloList">Productos en Promocion</h2>
      <ItemListContainer />
      <ItemDetailContainer id={2} />
    </div>
  );
}

export default App;
