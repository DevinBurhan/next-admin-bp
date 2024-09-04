import Link from "next/link";

export default function UpgradeCard() {
  return (
    <div className="border border-light rounded-3">
      <div className="px-3 py-2 bg-white border-bottom border-light rounded-top-3">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <h6 className="lead-text">Free Plan</h6>
          <a className="link link-primary" href="#">
            <em className="ni ni-spark-fill icon text-warning" />
            <span>Upgrade</span>
          </a>
        </div>
        <div className="progress progress-md">
          <div
            className="progress-bar"
            data-progress="25%"
            style={{ width: "25%" }}
          />
        </div>
        <h6 className="lead-text mt-2">
          1,360 <span className="text-light">words left</span>
        </h6>
      </div>
      <Link
        className="d-flex px-3 py-2 bg-primary bg-opacity-10 rounded-bottom-3"
        href="/profile"
      >
        <div className="media-group">
          <div className="media media-sm media-middle media-circle text-bg-primary">
            <img src="images/avatar/a.png" />
          </div>
          <div className="media-text">
            <h6 className="fs-6 mb-0">Shawn Mahbub</h6>
            <span className="text-light fs-7">shawn@websbd.com</span>
          </div>
          <em className="icon ni ni-chevron-right ms-auto ps-1" />
        </div>
      </Link>
    </div>
  );
}
