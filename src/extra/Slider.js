import Carousel from "react-bootstrap/Carousel";
import "../estilos/Slider.css";

function Slider() {
  return (
    <Carousel className="contSlider" variant="dark">
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="/cajita.JPG" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="/funkoMando.JPG" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="slider" interval={1200}>
        <img className="imgSlide" src="/mochila.JPG" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
