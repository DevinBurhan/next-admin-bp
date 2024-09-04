import React from 'react';
import Icon from '../Icon';
import { Card } from 'react-bootstrap';

export default function CustomCardStyle4({
  title,
  subTitle,
  icon,
  iconBgClass,
  newBadge,
  popular,
}) {
  return (
    <Card className="card-full">
      <Card.Body>
        {newBadge && (
          <div className="position-absolute end-0 top-0 me-4 mt-4">
            <div className="badge text-bg-dark rounded-pill text-uppercase">
              New
            </div>
          </div>
        )}
        {popular && (
          <div className="position-absolute end-0 top-0 me-4 mt-4">
            <div className="badge bg-gradient-custom gradient-start-cyan gradient-middle-purple-light gradient-end-pink-light gradient-angle-45 rounded-pill text-uppercase">
              Popular
            </div>
          </div>
        )}
        <div
          className={`media media-rg media-middle media-circle ${iconBgClass} bg-opacity-20 mb-3`}
        >
          <Icon className="icon" icon={icon} />
        </div>
        <h5 className="fs-4 fw-medium">{title}</h5>
        <p className="small text-light">{subTitle}</p>
      </Card.Body>
    </Card>
  );
}
