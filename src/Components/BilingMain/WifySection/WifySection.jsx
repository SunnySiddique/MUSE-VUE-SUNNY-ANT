import { Button, Card, Col, Divider, Row } from "antd";
import MasterCard from "../../../assets/popoverImage/mastercard-logo.webp";
import PaypalImage from "../../../assets/popoverImage/paypal-logo-2.webp";
import "./WifySection.css";

import PaypalImages from "../../../assets/popoverImage/mastercard-logo.webp";
import VisaImage from '../../../assets/popoverImage/visa-logo.webp';

const WifySection = () => {
  return (
    <>
      <Row gutter={[12, 12]}>
        <Col
          className="gutter-row"
          xxl={16}
          xl={16}
          lg={16}
          md={24}
          xs={24}
          sm={24}
        >

          <Row gutter={[12, 12]}>
            <Col
              className="gutter-row"
              xxl={12}
              xl={12}
              lg={12}
              md={24}
              sm={24}
              xs={24}
            >
              <Card className="box-shadow card-img">
                <div className="main-wify-section">
                  <div className="wify-icon">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 22.5 20.625"
                      >
                        <g id="wifi" transform="translate(0.75 0.75)">
                          <circle
                            id="Oval"
                            cx="1.5"
                            cy="1.5"
                            r="1.5"
                            transform="translate(9 16.875)"
                            fill="#fff"
                          ></circle>
                          <path
                            id="Path"
                            d="M0,1.36a6.377,6.377,0,0,1,7.5,0"
                            transform="translate(6.75 11.86)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="1.5"
                          ></path>
                          <path
                            id="Path-2"
                            data-name="Path"
                            d="M14.138,2.216A12.381,12.381,0,0,0,0,2.216"
                            transform="translate(3.431 6)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="1.5"
                          ></path>
                          <path
                            id="Path-3"
                            data-name="Path"
                            d="M0,3.294a18.384,18.384,0,0,1,21,0"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="1.5"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div className="wify-title">
                    <h5>4562 1122 4594 7852</h5>
                  </div>
                  <div className="wify-footer">
                    <div className="wify-footer-title-main">
                      <div className="wify-footer-title">
                        <p>Card Holder</p>
                        <h5>Jack Peterson</h5>
                      </div>
                      <div className="wify-footer-title">
                        <p>Expires</p>
                        <h5>11/22</h5>
                      </div>
                    </div>
                    <div className="wify-footer-img">
                      <img src={MasterCard} alt="" />
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col
              className="gutter-row"
              xxl={6}
              xl={6}
              lg={6}
              md={24}
              sm={24}
              xs={24}
            >
              <Card className="box-shadow">
                <div className="main-salary-section">
                  <div className="second-salary-main">
                    <div className="salary-icon">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <g id="bank" transform="translate(0.75 0.75)">
                            <path
                              id="Shape"
                              transform="translate(0.707 9.543)"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="1.5"
                            ></path>
                            <path
                              id="Path"
                              d="M10.25,0,20.5,9.19H0Z"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="1.5"
                            ></path>
                            <path
                              id="Path-2"
                              data-name="Path"
                              d="M0,.707H20.5"
                              transform="translate(0 19.793)"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="1.5"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                    <div className="salary-title">
                      <h5>Salary</h5>
                      <p>Belong Interactive</p>
                    </div>
                  </div>
                  <Divider />
                  <div className="salary-dorol-title">
                    <span>+$2,000</span>
                  </div>
                </div>
              </Card>
            </Col>
            <Col
              className="gutter-row"
              xxl={6}
              xl={6}
              lg={6}
              md={24}
              sm={24}
              xs={24}
            >
              <Card className="box-shadow">
                <div className="main-salary-section">
                  <div className="second-salary-main">
                    <div className="salary-icon">
                      <span>
                        <img width={30} src={PaypalImage} alt="" />
                      </span>
                    </div>
                    <div className="salary-title">
                      <h5>Paypal</h5>
                      <p>Freelance Payment</p>
                    </div>
                  </div>
                  <Divider />
                  <div className="salary-dorol-title">
                    <span>+$49,000</span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>


          <Row gutter={[12, 12]} style={{marginTop: "35px"}}>
          <Col
            className="gutter-row"
            xxl={24}
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
          >
            <Card className="box-shadow" style={{ padding: "24px" }}>
              <div className="Payment-main">
                <div className="payment-title">
                  <h6>Payment Methods</h6>
                </div>
                <div className="payment-button">
                  <button>ADD NEW CARD</button>
                </div>
              </div>
              <Row gutter={[12, 12]}>
                <Col
                  className="gutter-row"
                  xxl={12}
                  xl={12}
                  lg={12}
                  md={24}
                  sm={24}
                  xs={24}
                >
                  <Card style={{ padding: "24px" }}>
                    <div className="main-master-logo">
                      <div className="master-logo">
                        <img width={40} src={PaypalImages} alt="" />
                      </div>
                      <div className="master-content">
                        <h4>**** **** **** 7362</h4>
                      </div>
                      <div className="mastr-icon">
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
                              className="fill-gray-7"
                              fill="#8c8c8c"
                            ></path>
                            <path
                              d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
                              className="fill-gray-7"
                              fill="#8c8c8c"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col
                  className="gutter-row"
                  xxl={12}
                  xl={12}
                  lg={12}
                  md={24}
                  sm={24}
                  xs={24}
                >
                  <Card style={{ padding: "24px" }}>
                    <div className="main-master-logo">
                      <div className="master-logo">
                        <img width={40} src={VisaImage} alt="" />
                      </div>
                      <div className="master-content">
                        <h4>**** **** **** 3288</h4>
                      </div>
                      <div className="master-icon">
                        <span style={{ cursor: "pointer" }}>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
                              className="fill-gray-7"
                              fill="#8c8c8c"
                            ></path>
                            <path
                              d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
                              className="fill-gray-7"
                              fill="#8c8c8c"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        </Col>



        <Col
          className="gutter-row"
          xxl={8}
          xl={8}
          lg={8}
          md={24}
          sm={24}
          xs={24}
        >
          <Card className="gutter-row">
            <div className="Invoice-main">
              <div className="Invoice-content-main">
                <div className="Invoice-title">
                  <h6>Invoices</h6>
                </div>
                <div className="Invoice-buttons">
                  <Button type="primary">VIEW ALL</Button>
                </div>
              </div>
              <div className="Invoice-lists">
                <ul>
                  <li className="main-lists">
                    <div className="invoice-list-content">
                      <h4>March, 01, 2021</h4>
                      <div className="invoice-content-p">#MS-415646</div>
                    </div>
                    <div className="amount">$180</div>
                    <div className="action">
                      <ul>
                        <li>
                          <button>
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L9 3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 10.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
                                fill="#111827"
                              ></path>
                            </svg>
                            <span>PDF</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="Invoice-lists">
                <ul>
                  <li className="main-lists">
                    <div className="invoice-list-content">
                      <h4>March, 01, 2021</h4>
                      <div className="invoice-content-p">#MS-415646</div>
                    </div>
                    <div className="amount">$180</div>
                    <div className="action">
                      <ul>
                        <li>
                          <button>
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L9 3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 10.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
                                fill="#111827"
                              ></path>
                            </svg>
                            <span>PDF</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="Invoice-lists">
                <ul>
                  <li className="main-lists">
                    <div className="invoice-list-content">
                      <h4>March, 01, 2021</h4>
                      <div className="invoice-content-p">#MS-415646</div>
                    </div>
                    <div className="amount">$180</div>
                    <div className="action">
                      <ul>
                        <li>
                          <button>
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L9 3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 10.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
                                fill="#111827"
                              ></path>
                            </svg>
                            <span>PDF</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="Invoice-lists">
                <ul>
                  <li className="main-lists">
                    <div className="invoice-list-content">
                      <h4>March, 01, 2021</h4>
                      <div className="invoice-content-p">#MS-415646</div>
                    </div>
                    <div className="amount">$180</div>
                    <div className="action">
                      <ul>
                        <li>
                          <button>
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L9 3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 10.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
                                fill="#111827"
                              ></path>
                            </svg>
                            <span>PDF</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="Invoice-lists">
                <ul>
                  <li className="main-lists">
                    <div className="invoice-list-content">
                      <h4>March, 01, 2021</h4>
                      <div className="invoice-content-p">#MS-415646</div>
                    </div>
                    <div className="amount">$180</div>
                    <div className="action">
                      <ul>
                        <li>
                          <button>
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L9 3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 10.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
                                fill="#111827"
                              ></path>
                            </svg>
                            <span>PDF</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="Invoice-lists">
                <ul>
                  <li className="main-lists">
                    <div className="invoice-list-content">
                      <h4>March, 01, 2021</h4>
                      <div className="invoice-content-p">#MS-415646</div>
                    </div>
                    <div className="amount">$180</div>
                    <div className="action">
                      <ul>
                        <li>
                          <button>
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L9 3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 10.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
                                fill="#111827"
                              ></path>
                            </svg>
                            <span>PDF</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </Col>
        
      </Row>
    </>
  );
};

export default WifySection;
