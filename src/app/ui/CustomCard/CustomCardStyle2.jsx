'use client';
import { useState, useRef } from 'react';

export default function CustomCardStyle2({
  category,
  icon,
  iconBg,
  text = '',
  time,
  wordNumber,
  characterNumber,
}) {
  const divRef = useRef(null);
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const handleCopyClick = () => {
    /* Select Content */
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(divRef.current);
    selection.removeAllRanges();
    selection.addRange(range);
    /* End Select Content */
    const textToCopy = text;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopyButtonText('Copied!');
        setTimeout(() => {
          setCopyButtonText('Copy');
        }, 2000); // Change back to 'Copy' after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="d-flex align-items-center">
            <div
              className={`media media-xs media-middle media-circle ${
                iconBg ? iconBg : 'text-primary bg-primary'
              } bg-opacity-20`}
            >
              <em className={`icon ni ni-${icon ? icon : 'pen-fill'}`} />
            </div>
            <h5 className="fs-14px fw-normal ms-2">{category}</h5>
          </div>
          <button
            className={`${
              copyButtonText === 'Copy' ? 'js-copy' : 'js-copy text-success'
            }`}
            onClick={handleCopyClick}
          >
            <em className="icon ni ni-copy" />
            <span>{copyButtonText}</span>
          </button>
        </div>
        <p className="lead text-base" ref={divRef}>
          {text}
        </p>
        <ul className="nk-timeline-meta">
          <li>{time}</li>
          <li>
            {wordNumber} Words / {characterNumber} Characters
          </li>
        </ul>
      </div>
    </div>
  );
}
