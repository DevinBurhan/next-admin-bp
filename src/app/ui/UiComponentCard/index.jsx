export default function UiComponentCard({ title, subTitle, children }) {
  return (
    <div className="nk-block">
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-head-content">
          {title && <h3 className="nk-block-title">{title}</h3>}
          {subTitle && <p>{subTitle}</p>}
        </div>
      </div>
      <div className="card shadown-none">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
