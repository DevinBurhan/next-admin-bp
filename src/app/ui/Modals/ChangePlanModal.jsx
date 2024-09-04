import Link from 'next/link';
import { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import Icon from '../Icon';

export default function ChangePlanModal({ btnVariant }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant={btnVariant} onClick={handleShow}>
        Change Plan
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="p-4">
            <div className="media media-rg media-middle media-circle text-primary bg-primary bg-opacity-20 mb-3">
              <Icon icon="spark-fill" className="icon" />
            </div>
            <h2 className="h1">Change Subscription</h2>
            <p>
              Are you sure you want to change your subscription? Your paid plan
              is valid till <span className="text-dark">23 Mar, 2023</span>.
            </p>
            <div className="card bg-lighter bg-opacity-80 shadow-none mt-2">
              <div className="card-body">
                <h5>
                  What you will lose after changing your active subscription?
                </h5>
                <ul className="list-dot gap gy-2 mt-2">
                  <li>You won’t have a dedicated account manager</li>
                  <li>
                    No custom tools will be existed for AI content generations.
                  </li>
                  <li>You’ll lose access to advance integrations.</li>
                  <li>No prioritized support will be provided for you.</li>
                  <li>Server response rate will be standard than faster.</li>
                  <li>
                    Regular model updates instead of special features early
                    access.
                  </li>
                </ul>
              </div>
            </div>

            <Row className="gx-4 mt-4 gap-sm-10">
              <Col sm="6">
                <Button variant="outline-light w-100" onClick={handleClose}>
                  Keep Plan
                </Button>
              </Col>
              <Col sm="6">
                <Link href="/pricing-plans" className="btn btn-primary w-100">
                  Change Plan
                </Link>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
