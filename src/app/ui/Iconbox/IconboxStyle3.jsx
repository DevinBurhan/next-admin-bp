import Link from 'next/link';

export default function IconboxStyle3({
  title,
  subTitle,
  icon,
  iconColorClass,
  href = '/',
}) {
  return (
    <Link
      className="bg-opacity-80 hover-bg-lighter px-3 py-2 d-block"
      href={href}
    >
      <div className="d-flex gap g-2">
        <em className={`icon fs-4 ni ni-${icon} ${iconColorClass}`} />
        <div className="">
          <h6 className="mb-1">{title}</h6>
          <p className="small text-light">{subTitle}</p>
        </div>
      </div>
    </Link>
  );
}
