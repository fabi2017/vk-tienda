import ItemListContainer from "../componentes/ItemListContainer";
import Slider from "../extra/Slider";
import VideoHero from "../extra/VideoHero";
import Slide from "react-reveal/Slide";

function Home() {
  return (
    <div>
      <Slide bottom>
        <VideoHero />
      </Slide>
      <Slide right>
        <h2 className="tituloList">Productos Destacados</h2>
        <ItemListContainer />
      </Slide>
      <Slider />
    </div>
  );
}

export default Home;
