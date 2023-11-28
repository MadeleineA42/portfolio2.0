import React from 'react'
import Modal from 'react-bootstrap/Modal';
import './Resume.css'

function Resume() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header className='top'>
          <Modal.Title>Resume</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h2>Madeleine Abraham</h2>
          <h3>Skills</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat rem aperiam velit voluptatem? Accusantium temporibus similique ducimus! Perspiciatis culpa incidunt est excepturi iste sint eveniet saepe quae fugiat, nobis itaque.</p>
          <h3>Experience</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat rem aperiam velit voluptatem? Accusantium temporibus similique ducimus! Perspiciatis culpa incidunt est excepturi iste sint eveniet saepe quae fugiat, nobis itaque.</p>
          <h3>Education</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat rem aperiam velit voluptatem? Accusantium temporibus similique ducimus! Perspiciatis culpa incidunt est excepturi iste sint eveniet saepe quae fugiat, nobis itaque.</p>
        </Modal.Body>

        <Modal.Footer>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Resume;