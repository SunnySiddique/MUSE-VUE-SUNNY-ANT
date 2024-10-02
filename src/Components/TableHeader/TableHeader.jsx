import { Radio } from "antd";
import "./TableHeader.css";

const TableHeader = ({ title, options }) => {
  return (
    <>
      <div className="main-table-header">
        <div className="table-title">
          <h5>{title}</h5>
        </div>
        <div className="Radio-buttons">
          <Radio.Group optionType="button" options={options}></Radio.Group>
        </div>
      </div>
    </>
  );
};

export default TableHeader;
