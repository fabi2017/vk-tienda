import Carousel from "react-bootstrap/Carousel";
import "../estilos/Slider.css";

function Slider() {
  return (
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
  );
}

export default Slider;
