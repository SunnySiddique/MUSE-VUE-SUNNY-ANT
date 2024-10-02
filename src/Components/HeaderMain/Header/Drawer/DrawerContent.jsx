import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Segmented, Switch } from "antd";
import "./DrawerContent.css";

const DrawerContent = () => {
  return (
    <>
      <div className="drawer-main" style={{ padding: "24px" }}>
        <div className="drawer-content">
          <h6>Configurator</h6>
          <p>See our dashboard options.</p>
        </div>
        <div className="Sidebar-color">
          <h6>Sidebar Color</h6>
        </div>
        <div className="Sidebar-colors-main">
          <div className="frist-color"></div>
          <div className="frist-color" style={{ background: "#b37feb" }}></div>
          <div className="frist-color" style={{ background: "#52c41a" }}></div>
          <div className="frist-color" style={{ background: "#f5222d" }}></div>
          <div className="frist-color" style={{ background: "#fadb14" }}></div>
          <div className="frist-color" style={{ background: "#141414" }}></div>
        </div>
        <div className="SideNav-content">
          <h6>Sidenav Type</h6>
          <p>Choose between 2 different sidenav types.</p>
        </div>
        <div className="button-main">
          <div className="button-1">
            <button>TRANSPARENT</button>
          </div>
          <div className="button-2">
            <button>TRANSPARENT</button>
          </div>
        </div>
        <div className="Navbar-Fixed">
          <h6>Navbar Fixed</h6>
          <Switch style={{ marginTop: "10px" }} />
        </div>
        <div className="buttons">
          <span>
            <button>FREE DOWNLOAD</button>
          </span>
          <span className="blue-button">
            <button>FREE DOWNLOAD</button>
          </span>
          <span className="transparent-button">
            <button>VIEW DOCUMENTATION</button>
          </span>
        </div>
        <div className="main-staer">
          <Segmented
            options={[
              {
                label: "List",
                value: "List",
                icon: <BarsOutlined />,
              },
              {
                label: "Kanban",
                value: "Kanban",
                icon: <AppstoreOutlined />,
              },
            ]}
          />
        </div>
        <div className="share-content">
          <h6>Thank you for sharing!</h6>
          <div className="share-button">
            <button>
              <span>
                {" "}
                <svg
                  width="15px"
                  height="15px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>{" "}
                TWEET
              </span>
            </button>
            <button>
              <span>
                {" "}
                <svg
                  width="15px"
                  height="15px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path>
                </svg>
                SHARE
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawerContent;
