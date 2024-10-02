import {
  LogoutOutlined,
  MenuOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Drawer, FloatButton, Input, Popover } from "antd";
import { useContext, useState } from "react";
import { Context } from "../../../App";

import { useAuthentication } from "../../../context/FirebaseContext";
import DrawerContent from "./Drawer/DrawerContent";
import "./Header.css";
import PopoverContent from "./PopoverContent";

// eslint-disable-next-line react/prop-types
const Header = ({ title, smallTitle }) => {
  const [open, setOpen] = useState(false);
  const { setDrawerVisible } = useContext(Context);
  const { currentUser, logoutUser } = useAuthentication();

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

  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <>
      <div className="falot-button" onClick={showDrawer}>
        <FloatButton icon={<SettingOutlined />} />
      </div>
      <header>
        <div className="main-header">
          <div className="res-menu">
            <div className="header-content">
              <span className="frist-content">Pages</span> <span>/</span>{" "}
              <span className="second-content">{title}</span>
              <p className="three-content">{smallTitle}</p>
            </div>
            <div className="three-dot">
              <span onClick={showMenu}>
                <MenuOutlined />
              </span>
            </div>
          </div>
          <div className="inputs-main">
            <div className="inputs">
              <Input
                size="middle"
                prefix={<SearchOutlined />}
                type="text"
                placeholder="Type here..."
              />
            </div>

            <div className="res-icons">
              {currentUser && (
                <div className="avatar">
                  {currentUser.photoURL ? (
                    <Avatar src={currentUser.photoURL} />
                  ) : (
                    <Avatar size="large" icon={<UserOutlined />} />
                  )}
                  <h3>{currentUser && currentUser.displayName}</h3>
                </div>
              )}
              <div className="header-icons">
                <div className="SignIn-content">
                  <span onClick={handleLogout} style={{ cursor: "pointer" }}>
                    <LogoutOutlined />
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
