import { DownloadOutlined } from "@ant-design/icons";
import { Avatar, Button, Table } from "antd";

const dataSource = [
  {
    key: "1",
    athor: (
      <>
        <h5 className="row-title">Michael John</h5>
        <div className="p-">
          <p>michael@mail.com</p>
        </div>
      </>
    ),

    functions: (
      <>
        <span className="budget-title">Manager</span>
        <p style={{ color: "#8c8c8c" }}>Organization</p>
      </>
    ),
    status: (
      <>
        <div
          style={{
            fontSize: "12px",
            borderRadius: "4px",
            opacity: "1",
            transition: "all .3s cubic-bezier(.78,.14,.15,.86)",
            background: "#1890ff",
            padding: "2px 12px",
            fontWeight: "700",
            color: "#fff",
            display: "inline-block",
          }}
          className="online-color"
        >
          <span>ONLINE</span>
        </div>
      </>
    ),
    employed: (
      <>
        <span style={{ color: "#8c8c8c" }}>23/04/18</span>
      </>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-2.jpg",
    edit: (
      <>
        <span
          style={{
            color: "#8c8c8c",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "12px",
          }}
        >
          Edit
        </span>
      </>
    ),
  },
  {
    key: "2",
    athor: (
      <>
        <h5 className="row-title">Alexa Liras</h5>
        <div className="p-">
          <p>alexa@mail.com</p>
        </div>
      </>
    ),

    functions: (
      <>
        <span className="budget-title">Programator</span>
        <p style={{ color: "#8c8c8c" }}>Developer</p>
      </>
    ),
    status: (
      <>
        <div
          style={{
            fontSize: "12px",
            borderRadius: "4px",
            opacity: "1",
            transition: "all .3s cubic-bezier(.78,.14,.15,.86)",
            background: "#8c8c8c",
            padding: "2px 12px",
            fontWeight: "700",
            color: "#fff",
            display: "inline-block",
          }}
          className="online-color"
        >
          <span>OFFLINE</span>
        </div>
      </>
    ),
    employed: (
      <>
        <span style={{ color: "#8c8c8c" }}>23/12/20</span>
      </>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg",
    edit: (
      <>
        <span
          style={{
            color: "#8c8c8c",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "12px",
          }}
        >
          Edit
        </span>
      </>
    ),
  },
  {
    key: "3",
    athor: (
      <>
        <h5 className="row-title">Laure Perrier</h5>
        <div className="p-">
          <p>laure@mail.com</p>
        </div>
      </>
    ),

    functions: (
      <>
        <span className="budget-title">Executive</span>
        <p style={{ color: "#8c8c8c" }}>Projects</p>
      </>
    ),
    status: (
      <>
        <div
          style={{
            fontSize: "12px",
            borderRadius: "4px",
            opacity: "1",
            transition: "all .3s cubic-bezier(.78,.14,.15,.86)",
            background: "#1890ff",
            padding: "2px 12px",
            fontWeight: "700",
            color: "#fff",
            display: "inline-block",
          }}
          className="online-color"
        >
          <span>ONLINE</span>
        </div>
      </>
    ),
    employed: (
      <>
        <span style={{ color: "#8c8c8c" }}>13/04/19</span>
      </>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-1.jpg",
    edit: (
      <>
        <span
          style={{
            color: "#8c8c8c",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "12px",
          }}
        >
          Edit
        </span>
      </>
    ),
  },
  {
    key: "4",
    athor: (
      <>
        <h5 className="row-title">Miriam Eric</h5>
        <div className="p-">
          <p>miriam@mail.com</p>
        </div>
      </>
    ),

    functions: (
      <>
        <span className="budget-title">Marketing</span>
        <p style={{ color: "#8c8c8c" }}>Organization</p>
      </>
    ),
    status: (
      <>
        <div
          style={{
            fontSize: "12px",
            borderRadius: "4px",
            opacity: "1",
            transition: "all .3s cubic-bezier(.78,.14,.15,.86)",
            background: "#1899ff",
            padding: "2px 12px",
            fontWeight: "700",
            color: "#fff",
            display: "inline-block",
          }}
          className="online-color"
        >
          <span>ONLINE</span>
        </div>
      </>
    ),
    employed: (
      <>
        <span style={{ color: "#8c8c8c" }}>03/04/21</span>
      </>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-4.jpg",
    edit: (
      <>
        <span
          style={{
            color: "#8c8c8c",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "12px",
          }}
        >
          Edit
        </span>
      </>
    ),
  },
  {
    key: "5",
    athor: (
      <>
        <h5 className="row-title">Richard Gran</h5>
        <div className="p-">
          <p>richard@mail.com</p>
        </div>
      </>
    ),

    functions: (
      <>
        <span className="budget-title">Marketing</span>
        <p style={{ color: "#8c8c8c" }}>Organization</p>
      </>
    ),
    status: (
      <>
        <div
          style={{
            fontSize: "12px",
            borderRadius: "4px",
            opacity: "1",
            transition: "all .3s cubic-bezier(.78,.14,.15,.86)",
            background: "#1899ff",
            padding: "2px 12px",
            fontWeight: "700",
            color: "#fff",
            display: "inline-block",
          }}
          className="online-color"
        >
          <span>ONLINE</span>
        </div>
      </>
    ),
    employed: (
      <>
        <span style={{ color: "#8c8c8c" }}>23/03/20</span>
      </>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-5.jpeg",
    edit: (
      <>
        <span
          style={{
            color: "#8c8c8c",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "12px",
          }}
        >
          Edit
        </span>
      </>
    ),
  },
  {
    key: "6",
    athor: (
      <>
        <h5 className="row-title">John Levi</h5>
        <div className="p-">
          <p>john@mail.com</p>
        </div>
      </>
    ),

    functions: (
      <>
        <span className="budget-title">Tester</span>
        <p style={{ color: "#8c8c8c" }}>Developer</p>
      </>
    ),
    status: (
      <>
        <div
          style={{
            fontSize: "12px",
            borderRadius: "4px",
            opacity: "1",
            transition: "all .3s cubic-bezier(.78,.14,.15,.86)",
            background: "#8c8c8c",
            padding: "2px 12px",
            fontWeight: "700",
            color: "#fff",
            display: "inline-block",
          }}
          className="online-color"
        >
          <span>OFFLINE</span>
        </div>
      </>
    ),
    employed: (
      <>
        <span style={{ color: "#8c8c8c" }}>14/04/17 </span>
      </>
    ),
    avatar:
      "https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-6.jpeg",
    edit: (
      <>
        <span
          style={{
            color: "#8c8c8c",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "12px",
          }}
        >
          Edit
        </span>
      </>
    ),
  },
];

const columns = [
  {
    title: (
      <>
        <span className="table-title">AUTHOR</span>
      </>
    ),
    dataIndex: "athor",
    key: "athor",
    render: (text, record) => (
      <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar shape="square" src={record.avatar} />
        <span>{text}</span>
      </span>
    ),
  },
  {
    title: (
      <>
        <span className="table-title">FUNCTION</span>
      </>
    ),
    dataIndex: "functions",
    key: "functions",
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
        <span className="table-title">EMPLOYED</span>
      </>
    ),
    dataIndex: "employed",
    key: "employed",
  },
  {
    title: (
      <>
        <span className="table-title"></span>
      </>
    ),
    dataIndex: "edit",
    key: "edit",
  },
];

const AuthorsTable = () => {
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

export default AuthorsTable;
