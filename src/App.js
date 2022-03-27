import "./App.css";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <div className="app">
       <NavBar />
       <h2 className="tituloList" >Productos en Promocion</h2>
       <ItemListContainer />
    </div>
  );
}

export default App;
