import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Form, Row } from 'react-bootstrap';

export default function VerifyEmailPage() {
  return (
    <>
      <Container className="p-2 p-sm-4 mt-auto">
        <Row className="justify-content-center">
          <Col md="7" lg="5" xl="5" xxl="4">
            <div className="nk-block">
              <div className="mb-5 text-center">
                <Image
                  src="/images/illustrations/envelope-send.svg"
                  width={200}
                  height={200}
                  alt="Thumb"
                />
              </div>
              <div className="nk-block-head text-center mb-4 pb-2">
                <div className="nk-block-head-content">
                  <h1 className="nk-block-title mb-1">Verify Your Email</h1>
                  <p>
                    We sent an email to{' '}
                    <strong className="fw-bold">shawn@websbd.com</strong>. If
                    you haven&apos;t received the verification link, you can
                    click the button below.
                  </p>
                </div>
              </div>
              <form action="/email-verified">
                <div className="row gy-3">
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="code">
                        Enter Verification Code
                      </label>
                      <div className="form-control-wrap d-flex gap-2 input-auto-change">
                        <Form.Control
                          type="password"
                          className="text-center"
                          maxLength="1"
                          style={{ fontSize: '22px' }}
                        />
                        <Form.Control
                          type="password"
                          className="text-center"
                          maxLength="1"
                          style={{ fontSize: '22px' }}
                        />
                        <Form.Control
                          type="password"
                          className="text-center"
                          maxLength="1"
                          style={{ fontSize: '22px' }}
                        />
                        <Form.Control
                          type="password"
                          className="text-center"
                          maxLength="1"
                          style={{ fontSize: '22px' }}
                        />
                        <Form.Control
                          type="password"
                          className="text-center"
                          maxLength="1"
                          style={{ fontSize: '22px' }}
                        />
                        <Form.Control
                          type="password"
                          className="text-center"
                          maxLength="1"
                          style={{ fontSize: '22px' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-grid mt-2">
                      <button className="btn btn-primary" type="submit">
                        Verify Email
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center mt-3">
                <ul className="link-list link-list-inline link-list-base justify-content-center link-list-sm">
                  <li>
                    <Link href="/verify-email" className="link">
                      <em className="icon ni ni-reload-alt" />
                      <span>Send a new code</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/create-account">
                      <em className="icon ni ni-mail" />
                      <span>Try a different email</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
