import Link from 'next/link';
import { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import Icon from '../Icon';

export default function FeedbackModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Feedback Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="p-4">
            <div className="media media-rg media-middle media-circle text-primary bg-primary bg-opacity-20 mb-3">
              <em className="icon ni ni-chat-fill" />
            </div>
            <h2 className="h1">We’d like your feedback</h2>
            <p>
              We truly appreciate your input, as it will help us improve our
              products and services for our customers.
            </p>
            <Row className="row gy-4 gx-4">
              <Col sm="12">
                <div className="form-group">
                  <label className="form-label">Please choose a issue</label>
                  <div className="form-control-wrap">
                    <select className="form-select">
                      <option selected>I have a question</option>
                      <option>I need support</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col sm="12">
                <div className="form-group">
                  <label className="form-label">Describe your feedback</label>
                  <div className="form-control-wrap">
                    <textarea
                      cols={30}
                      rows={5}
                      className="form-control"
                      placeholder="Start writing here..."
                    />
                  </div>
                  <div className="form-note d-flex justify-content-end">
                    <span>0/500 Characters</span>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="gx-4 mt-4">
              <Col sm="6">
                <Button variant="outline-light w-100" onClick={handleClose}>
                  Close
                </Button>
              </Col>
              <Col sm="6">
                <Button variant="primary w-100">Submit</Button>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
