import Link from 'next/link';
import React from 'react';
import Icon from './Icon';

export default function SectionHeading({
  title,
  subTitle,
  btnText,
  btnUrl,
  iconRight,
  iconLeft,
  btnClasses,
}) {
  return (
    <div className="nk-block-head nk-page-head">
      <div className="nk-block-head-between">
        <div className="nk-block-head-content">
          {title && <h2 className="display-6">{title}</h2>}
          {subTitle && <p>{subTitle}</p>}
        </div>
        {btnText && (
          <div className="nk-block-head-content">
            <Link
              href={btnUrl ? btnUrl : '/'}
              className={`${btnClasses ? btnClasses : 'link'}`}
            >
              {iconLeft && <Icon className="icon" icon={iconLeft} />}
              <span>{btnText}</span>
              {iconRight && <Icon className="icon" icon={iconRight} />}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
