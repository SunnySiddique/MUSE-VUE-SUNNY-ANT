import { Card, Col, Row } from "antd";
import ClomunAndLineChart from "./Chart/ClomunAndLineChart";
import LineChart from "./Chart/LineChart";
import "./SalesOverview.css";

const SalesOverview = () => {
  return (
    <>
      <main>
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
            <Card className="box-shadow">
              <div className="colmun-chart" style={{padding: "24px"}}>
                <ClomunAndLineChart />
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
            <Card className="box-shadow">
              <div className="main-chart" style={{padding: "24px"}}>
              <div className="main-chart-title">
                <div className="salse-content">
                  <h6>Sales Overview</h6>
                  <p>
                    than last year <small>+20%</small>
                  </p>
                </div>
                <div className="main-border-color">
                  <div className="border-color">
                    <div className="blue-color"></div>
                    <span>Traffic</span>
                  </div>
                  <div className="border-color">
                    <div className="pink-color"></div>
                    <span>Sales</span>
                  </div>
                </div>
              </div>
              <div className="LineChart">
                <LineChart />
              </div>
              </div>
            </Card>
          </Col>
        </Row>
      </main>
    </>
  );
};

export default SalesOverview;
