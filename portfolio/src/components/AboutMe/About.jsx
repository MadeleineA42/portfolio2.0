import React from 'react'
import './About.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profileImage from '../../assets/images/avataaars.png';
const About = () => {
  return (
    <div className='card_container'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={profileImage} />
        <Card.Body className='cardBody'>
          <Card.Title>About Me</Card.Title>
          <Card.Text>
            My name is Madeleine Abraham and I'm a web dev.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}




export default About