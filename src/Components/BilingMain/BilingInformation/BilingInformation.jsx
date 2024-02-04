import { Card, Col, Row } from "antd";
import "./BilingInformation.css";

const BilingInformation = () => {
  return (
    <>
      <Row gutter={24}>
        <Col
          className="gutter-row"
          xxl={16}
          xl={16}
          lg={16}
          md={24}
          sm={24}
          xs={24}
          style={{marginBottom: "20px"}}
        >
          <Card className="box-shadow" style={{ padding: "24px" }}>
            <div className="biling-information-main">
              <div className="biling-title">
                <h6>Billing Information</h6>
              </div>
              <div className="edit-delete-main">
                <div className="edit-delete-second-main">
                  <div className="edit-title">
                    <div className="title">Oliver Liam</div>
                  </div>
                  <div className="edit-delete-icon-main">
                    <div className="edit-delete-icon">
                      <button type="button">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
                            fill="#f5222d"
                            className="fill-danger"
                          ></path>
                        </svg>
                        <span>DELETE</span>
                      </button>
                    </div>
                    {/* one */}
                    <div className="edit-delete-icon">
                      <button type="button">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
                            fill="#8c8c8c"
                            className="fill-muted"
                          ></path>
                          <path
                            d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
                            fill="#8c8c8c"
                            className="fill-muted"
                          ></path>
                        </svg>
                        <span style={{ color: "#8c8c8c" }}>EDIT</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* one */}
                <div className="user-detail">
                  <span className="user-detail-one">Company Name</span>
                  <span className="antitem"> Viking Burrito </span>
                </div>
                {/* two */}
                <div className="user-details-main">
                  <div className="user-detail">
                    <span className="user-detail-one">Company Name</span>
                    <span className="antitem"> Viking Burrito </span>
                  </div>
                  {/* three */}
                  <div className="user-detail">
                    <span className="user-detail-one">VAT Number</span>
                    <span className="antitem"> FRB1235476 </span>
                  </div>
                  {/* three */}
                </div>
              </div>
              {/* two */}
              <div className="edit-delete-main">
                <div className="edit-delete-second-main">
                  <div className="edit-title">
                    <div className="title">Lucas Harper</div>
                  </div>
                  <div className="edit-delete-icon-main">
                    <div className="edit-delete-icon">
                      <button type="button">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
                            fill="#f5222d"
                            className="fill-danger"
                          ></path>
                        </svg>
                        <span>DELETE</span>
                      </button>
                    </div>
                    {/* one */}
                    <div className="edit-delete-icon">
                      <button type="button">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
                            fill="#8c8c8c"
                            className="fill-muted"
                          ></path>
                          <path
                            d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
                            fill="#8c8c8c"
                            className="fill-muted"
                          ></path>
                        </svg>
                        <span style={{ color: "#8c8c8c" }}>EDIT</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* one */}
                <div className="user-details-main">
                  <div className="user-detail">
                    <span className="user-detail-one">Company Name</span>
                    <span className="antitem"> Stone Tech Zone</span>
                  </div>
                  {/* one */}
                  <div className="user-detail">
                    <span className="user-detail-one">Email Address</span>
                    <span className="antitem">lucas@syone-tech.com</span>
                  </div>
                  {/* two */}

                  <div className="user-detail">
                    <span className="user-detail-one">VAT Number</span>
                    <span className="antitem"> FRB1235476 </span>
                  </div>
                  {/* three */}
                </div>
              </div>
              {/* three */}
              <div className="edit-delete-main">
                <div className="edit-delete-second-main">
                  <div className="edit-title">
                    <div className="title">Oliver Liam</div>
                  </div>
                  <div className="edit-delete-icon-main">
                    <div className="edit-delete-icon">
                      <button type="button">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
                            fill="#f5222d"
                            className="fill-danger"
                          ></path>
                        </svg>
                        <span>DELETE</span>
                      </button>
                    </div>
                    {/* one */}
                    <div className="edit-delete-icon">
                      <button type="button">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
                            fill="#8c8c8c"
                            className="fill-muted"
                          ></path>
                          <path
                            d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
                            fill="#8c8c8c"
                            className="fill-muted"
                          ></path>
                        </svg>
                        <span style={{ color: "#8c8c8c" }}>EDIT</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* one */}
                <div className="user-detail">
                  <span className="user-detail-one">Company Name</span>
                  <span className="antitem"> Viking Burrito </span>
                </div>
                {/* two */}
                <div className="user-details-main">
                  <div className="user-detail">
                    <span className="user-detail-one">Company Name</span>
                    <span className="antitem"> Viking Burrito </span>
                  </div>
                  {/* three */}
                  <div className="user-detail">
                    <span className="user-detail-one">VAT Number</span>
                    <span className="antitem"> FRB1235476 </span>
                  </div>
                  {/* three */}
                </div>
              </div>
            </div>
          </Card>
        </Col>
        {/* Col 2 */}

        <Col
          className="gutter-row"
          xxl={8}
          xl={8}
          lg={8}
          md={24}
          sm={24}
          xs={24}
        >
          <Card className="box-shadow" style={{ padding: "24px" }}>
            <div className="transactions-main">
              <div className="transactions-header">
                <div className="transaction-title">
                  <h6>Your Transactions</h6>
                </div>
                <div className="transaction-cleander">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
                      fill="#8c8c8c"
                      className="fill-muted"
                    ></path>
                  </svg>
                  <span>23 - 30 March 2021</span>
                </div>
              </div>
              {/* main section staart here */}
              <div className="newst-main-section">
                <div className="newst-title">
                  <h6>NEWEST</h6>
                </div>
                <div
                  className="main-netfix"
                  style={{ marginBottom: "30px", marginTop: "10px" }}
                >
                  <div className="netfix-title">
                    <div className="icon-bg">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5 10C5 9.44772 5.44772 9 6 9L14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11L6 11C5.44772 11 5 10.5523 5 10Z"
                          className="fill-danger"
                          fill="red"
                        ></path>
                      </svg>
                    </div>
                    <div className="netfix-content">
                      <h4>Netflix</h4>
                      <div className="small-title">
                        27 March 2021, at 12:30 PM
                      </div>
                    </div>
                  </div>
                  <div className="dorol-titles">
                    <span>- $2,500</span>
                  </div>
                </div>
                {/* two */}
                <div className="main-netfix" style={{ marginBottom: "30px" }}>
                  <div className="netfix-title">
                    <div
                      className="icon-bg"
                      style={{ background: "rgb(237, 249, 231)" }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44771 3.44772 9 4 9L9 9V4C9 3.44772 9.44772 3 10 3Z"
                          className="fill-success"
                          fill="#52c41a"
                        ></path>
                      </svg>
                    </div>
                    <div className="netfix-content">
                      <h4>Apple</h4>
                      <div className="small-title">
                        27 March 2021, at 04:30 AM
                      </div>
                    </div>
                  </div>
                  <div className="dorol-titles">
                    <span style={{ color: "#52c41a" }}>+ $2,000</span>
                  </div>
                </div>
                {/* three */}
              </div>
              {/* one */}
              <div className="newst-main-section">
                <div className="newst-title">
                  <h6>YESTERDAY</h6>
                </div>
                <div className="main-netfix" style={{ marginBottom: "30px" }}>
                  <div className="netfix-title">
                    <div
                      className="icon-bg"
                      style={{ background: "rgb(237, 249, 231)" }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44771 3.44772 9 4 9L9 9V4C9 3.44772 9.44772 3 10 3Z"
                          className="fill-success"
                          fill="#52c41a"
                        ></path>
                      </svg>
                    </div>
                    <div className="netfix-content">
                      <h4>Stripe</h4>
                      <div className="small-title">
                        26 March 2021, at 12:30 AM
                      </div>
                    </div>
                  </div>
                  <div className="dorol-titles">
                    <span>+ $750</span>
                  </div>
                </div>
                {/* two */}
                <div className="main-netfix" style={{ marginBottom: "30px" }}>
                  <div className="netfix-title">
                    <div
                      className="icon-bg"
                      style={{ background: "rgb(237, 249, 231)" }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44771 3.44772 9 4 9L9 9V4C9 3.44772 9.44772 3 10 3Z"
                          className="fill-success"
                          fill="#52c41a"
                        ></path>
                      </svg>
                    </div>
                    <div className="netfix-content">
                      <h4>HubSpot</h4>
                      <div className="small-title">
                        26 March 2021, at 11:30 AM
                      </div>
                    </div>
                  </div>
                  <div className="dorol-titles">
                    <span style={{ color: "#52c41a" }}>+ $1,050</span>
                  </div>
                </div>
                {/* three */}
              </div>
              {/* two */}

              <div className="main-netfix" style={{ marginBottom: "30px" }}>
                <div className="netfix-title">
                  <div
                    className="icon-bg"
                    style={{ background: "rgb(237, 249, 231)" }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44771 3.44772 9 4 9L9 9V4C9 3.44772 9.44772 3 10 3Z"
                        className="fill-success"
                        fill="#52c41a"
                      ></path>
                    </svg>
                  </div>
                  <div className="netfix-content">
                    <h4>Apple</h4>
                    <div className="small-title">
                      27 March 2021, at 04:30 AM
                    </div>
                  </div>
                </div>
                <div className="dorol-titles">
                  <span style={{ color: "#52c41a" }}>+ $2,000</span>
                </div>
              </div>

              <div className="newst-main-section">
                <div className="main-netfix" style={{ marginBottom: "30px" }}>
                  <div className="netfix-title">
                    <div
                      className="icon-bg"
                      style={{ background: "rgb(237, 249, 231)" }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44771 3.44772 9 4 9L9 9V4C9 3.44772 9.44772 3 10 3Z"
                          className="fill-success"
                          fill="#52c41a"
                        ></path>
                      </svg>
                    </div>
                    <div className="netfix-content">
                      <h4>Creative Tim</h4>
                      <div className="small-title">
                        26 March 2021, at 07:30 AM
                      </div>
                    </div>
                  </div>
                  <div className="dorol-titles">
                    <span>+ $2,400</span>
                  </div>
                </div>
                {/* two */}
                <div className="main-netfix">
                  <div className="netfix-title">
                    <div
                      className="icon-bg"
                      style={{ background: "rgb(255, 252, 231)" }}
                    >
                      <strong style={{ color: "#fadb14" }}> ! </strong>
                    </div>
                    <div className="netfix-content">
                      <h4>Webflow</h4>
                      <div className="small-title">
                        26 March 2021, at 04:00 AM
                      </div>
                    </div>
                  </div>
                  <div className="dorol-titles">
                    <span style={{ color: "#fadb14", fontSize: "13px" }}>
                      Pending
                    </span>
                  </div>
                </div>
                {/* three */}
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BilingInformation;
