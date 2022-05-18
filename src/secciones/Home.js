import ItemListContainer from "../componentes/ItemListContainer";
import Slider from "../extra/Slider"
import VideoHero from "../extra/VideoHero";

function Home() {
  return (
    <div>     
      <VideoHero/>          
      <h2 className="tituloList">Productos Destacados</h2>
      <ItemListContainer />
      <Slider/> 
    </div>
  );
}

export default Home;
