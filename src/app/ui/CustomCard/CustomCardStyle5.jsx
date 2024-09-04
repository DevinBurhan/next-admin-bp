import React from 'react';
import Icon from '../Icon';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

export default function CustomCardStyle5({
  title,
  btnText,
  btnHref,
  numbers,
  numbersText,
  percentage,
  cardFooerNumber,
  cardFooerText,
}) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-1">
          <div className="fs-6 text-light mb-0">{title}</div>
          <Link href={btnHref} className="link">
            {btnText}
          </Link>
        </div>
        <h5 className="fs-1">
          {numbers} <small className="fs-3">{numbersText}</small>
        </h5>
        <div className="progress progress-md">
          <div
            className="progress-bar bg-gradient-custom gradient-start-cyan gradient-middle-purple-light gradient-end-pink-light gradient-angle-45"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="fs-7 text-light mt-1">
          <span className="text-dark">{cardFooerNumber}</span>
          {cardFooerText}
        </div>
      </div>
    </div>
  );
}
