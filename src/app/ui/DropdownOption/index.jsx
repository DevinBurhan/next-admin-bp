import Icon from '../Icon';
import { Dropdown } from 'react-bootstrap';

export default function DropdownOption({ optionList, icon }) {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="custom-icon btn-sm btn-icon btn-zoom me-n1">
          <em className={`icon ni ni-${icon ? icon : 'more-h'}`} />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-c-position">
          <div className="dropdown-content">
            <ul className="link-list link-list-hover-bg-primary link-list-md">
              {optionList?.map((item, index) => (
                <li key={index}>
                  <Dropdown.Item>
                    <Icon icon={item.icon} className="icon" />
                    {item.title}
                  </Dropdown.Item>
                </li>
              ))}
            </ul>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
