export default function IconboxStyle2({
  title,
  subTitle,
  icon,
  iconBgClass,
  newBadge,
  popular,
}) {
  return (
    <div className="d-flex position-relative">
      {newBadge && (
        <div className="d-inline-flex position-absolute end-0 top-0">
          <div className="badge text-bg-dark rounded-pill text-uppercase">
            New
          </div>
        </div>
      )}
      {popular && (
        <div className="d-inline-flex position-absolute end-0 top-0">
          <div className="badge bg-gradient-custom gradient-start-cyan gradient-middle-purple-light gradient-end-pink-light gradient-angle-45 rounded-pill text-uppercase">
            Popular
          </div>
        </div>
      )}
      <div
        className={`media media-rg media-middle media-circle ${iconBgClass} bg-opacity-20 mb-3`}
      >
        <em className={`icon ni ni-${icon}`} />
      </div>
      <div className="ms-4 pb-gs border-bottom border-light flex-grow-1">
        <h5 className="fs-4 fw-medium">{title}</h5>
        <p className="small text-light">{subTitle}</p>
      </div>
    </div>
  );
}
