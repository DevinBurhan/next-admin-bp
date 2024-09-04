'use client';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasItem({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Toggle {name} offcanvas
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function OffCanvasPlacementExample() {
  const placements = ['start', 'end', 'top', 'bottom'];

  return (
    <ul className="d-flex flex-wrap gap g-3">
      {placements.map((placement, idx) => (
        <li key={idx}>
          <OffCanvasItem placement={placement} name={placement} />
        </li>
      ))}
    </ul>
  );
}

export default OffCanvasPlacementExample;
