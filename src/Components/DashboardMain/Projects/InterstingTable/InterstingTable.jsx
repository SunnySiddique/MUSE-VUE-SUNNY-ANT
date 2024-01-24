import { DownloadOutlined } from "@ant-design/icons";
import { Avatar, Button, Table } from "antd";
import "./InstrestingTable.css";

const dataSource = [
  {
    key: "1",
    companies: (
      <>
        <h5 className="row-title">Soft UI Shopify Version</h5>
      </>
    ),
    members: (
      <>
        <Avatar.Group>
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg"
          />
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-2.jpg"
          />
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg"
          />
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-4.jpg"
          />
        </Avatar.Group>
      </>
    ),
    budget: (
      <>
        <span className="budget-title">$14,000</span>
      </>
    ),
    completion: (
      <>
        <span className="progress-title">60</span>
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
      </>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-shopify.svg",
  },
  {
    key: "2",
    companies: (
      <>
        <h5 className="row-title"> Progress Track</h5>
      </>
    ),
    members: (
      <>
        <Avatar.Group>
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg"
          />
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-2.jpg"
          />
        </Avatar.Group>
      </>
    ),
    budget: (
      <>
        <span className="budget-title">$3,000 </span>
      </>
    ),
    completion: (
      <>
        <span className="progress-title">10</span>
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
      </>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-atlassian.svg",
  },
  {
    key: "3",
    companies: (
      <>
        <h5 className="row-title"> Fix Platform Errors</h5>
      </>
    ),
    members: (
      <>
        <Avatar.Group>
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg"
          />
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-2.jpg"
          />
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg"
          />
        </Avatar.Group>
      </>
    ),
    budget: (
      <>
        <span className="budget-title">Not Set</span>
      </>
    ),
    completion: (
      <>
        <span className="progress-title">100</span>
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
      </>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-slack.svg",
  },
  {
    key: "4",
    companies: (
      <>
        <h5 className="row-title"> Launch new Mobile App</h5>
      </>
    ),
    members: (
      <>
        <Avatar.Group>
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg"
          />
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-2.jpg"
          />
        </Avatar.Group>
      </>
    ),
    budget: (
      <>
        <span className="budget-title">$20,600</span>
      </>
    ),
    completion: (
      <>
        <span className="progress-title">100</span>
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
      </>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-spotify.svg",
  },
  {
    key: "5",
    companies: (
      <>
        <h5 className="row-title"> Add the New Landing Page</h5>
      </>
    ),
    members: (
      <>
        <Avatar.Group>
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg"
          />
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-2.jpg"
          />
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg"
          />
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-4.jpg"
          />
        </Avatar.Group>
      </>
    ),
    budget: (
      <>
        <span className="budget-title">$4,000 </span>
      </>
    ),
    completion: (
      <>
        <span className="progress-title">80</span>
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
      </>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-jira.svg",
  },
  {
    key: "6",
    companies: (
      <>
        <h5 className="row-title"> Redesign Online Store</h5>
      </>
    ),
    members: (
      <>
        <Avatar.Group>
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg"
          />
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-2.jpg"
          />
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg"
          />
          <Avatar
            size="small"
            className="avatars"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-4.jpg"
          />
        </Avatar.Group>
      </>
    ),
    budget: (
      <>
        <span className="budget-title">$2,000 </span>
      </>
    ),
    completion: (
      <>
        <span className="progress-title">Cancelled</span>
        <div className="ant-progress-outer">
          <div className="ant-progress-inner">
            <div
              className="ant-progress-bg"
              style={{
                width: "80%",
                height: "3px",
                borderRadius: "100px",
                background: "#f5222d",
              }}
            ></div>
          </div>
        </div>
      </>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-invision.svg",
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
        <span className="table-title">MEMBERS</span>
      </>
    ),
    dataIndex: "members",
    key: "members",
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
        <span className="table-title">COMPLETION</span>
      </>
    ),
    dataIndex: "completion",
    key: "completion",
  },
];

const InterstingTable = () => {
  return (
    <>
      <Table scroll={{x: true}} dataSource={dataSource} columns={columns} pagination={false} />
      <div className="ant-button">
        <Button size="large" type="dashed" icon={<DownloadOutlined />} style={{width: "100%"}}>
          Upload New Project
        </Button>
      </div>
    </>
  );
};

export default InterstingTable;
