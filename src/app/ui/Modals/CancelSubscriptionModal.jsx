import Link from 'next/link';
import { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import Icon from '../Icon';

export default function CancelSubscriptionModal({ btnVariant }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant={btnVariant} onClick={handleShow}>
        Cancel Subscription
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="modal-body p-4">
            <div className="media media-rg media-middle media-circle text-danger bg-danger bg-opacity-20 mb-3">
              <Icon icon="spark-fill" className="icon" />
            </div>
            <h2 className="h1">Cancel Subscription</h2>
            <p>
              Are you sure you want to cancel your subscription? Your paid plan
              is valid till <span className="text-dark">23 Mar, 2023</span>.
            </p>
            <p>
              Don&apos;t forget to review our other{' '}
              <Link href="/pricing-plans">pricing plans</Link> before cancelling
              your current subscription. If you still want to cancel, your
              account will change to a free plan.
            </p>
            <div className="card bg-lighter bg-opacity-80 shadow-none mt-2">
              <div className="card-body">
                <h5>What you will lose after cancelling you subscription?</h5>
                <ul className="list-dot gap gy-2 mt-2">
                  <li>All your generated in Copygen will be removed.</li>
                  <li>You will lose access to unlimited content generation.</li>
                  <li>
                    You will get regular updates exclusive only for our premium
                    users.
                  </li>
                  <li>
                    Server response may become slow as we highly prioritized our
                    premium users.
                  </li>
                  <li>
                    There will be no recovery options once you cancel
                    subscription.
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
                <Link href="/pricing-plans" className="btn btn-danger w-100">
                  I Understand, Cancel
                </Link>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
