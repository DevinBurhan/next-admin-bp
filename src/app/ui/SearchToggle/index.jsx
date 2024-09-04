import { Dropdown } from 'react-bootstrap';
import Icon from '../Icon';
export default function SearchToggle() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="custom-icon btn-sm btn-icon btn-zoom text-base">
        <Icon icon="search" className="icon" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-md">
        <div className="dropdown-content py-3">
          <div className="form-control-wrap">
            <div className="form-control-icon start md text-light">
              <Icon icon="search" className="icon" />
            </div>
            <input
              type="text"
              className="form-control form-control-md"
              placeholder="Search Template"
            />
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}
