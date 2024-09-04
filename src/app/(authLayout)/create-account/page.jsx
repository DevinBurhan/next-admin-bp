import InputFieldPassword from '@/app/ui/CustomFormField/InputFieldPassword';
import Link from 'next/link';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';

export default function CreateAccountPage() {
  return (
    <Container className="p-2 p-sm-4 mt-auto">
      <Row className="justify-content-center">
        <Col md="7" lg="5" xl="5" xxl="4">
          <div className="nk-block">
            <div className="nk-block-head text-center mb-4 pb-2">
              <div className="nk-block-head-content">
                <h1 className="nk-block-title mb-1">Create Your Account</h1>
                <p className="small">
                  Email verification is required for signup to ensure security,
                  and your email will only be used for identity verification.
                </p>
              </div>
            </div>
            <Form action="/verify-email">
              <Row className="gy-3">
                <Col lg="12">
                  <div className="form-group">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </div>
                </Col>
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
                  <div className="form-group">
                    <Form.Label>Password</Form.Label>
                    <InputFieldPassword />
                  </div>
                </Col>
                <Col lg="12">
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Create Account
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
            <div className="text-center mt-3">
              <p className="small">
                Already have an account? <Link href="/login">Login</Link>
              </p>
            </div>
            <div className="my-3 text-center">
              <h6 className="overline-title overline-title-sep">
                <span>OR</span>
              </h6>
            </div>
            <Row className="g-2">
              <Col lg="12">
                <Button variant="outline-light w-100">
                  <Image
                    src="/images/icons/google.png"
                    className="icon h-auto"
                    width={21}
                    height={20}
                    alt="Icon"
                  />
                  <span className="fw-medium">Continue with Google</span>
                </Button>
              </Col>
              <Col lg="12">
                <Button variant="outline-light w-100">
                  <Image
                    src="/images/icons/facebook.png"
                    className="icon h-auto"
                    width={21}
                    height={20}
                  />
                  <span className="fw-medium">Continue with Facebook</span>
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
