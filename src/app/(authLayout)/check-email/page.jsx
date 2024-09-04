import Link from 'next/link';
import { Col, Image, Row } from 'react-bootstrap';

export default function CheckEmailPage() {
  return (
    <div className="container p-2 p-sm-4 mt-auto">
      <Row className="justify-content-center">
        <Col md="7" lg="4">
          <div className="nk-block">
            <div className="mb-5 text-center">
              <Image
                src="/images/illustrations/envelope-send.svg"
                height={200}
                width={200}
                alt="Thumb"
              />
            </div>
            <div className="nk-block-head text-center">
              <div className="nk-block-head-content">
                <h1 className="nk-block-title mb-1">Check Your Email</h1>
                <p>
                  Please check the email address{' '}
                  <strong className="fw-bold">shawn@websbd.com</strong> for
                  instructions to reset your password.
                </p>
              </div>
            </div>
            <div className="d-grid mt-4 pt-2">
              <Link className="btn btn-primary" href="/forgot-password">
                Resend Email
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
