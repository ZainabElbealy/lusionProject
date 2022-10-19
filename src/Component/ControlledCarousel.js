import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logoOne from '../Photos/logoOne.png'
import logoTwo from '../Photos/logoTwo.png'
import '../style/ControlledCarousel.css'

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='opacity'>
        <img
          className="d-block w-100"
          src={logoOne}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='opacity'>
        <img
          className="d-block w-100"
          src={logoTwo}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
