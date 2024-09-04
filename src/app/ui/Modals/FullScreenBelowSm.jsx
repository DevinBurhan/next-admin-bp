import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function FullScreenBelowSm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Full Screen Below sm
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-fullscreen-sm-down"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In id
          voluptatem fugiat autem sequi, rem modi earum provident eos corrupti.
        </Modal.Body>
      </Modal>
    </>
  );
}
