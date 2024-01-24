import {
  MenuFoldOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Badge, Drawer, FloatButton, Input, Popover } from "antd";
import { useContext, useState } from "react";
import { Context } from "../../../App";
import DrawerContent from "./Drawer/DrawerContent";
import "./Header.css";
import PopoverContent from "./PopoverContent";

const UserIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
      fill="#111827"
    ></path>
  </svg>
);

// eslint-disable-next-line react/prop-types
const Header = ({ title, smallTitle }) => {
  const [open, setOpen] = useState(false);
  const { setDrawerVisible } = useContext(Context);


  const showMenu = () => {
    if (window.innerWidth < 768) {
      setDrawerVisible(true);
    }
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [opens, setOpens] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpens(newOpen);
  };
  
  return (
    <>
    <div className="falot-button" onClick={showDrawer}>
    <FloatButton icon={<SettingOutlined />} />
    </div>
      <header>
        <div className="main-header">
          <div className="header-content">
            <span className="frist-content">Pages</span> <span>/</span>{" "}
            <span className="second-content">{title}</span>
            <p className="three-content">{smallTitle}</p>
          </div>
          <div className="inputs-main">
            <div className="inputs">
              <Input
                size="large"
                prefix={<SearchOutlined />}
                type="text"
                placeholder="Type here..."
              />
            </div>
            <div className="SignIn-content">
              <span>
                {UserIcon}
                <p>Sign in</p>
              </span>
            </div>
            <div className="three-dot">
              <span onClick={showMenu}>
              <MenuFoldOutlined />
              </span>
            </div>
            <div className="Setting-Icon">
              <span onClick={showDrawer}>
                <SettingOutlined />
              </span>
              <Drawer onClose={onClose} open={open}>
                <DrawerContent />
              </Drawer>
            </div>
            <div className="Notification-Icon">
              <span>
                <Popover
                  content={<PopoverContent />}
                  trigger="click"
                  open={opens}
                  placement="bottomRight"
                  onOpenChange={handleOpenChange}
                >
                  <Badge size="default" count={4}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2C6.68632 2 4.00003 4.68629 4.00003 8V11.5858L3.29292 12.2929C3.00692 12.5789 2.92137 13.009 3.07615 13.3827C3.23093 13.7564 3.59557 14 4.00003 14H16C16.4045 14 16.7691 13.7564 16.9239 13.3827C17.0787 13.009 16.9931 12.5789 16.7071 12.2929L16 11.5858V8C16 4.68629 13.3137 2 10 2Z"
                        fill="#111827"
                      ></path>
                      <path
                        d="M10 18C8.34315 18 7 16.6569 7 15H13C13 16.6569 11.6569 18 10 18Z"
                        fill="#111827"
                      ></path>
                    </svg>
                  </Badge>
                </Popover>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
