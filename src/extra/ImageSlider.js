import { SliderData } from './SliderData';
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import ThemeContext from '../context/ThemeContext';
import { useContext, useState } from 'react';
import "../estilos/Slider.css"


const ImageSlider = ({ slides }) => {
  const { darkTheme} = useContext(ThemeContext)
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={`contSlider  ${darkTheme ? 'dark-mode' : '' }`}>
      <FiArrowLeftCircle className={`left-arrow  ${darkTheme ? 'dark-mode' : '' }`} onClick={prevSlide} />
      <FiArrowRightCircle className={`right-arrow  ${darkTheme ? 'dark-mode' : '' }`} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image}  className='image' />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;