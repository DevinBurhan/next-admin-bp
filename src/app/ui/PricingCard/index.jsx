export default function PricingCard({
  packageName,
  tilte,
  price,
  btnText,
  btnNote,
  featureList,
  featured,
  focused,
  duration,
}) {
  return (
    <div
      className={`pricing ${
        featured
          ? 'pricing-featured mx-n1px my-xl-n1px bg-primary mt-5'
          : 'bg-white rounded-start'
      }`}
    >
      {featured && (
        <div className="position-absolute text-center py-1 px-4 text-bg-primary rounded-top start-0 end-0 bottom-100">
          <div className="fw-medium lh-sm fs-14px">Most Popular</div>
        </div>
      )}

      <div className={`pricing-content ${featured ? 'bg-primary-soft' : ''}`}>
        <div className="w-sm-80 w-xl-100 mx-auto">
          <div className="text-center text-xl-start">
            <h5 className="fw-normal text-light">{packageName}</h5>
            <h2
              className={`mb-3 ${featured ? 'text-primary' : ''} ${
                focused
                  ? 'd-inline-block text-gradient-custom gradient-start-primary-light gradient-middle-primary-light gradient-end-blue-light gradient-angle-90'
                  : ''
              }`}
            >
              {tilte}
            </h2>
            <div className="pricing-price-wrap">
              <div className="pricing-price">
                <h3 className="display-1 mb-3 fw-semibold">
                  {price}{' '}
                  {duration && (
                    <span className="caption-text text-light fw-normal">
                      {duration}
                    </span>
                  )}
                </h3>
              </div>
            </div>
            <div className="mb-2">
              <button
                className={`btn w-100 ${
                  featured ? 'btn-primary' : 'btn-outline-light'
                } ${focused ? 'btn-gradient' : ''}`}
              >
                {btnText}
              </button>
              <div
                className={`d-flex align-items-center justify-content-center text-center ${
                  focused ? 'text-dark' : 'text-light'
                } fs-12px lh-lg fst-italic mt-1`}
              >
                <svg
                  width={13}
                  height={13}
                  viewBox="0 0 13 13"
                  className="text-danger"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 2.375V10.625"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.9281 4.4375L10.0719 8.5625"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.9281 8.5625L10.0719 4.4375"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ms-1">{btnNote}</span>
              </div>
            </div>
          </div>
          <ul className="pricing-features">
            {featureList?.map((item, index) => (
              <li key={index}>
                <em
                  className={`icon text-primary ni ${
                    featured || focused
                      ? 'ni-check-circle-fill'
                      : 'ni-check-circle'
                  }`}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
