import ItemListContainer from "../componentes/ItemListContainer";
import Slider from "../extra/Slider"


function Home() {
  return (
    <div>     
      <Slider/>
      <h2 className="tituloList">Productos Destacados</h2>
      <ItemListContainer />
    </div>
  );
}

export default Home;
