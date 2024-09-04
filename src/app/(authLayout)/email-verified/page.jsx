import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';

export default function EmailVerifiedPage() {
  return (
    <div className="container p-2 p-sm-4 mt-auto">
      <Row className="justify-content-center">
        <Col lg="4" md="7">
          <div className="nk-block">
            <div className="mb-5 text-center">
              <Image
                src="/images/illustrations/envelope-verified.svg"
                alt="Thumb"
                width={184}
                height={180}
              />
            </div>
            <div className="nk-block-head text-center">
              <div className="nk-block-head-content">
                <h1 className="nk-block-title mb-1">Email Verified!</h1>
                <p>
                  Thank you for taking the time to verify your email. This
                  simple step helps us ensure the security of your account.
                </p>
              </div>
            </div>
            <div className="d-grid mt-4 pt-2">
              <Link className="btn btn-primary" href="/login">
                Continue
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
