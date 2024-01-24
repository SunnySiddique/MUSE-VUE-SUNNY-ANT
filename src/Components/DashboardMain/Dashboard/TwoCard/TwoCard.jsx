import { Card, Col, Row } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";
import bulitImage from "../../../../assets/popoverImage/info-card-1.jpg";
import "./TwoCard.css";

const TwoCard = () => {
  return (
    <>
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
          <Card className="box-shadow" style={{ padding: "24px" }}>
            <div className="Bulit-content-main">
              <div className="bulit-title">
                <h5>Built by developers</h5>
                <h4>Muse Dashboard for Ant Design</h4>
                <p>
                  From colors, cards, typography to complex elements, you will
                  find the full documentation.
                </p>
              </div>
              <div className="bulit-img">
                <img src={bulitImage} alt="" />
              </div>
            </div>
            <div className="a-tag">
              <a href="#">
                Read More <MdKeyboardArrowRight />{" "}
              </a>
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
          <Card
            className="box-shadow"
            style={{ padding: "24px", height: "297px" }}
          >
            <div className="main-work-content">
              <div className="wor-title">
                <h5>Work with the best</h5>
                <p>
                  Wealth creation is an evolutionarily recent positive-sum game.
                  It is all about who take the opportunity first.
                </p>
              </div>
              <div className="a-tags">
                <a href="#">
                  Read More <MdKeyboardArrowRight />
                </a>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TwoCard;
