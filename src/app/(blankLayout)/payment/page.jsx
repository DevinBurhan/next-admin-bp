import Image from 'next/image';
import Link from 'next/link';
import { Col, Form, Row } from 'react-bootstrap';

export default function PaymentPage() {
  return (
    <div className="nk-app-root " data-sidebar-collapse="lg">
      <div className="nk-main">
        <div className="nk-wrap">
          <div className="d-flex flex-wrap flex-grow-1">
            <div className="bg-lighter w-100 w-lg-50 d-flex align-items-center justify-content-center justify-content-lg-end p-4 p-sm-5">
              <div className="wide-xs w-100">
                <div className="d-flex">
                  <Link className="pe-2 d-flex align-items-center" href="/">
                    <em className="icon ni ni-arrow-left text-light" />
                  </Link>
                  <Link href="/" className="logo-link">
                    <div className="logo-wrap">
                      <Image
                        src="/images/logo-dark.png"
                        height={30}
                        width={144}
                        className="h-auto"
                        alt="Logo"
                      />
                    </div>
                  </Link>
                </div>
                <div className="pt-4">
                  <div className="fs-4 fw-normal">
                    Subscribe to Unlimited (Yearly)
                  </div>
                  <h3 className="display-1 fw-semibold">
                    $225
                    <span className="caption-text text-light fw-normal">
                      per year
                    </span>
                  </h3>
                  <div className="fs-5 fw-normal mt-2">
                    A yearly pro plan for genious
                  </div>
                </div>
                <ul className="mt-4 gap gy-4 pb-2">
                  <li className="d-flex justify-content-between">
                    <div className="">
                      <div className="caption-text">Unlimited (Yearly)</div>
                      <span className="sub-text">Qty 1Billed yearly</span>
                    </div>
                    <div className="caption-text">$225.00</div>
                  </li>
                  <li className="d-flex justify-content-between">
                    <div className="">
                      <div className="caption-text">Subtotal</div>
                    </div>
                    <div className="caption-text">$225.00</div>
                  </li>
                </ul>
                <div className="border-top border-bottom py-3">
                  <button className="btn btn-light btn-md">
                    Add promotion code
                  </button>
                </div>
                <div className="d-flex justify-content-between pt-2 pb-lg-5 mb-lg-5">
                  <div className="caption-text">Total</div>
                  <div className="caption-text">$225.00</div>
                </div>
                <div className="pt-lg-5" />
                <div className="d-flex flex-wrap align-items-center justify-content-between mt-5 pt-lg-5">
                  <div className="text-light fs-14px">Powered By Stripe</div>
                  <ul className="nav nav-sm mx-n1">
                    <li className="nav-item">
                      <a className="nav-link px-1" href="#">
                        Terms
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-1" href="#">
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white w-100 w-lg-50 d-flex align-items-center justify-content-center justify-content-lg-start p-4 p-sm-5">
              <div className="wide-xs w-100">
                <h2 className="mb-3 fw-normal">Pay with card</h2>
                <Row className="g-3">
                  <Col lg="12">
                    <div className="form-group">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email address"
                      />
                    </div>
                  </Col>
                  <Col lg="12">
                    <div className="form-group">
                      <Form.Label>Card information</Form.Label>
                      <div className="form-control-wrap">
                        <div className="d-flex flex-wrap border border-light rounded">
                          <div className="w-100 border-bottom border-light d-flex align-items-center">
                            <Form.Control
                              className="form-control-plaintext px-3"
                              type="text"
                              placeholder="1234 1234 1234 1234"
                            />
                            <ul className="d-flex pe-3 gap gx-1 flex-shrink-0">
                              <li className="h-1rem d-inline-flex">
                                <img
                                  src="/images/icons/card/visa.png"
                                  alt=""
                                  className="h-100"
                                />
                              </li>
                              <li className="h-1rem d-inline-flex">
                                <img
                                  src="/images/icons/card/mastercard.png"
                                  alt=""
                                  className="h-100"
                                />
                              </li>
                              <li className="h-1rem d-inline-flex">
                                <img
                                  src="/images/icons/card/amex.png"
                                  alt=""
                                  className="h-100"
                                />
                              </li>
                              <li className="h-1rem d-inline-flex">
                                <img
                                  src="/images/icons/card/diners.png"
                                  alt=""
                                  className="h-100"
                                />
                              </li>
                            </ul>
                          </div>
                          <div className="w-50 border-end border-light">
                            <input
                              className="form-control-plaintext px-3"
                              type="text"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div className="w-50">
                            <input
                              className="form-control-plaintext px-3"
                              type="text"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">
                        Name on card
                      </label>
                      <div className="form-control-wrap">
                        <input
                          className="form-control"
                          type="text"
                          id="name"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg="12">
                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <Form.Select aria-label="Default select example">
                        <option>Afghanistan</option>
                        <option value="1">Remove item</option>
                        <option value="2">Afghanistan</option>
                        <option value="3">Albania</option>
                      </Form.Select>
                    </div>
                  </Col>
                  <Col lg="12">
                    <div className="form-check flex-nowrap p-2 border border-light rounded my-1">
                      <input
                        className="form-check-input mt-0 flex-shrink-0"
                        type="checkbox"
                        defaultValue=""
                        id="savecard"
                      />
                      <label className="form-check-label" htmlFor="savecard">
                        <h6 className="mb-1">
                          Securely save my information for 1-click checkout
                        </h6>
                        <p className="fs-12px lh-sm">
                          Pay faster on Genious.AI and everywhere Link is
                          accepted.
                        </p>
                      </label>
                    </div>
                  </Col>
                  <Col lg="12">
                    <div className="form-group">
                      <button className="btn btn-primary w-100">
                        Subscribe
                      </button>
                    </div>
                  </Col>
                  <Col lg="12">
                    <div className="form-note">
                      By confirming your subscription, you allow Genious.AI to
                      charge your card for this payment and future payments in
                      accordance with their terms. You can always cancel your
                      subscription.
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
