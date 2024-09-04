import Link from 'next/link';

export default function CustomCard({
  cardBgClass,
  title,
  infoNumber,
  infoText,
  generatedNumber,
  generatedText,
  btnText,
  btnUrl = '/',
  btnColorClass,
}) {
  return (
    <div className={`card card-full ${cardBgClass} bg-opacity-10 border-0`}>
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-1">
          <div className="fs-6 text-light mb-0">{title}</div>
          <Link href={btnUrl} className={`link ${btnColorClass}`}>
            {btnText}
          </Link>
        </div>
        <h5 className="fs-1">
          {infoNumber} <small className="fs-3">{infoText}</small>
        </h5>
        <div className="fs-7 text-light mt-1">
          <span className="text-dark">{generatedNumber}</span>
          {generatedText}
        </div>
      </div>
    </div>
  );
}
