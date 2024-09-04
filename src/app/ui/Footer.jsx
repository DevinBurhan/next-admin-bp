import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="nk-footer">
      <div className="container-xl">
        <div className="d-flex align-items-center flex-wrap justify-content-between mx-n3">
          <div className="nk-footer-links px-3">
            <ul className="nav nav-sm">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/pricing-plans">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://copygen-nextjs14.vercel.app/terms-condition"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://copygen-nextjs14.vercel.app/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="nk-footer-copyright fs-6 px-3">
            {' '}
            © 2023 All Rights Reserved to <a href="#">Copygen</a>.{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
