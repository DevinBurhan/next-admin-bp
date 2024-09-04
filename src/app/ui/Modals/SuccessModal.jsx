import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Icon from '../Icon';

export default function SuccessModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Success Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="p-5 text-center">
            <div className="media media-huge media-middle media-circle text-primary bg-primary bg-opacity-20 mb-3">
              <Icon icon="check" className="icon" />
            </div>
            <h2 className="h1">Thank You</h2>
            <p>
              We truly appreciate your input, as it will help us improve our
              products and services for our customers.
            </p>
            <div className="mt-4">
              <Button variant="primary w-100" onClick={handleClose}>
                Close
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
