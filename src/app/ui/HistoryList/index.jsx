'use client';
import React, { useState } from 'react';
import CustomCardStyle2 from '../CustomCard/CustomCardStyle2';

export default function HistoryList({ date, history }) {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleItems = showAll ? history : history.slice(0, 2);
  return (
    <>
      {visibleItems?.map((item, index) => (
        <div className="nk-timeline-item" key={index}>
          <div className="nk-timeline-symbol">
            <div className="nk-timeline-symbol-dot" />
          </div>
          <div className="nk-timeline-content">
            <CustomCardStyle2 {...item} />
          </div>
        </div>
      ))}
      <span
        className="nk-timeline-item nk-timeline-expand"
        style={{ cursor: 'pointer' }}
        onClick={toggleShowAll}
      >
        <div className="nk-timeline-symbol">
          <div className="nk-timeline-symbol-button">
            <em
              className={`icon fs-14px ni ${
                showAll ? 'ni-unfold-less' : 'ni-unfold-more'
              }`}
            />
          </div>
        </div>
        <div className="nk-timeline-content">
          <h6 className="nk-timeline-symbol-text">
            {showAll
              ? `Hide ${history.length - 2} history`
              : `Show ${history.length - 2} more history`}
          </h6>
        </div>
      </span>
    </>
  );
}
