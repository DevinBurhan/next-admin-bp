'use client';
import { useRef, useState } from 'react';

export default function CustomCardStyle3({
  category,
  variantText,
  text = '',
  date,
  time,
  wordNumber,
}) {
  const [copyButtonText, setCopyButtonText] = useState('Copy');
  const divRef = useRef(null);
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
    <div className="card bg-primary-soft border-0 shadow-none">
      <div className="p-3">
        <div className="d-flex align-items-center justify-content-between mb-2">
          {category && (
            <div className="badge bg-primary bg-opacity-10 text-primary rounded-pill">
              <em className="icon ni ni-pen-fill" />
              <span>{category}</span>
            </div>
          )}
          {variantText && (
            <div className="text-primary fs-12px">{variantText}</div>
          )}
          <ul className="d-flex align-items-center gap gx-1">
            <li>
              <button className="btn btn-sm btn-icon btn-zoom">
                <em className="icon ni ni-chevrons-left" />
              </button>
            </li>
            <li>
              <button
                className={`${
                  copyButtonText === 'Copy'
                    ? 'js-copy has-tooltip'
                    : 'js-copy has-tooltip text-success'
                }`}
                onClick={handleCopyClick}
              >
                <em className="icon ni ni-copy" />
                <span>{copyButtonText}</span>
              </button>
            </li>
          </ul>
        </div>
        <p
          className={`${variantText ? 'small text-dark' : 'text-dark'}`}
          ref={divRef}
        >
          {text}
        </p>
        <div className="d-flex justify-content-between align-items-center fs-11px text-light">
          {date && time && (
            <span>
              {date} &nbsp; {time}
            </span>
          )}

          <span>{wordNumber} Words</span>
        </div>
      </div>
    </div>
  );
}
