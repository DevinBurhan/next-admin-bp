'use client';
import { useState } from 'react';
import DropdownOption from '../DropdownOption';
import DocumentListTableData from './DocumentListTableData.json';
export default function DocumentListTable() {
  const [data, setData] = useState(DocumentListTableData);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = id => {
    setData(prevData =>
      prevData.map(row =>
        row.id === id ? { ...row, checked: !row.checked } : row,
      ),
    );
  };

  const handleSelectAll = () => {
    const newData = data.map(row => ({
      ...row,
      checked: !selectAll,
    }));
    setData(newData);
    setSelectAll(!selectAll);
  };
  return (
    <table className="table table-middle mb-0">
      <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            <td className="tb-col">
              <div className="caption-text line-clamp-2">{item.name}</div>
            </td>
            <td className="tb-col tb-col-sm">
              <div
                className={`badge text-bg-${item.documentTypeClass}-soft rounded-pill px-2 py-1 fs-6 lh-sm`}
              >
                {item.documentType}
              </div>
            </td>
            <td className="tb-col tb-col-md">
              <div className="fs-6 text-light d-inline-flex flex-wrap gap gx-2">
                <span>{item.date} </span> <span>{item.time}</span>
              </div>
            </td>
            <td className="tb-col tb-col-end">
              <DropdownOption
                optionList={[
                  { title: 'Rename', icon: 'edit' },
                  { title: 'Delete', icon: 'trash' },
                ]}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
