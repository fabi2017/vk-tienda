import ItemListContainer from "../componentes/ItemListContainer";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";

function Home() {
  return (
    <div>
      <Carousel className="contSlider" variant="dark">
        <Carousel.Item className="slider" interval={1200}>
          <img className="imgSlide" src="cajita.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="slider" interval={1200}>
          <img className="imgSlide" src="funkoMando.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="slider" interval={1200}>
          <img className="imgSlide" src="mochila.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <h2 className="tituloList">Productos Destacados</h2>
      <ItemListContainer />
    </div>
  );
}

export default Home;
