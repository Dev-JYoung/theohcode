import React , { useState }from 'react';
import { SliderData } from '../data/slideData';
import "../scss/slider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Slider({slides}:{slides: any}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = ()=> {
    setCurrent(current === length -1 ? 0 : current +1);
  }

  const prevSlide = ()=> {
    setCurrent(current === 0 ? length -1 : current -1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='mainPageSlider'>
      <div className='mainPageSliderDetail'>
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='mainImage' className='mainImage'></img>
              )}
            </div>
          );
        })}
      </div>
      {/* <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} />
      <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} /> */}
    </div>
  );
}

export default Slider;