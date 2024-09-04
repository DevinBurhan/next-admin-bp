import Link from 'next/link';
import { Button, Col, Row, Form } from 'react-bootstrap';

export default function ForgotPassword() {
  return (
    <div className="container p-2 p-sm-4 mt-auto">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-5 col-xl-5 col-xxl-4">
          <div className="nk-block">
            <div className="nk-block-head text-center mb-4 pb-2">
              <div className="nk-block-head-content">
                <h1 className="nk-block-title mb-1">Reset Your Password</h1>
                <p className="small">
                  Enter your email address and we will send you instructions to
                  reset your password.
                </p>
              </div>
            </div>
            <Form action="/check-email">
              <Row className="gy-3">
                <Col lg="12">
                  <div className="form-group">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email address"
                    />
                  </div>
                </Col>
                <Col lg="12">
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Send Link
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
            <div className="text-center mt-3">
              <p className="small">
                <Link href="/login">Return to Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
