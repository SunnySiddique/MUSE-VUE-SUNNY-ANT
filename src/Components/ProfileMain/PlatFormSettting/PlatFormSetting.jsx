import { Card, Col, Row } from "antd";
import "./PaltFormSettng.css";

// import FaceImage7 from '../../../assets/popoverImage/face-3.jpeg';

import PlatForm from "../PlatForm/PlatForm";
import ProfileConversation from "../ProfileConversation/ProfileConversation";
import ProfileInformation from "../ProfileInformation/ProfileInformation";

const PlatFormSetting = () => {
  return (
    <>
      <Row gutter={[12, 12]}>
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
            <PlatForm />
          </Card>
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
          <Card className="box-shadow" style={{ padding: "24px" }}>
            <ProfileInformation />
          </Card>
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
          <Card className="box-shadow" style={{ padding: "24px" }}>
           <ProfileConversation />
          </Card>
        </Col>
      </Row>
    </>
  );
};


export default PlatFormSetting;
