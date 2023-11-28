import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import moody from '../../assets/images/Moody.png';
import space from '../../assets/images/Space.png';
import workday from '../../assets/images/Workday.png';
import audrey from '../../assets/images/Audrey.png'
import './Portfolio.css'






function Portfolio() {
  return (
    <Carousel interval={null} /* or interval={false} */>
      <Carousel.Item className='moody'>
        <img className="d-block w-100 carousel-img" src={moody} alt="Moody" />
        <Carousel.Caption>
          <h1>Feelin' Moody?</h1>
          <p>A simple static website to help assess ones current mood</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='space'>
        <img className="d-block w-100 carousel-img" src={space} alt="YourSpace" />
        <Carousel.Caption>
          <h1>YourSpace</h1>
          <p>A social media platform based off MySpace</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='audrey'>
        <img className="d-block w-100 carousel-img" src={audrey} alt="Digital Birthday Card" />
        <Carousel.Caption>
          <h1>Digital Birthday Card</h1>
          <p>A simple but cute webpage created for a friends birthday</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Portfolio;
