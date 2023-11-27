import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import moody from '../../assets/images/Moody.png';
import space from '../../assets/images/Space.png';
import workday from '../../assets/images/Workday.png';
import audrey from '../../assets/images/Audrey.png'
import './Portfolio.css'






function Portfolio() {
  return (
    <Carousel slide={false}>
      <Carousel.Item className='moody'>
        <img className="d-block w-100 carousel-img" src={moody} alt="Moody" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='space'>
        <img className="d-block w-100 carousel-img" src={space} alt="YourSpace" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='workday'>
        <img className="d-block w-100 carousel-img" src={workday} alt="Workday Scheduler" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='audrey'>
        <img className="d-block w-100 carousel-img" src={audrey} alt="Digital Birthday Card" />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Portfolio;
