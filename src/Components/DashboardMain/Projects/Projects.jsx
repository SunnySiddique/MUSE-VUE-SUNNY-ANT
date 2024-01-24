import { Card, Col, Radio, Row } from "antd";
import InterstingTable from "./InterstingTable/InterstingTable";
import "./Projects.css";
import TimeLines from "./TimeLine/TimeLine";

const options = [
  {
    label: "Apple",
    value: "Apple",
  },
  {
    label: "Pear",
    value: "Pear",
  },
  {
    label: "Orange",
    value: "Orange",
    title: "Orange",
  },
];

const Projects = () => {
  return (
    <>
      <Row gutter={[12, 12]}>
        <Col
          className="gutter-row"
          xxl={18}
          xl={18}
          lg={18}
          md={24}
          sm={24}
          xs={24}
        >
          <Card className="box-shadow">
            <div
              className="project-main-content"
              style={{ padding: "10px 19px" }}
            >
              <div className="project-content">
                <h6>Projects</h6>
                <p>
                  done this month <small>+40%</small>
                </p>
              </div>
              <div className="Radio-buttons">
                <Radio.Group
                  options={options}
                  optionType="button"
                ></Radio.Group>
              </div>
            </div>
            <div className="Intresting-table" style={{ marginTop: "20px" }}>
              <InterstingTable />
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
            <div className="TimeLines" style={{padding: "24px"}}>
              <div className="orders-content">
                <h6>Orders History</h6>
                <p>this month <small>+20%</small></p>
              </div>
            <TimeLines />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Projects;
