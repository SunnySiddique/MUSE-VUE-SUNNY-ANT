import { Avatar, Button, Card, Col, Row } from "antd";
import "./ProfileProject.css";

import HouseImage1 from "../../../assets/popoverImage/home-decor-1.jpeg";
import HouseImage2 from "../../../assets/popoverImage/home-decor-2.jpeg";
import HouseImage3 from "../../../assets/popoverImage/home-decor-3.jpeg";
import ProfileUpload from "./ProfileUplaod";

const ProfileProject = () => {
  return (
    <>
      <Row gutter={24}>
        <Col
          className="gutter-row"
          xxl={24}
          xl={24}
          lg={24}
          sm={24}
          md={24}
          xs={24}
        >
          <Card className="box-shadow" style={{ padding: "24px" }}>
            <div className="profile-project-main">
              <div className="profile-project-title">
                <h6>Projects</h6>
                <p>Architects design houses</p>
              </div>
              <Row gutter={[12, 12]}>
                <Col
                  className="gutter-row"
                  xxl={6}
                  xl={6}
                  lg={6}
                  md={24}
                  sm={24}
                  xs={24}
                >
                  <div className="profile-projects-img-main">
                    <div className="profile-projects-img">
                      <img src={HouseImage1} alt="" />
                    </div>
                    <div className="profile-title-tag">Project #1</div>
                    <div className="profile-content">
                      <h5>Modern</h5>
                      <p>
                        As Uber works through a huge amount of internal
                        management turmoil.
                      </p>
                    </div>
                    <div className="profile-img-buttons">
                      <div className="profile-trnasparent-button">
                        <Button>
                          <span>VIEW PROJECT</span>
                        </Button>
                      </div>
                      <div className="profile-avatars">
                        <Avatar.Group size="small">
                          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-1.jpg" />
                          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-4.jpg" />
                          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-2.jpg" />
                          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg" />
                        </Avatar.Group>
                      </div>
                    </div>
                  </div>
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
                  <div className="profile-projects-img-main">
                    <div className="profile-projects-img">
                      <img src={HouseImage2} alt="" />
                    </div>
                    <div className="profile-title-tag">Project #2</div>
                    <div className="profile-content">
                      <h5>Scandinavian</h5>
                      <p>
                        Music is something that every person has his or her own
                        specific opinion about.
                      </p>
                    </div>
                    <div className="profile-img-buttons">
                      <div className="profile-trnasparent-button">
                        <Button>
                          <span>VIEW PROJECT</span>
                        </Button>
                      </div>
                      <div className="profile-avatars">
                        <Avatar.Group size="small">
                          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-1.jpg" />
                          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-4.jpg" />
                          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-2.jpg" />
                          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg" />
                        </Avatar.Group>
                      </div>
                    </div>
                  </div>
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
                  <div className="profile-projects-img-main">
                    <div className="profile-projects-img">
                      <img src={HouseImage3} alt="" />
                    </div>
                    <div className="profile-title-tag">Project #3</div>
                    <div className="profile-content">
                      <h5>Different</h5>
                      <p>
                        Different people have different taste, and various types
                        of music, Zimbali Resort.
                      </p>
                    </div>
                    <div className="profile-img-buttons">
                      <div className="profile-trnasparent-button">
                        <Button>
                          <span>VIEW PROJECT</span>
                        </Button>
                      </div>
                      <div className="profile-avatars">
                        <Avatar.Group size="small">
                          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-1.jpg" />
                          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-4.jpg" />
                          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-2.jpg" />
                          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg" />
                        </Avatar.Group>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col
                  className="gutter-row border"
                  xxl={6}
                  xl={6}
                  lg={6}
                  md={24}
                  sm={24}
                  xs={24}
                >
                  <ProfileUpload />
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProfileProject;
