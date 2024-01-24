import { DownloadOutlined } from "@ant-design/icons";
import { Avatar, Button, Table } from "antd";
import { MdModeEdit } from "react-icons/md";

const dataSource = [
  {
    key: "1",
    companies: (
      <>
        <h5 className="row-title">Spotify Version</h5>
      </>
    ),
    status: (
      <>
        <span
          className="working-title"
          style={{ fontSize: "12px", fontWeight: "600", color: "#8c8c8c" }}
        >
          working
        </span>
      </>
    ),
    budget: (
      <>
        <span className="budget-title">$14,000</span>
      </>
    ),
    completion: (
      <div
        className="progress-main"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <span className="progress-title">60%</span>
        <div className="ant-progress-outer">
          <div className="ant-progress-inner">
            <div
              className="ant-progress-bg"
              style={{
                width: "60%",
                height: "3px",
                borderRadius: "100px",
                background: "#1890ff",
              }}
            ></div>
          </div>
        </div>
      </div>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-spotify.svg",
    editIcon: (
      <>
        <span>
          <MdModeEdit
            style={{ color: "#8c8c8c", fontSize: "20px", cursor: "pointer" }}
          />
        </span>
      </>
    ),
  },
  {
    key: "2",
    companies: (
      <>
        <h5 className="row-title">Progress Track</h5>
      </>
    ),
    status: (
      <>
        <span
          className="working-title"
          style={{ fontSize: "12px", fontWeight: "600", color: "#8c8c8c" }}
        >
          working
        </span>
      </>
    ),
    budget: (
      <>
        <span className="budget-title">$3,000</span>
      </>
    ),
    completion: (
      <div
        className="progress-main"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <span className="progress-title">10%</span>
        <div className="ant-progress-outer">
          <div className="ant-progress-inner">
            <div
              className="ant-progress-bg"
              style={{
                width: "10%",
                height: "3px",
                borderRadius: "100px",
                background: "#1890ff",
              }}
            ></div>
          </div>
        </div>
      </div>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-atlassian.svg",
    editIcon: (
      <>
        <span>
          <MdModeEdit
            style={{ color: "#8c8c8c", fontSize: "20px", cursor: "pointer" }}
          />
        </span>
      </>
    ),
  },
  {
    key: "3",
    companies: (
      <>
        <h5 className="row-title">Jira Platfor Errors</h5>
      </>
    ),
    status: (
      <>
        <span
          className="working-title"
          style={{ fontSize: "12px", fontWeight: "600", color: "#8c8c8c" }}
        >
          done
        </span>
      </>
    ),
    budget: (
      <>
        <span className="budget-title">Not Set</span>
      </>
    ),
    completion: (
      <div
        className="progress-main"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <span className="progress-title">100%</span>
        <div className="ant-progress-outer">
          <div className="ant-progress-inner">
            <div
              className="ant-progress-bg"
              style={{
                width: "100%",
                height: "3px",
                borderRadius: "100px",
                background: "#52c41a",
              }}
            ></div>
          </div>
        </div>
      </div>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-slack.svg",
    editIcon: (
      <>
        <span>
          <MdModeEdit
            style={{ color: "#8c8c8c", fontSize: "20px", cursor: "pointer" }}
          />
        </span>
      </>
    ),
  },
  {
    key: "4",
    companies: (
      <>
        <h5 className="row-title">Launcy new Mobile Appp</h5>
      </>
    ),
    status: (
      <>
        <span
          className="working-title"
          style={{ fontSize: "12px", fontWeight: "600", color: "#8c8c8c" }}
        >
          canceled
        </span>
      </>
    ),
    budget: (
      <>
        <span className="budget-title">$20,600</span>
      </>
    ),
    completion: (
      <div
        className="progress-main"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <span className="progress-title">50%</span>
        <div className="ant-progress-outer">
          <div className="ant-progress-inner">
            <div
              className="ant-progress-bg"
              style={{
                width: "50%",
                height: "3px",
                borderRadius: "100px",
                background: "#f5222d",
              }}
            ></div>
          </div>
        </div>
      </div>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-spotify.svg",
    editIcon: (
      <>
        <span>
          <MdModeEdit
            style={{ color: "#8c8c8c", fontSize: "20px", cursor: "pointer" }}
          />
        </span>
      </>
    ),
  },
  {
    key: "5",
    companies: (
      <>
        <h5 className="row-title">Web Dev</h5>
      </>
    ),
    status: (
      <>
        <span
          className="working-title"
          style={{ fontSize: "12px", fontWeight: "600", color: "#8c8c8c" }}
        >
          working
        </span>
      </>
    ),
    budget: (
      <>
        <span className="budget-title">$4,000</span>
      </>
    ),
    completion: (
      <div
        className="progress-main"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <span className="progress-title">80%</span>
        <div className="ant-progress-outer">
          <div className="ant-progress-inner">
            <div
              className="ant-progress-bg"
              style={{
                width: "80%",
                height: "3px",
                borderRadius: "100px",
                background: "#1890ff",
              }}
            ></div>
          </div>
        </div>
      </div>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-webdev.svg",
    editIcon: (
      <>
        <span>
          <MdModeEdit
            style={{ color: "#8c8c8c", fontSize: "20px", cursor: "pointer" }}
          />
        </span>
      </>
    ),
  },
  {
    key: "6",
    companies: (
      <>
        <h5 className="row-title">Redesgin Online Store</h5>
      </>
    ),
    status: (
      <>
        <span
          className="working-title"
          style={{ fontSize: "12px", fontWeight: "600", color: "#8c8c8c" }}
        >
          canceled
        </span>
      </>
    ),
    budget: (
      <>
        <span className="budget-title">$2,00</span>
      </>
    ),
    completion: (
      <div
        className="progress-main"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <span className="progress-title">0%</span>
        <div className="ant-progress-outer">
          <div className="ant-progress-inner">
            <div
              className="ant-progress-bg"
              style={{
                width: "0%",
                height: "3px",
                borderRadius: "100px",
              }}
            ></div>
          </div>
        </div>ta
      </div>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-invision.svg",
    editIcon: (
      <>
        <span>
          <MdModeEdit
            style={{ color: "#8c8c8c", fontSize: "20px", cursor: "pointer" }}
          />
        </span>
      </>
    ),
  },
];

const columns = [
  {
    title: (
      <>
        <span className="table-title">COMPANIES</span>
      </>
    ),
    dataIndex: "companies",
    key: "companies",
    render: (text, record) => (
      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <Avatar src={record.avatar} /> {text}
      </span>
    ),
  },
  {
    title: (
      <>
        <span className="table-title">BUDGET</span>
      </>
    ),
    dataIndex: "budget",
    key: "budget",
  },
  {
    title: (
      <>
        <span className="table-title">STATUS</span>
      </>
    ),
    dataIndex: "status",
    key: "status",
  },
  {
    title: (
      <>
        <span className="table-title">COMPLETION</span>
      </>
    ),
    dataIndex: "completion",
    key: "completion",
  },
  {
    title: (
      <>
        <span className="table-title"></span>
      </>
    ),
    dataIndex: "editIcon",
    key: "editIcon",
  },
];

const ProjectsTable = () => {
  return (
    <>
      <Table
        scroll={{ x: true }}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
      <div className="ant-button">
        <Button
          size="large"
          type="dashed"
          icon={<DownloadOutlined />}
          style={{ width: "100%" }}
        >
          Upload New Project
        </Button>
      </div>
    </>
  );
};

export default ProjectsTable;
