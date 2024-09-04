export default function TablePagination() {
  return (
    <div className="table-pagination mt-4">
      <div className="table-pagination-info">1 – 10 of 34 items</div>
      <div className="table-pagination-select">
        <div className="form-control-wrap">
          <select className="pagination-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        of 1 page
      </div>
      <div className="table-pagination-btn-wrap">
        <button className="table-pagination-btn">
          <em className="icon ni ni-caret-left-fill" />
        </button>
      </div>
      <div className="table-pagination-btn-wrap">
        <button className="table-pagination-btn">
          <em className="icon ni ni-caret-right-fill" />
        </button>
      </div>
    </div>
  );
}
