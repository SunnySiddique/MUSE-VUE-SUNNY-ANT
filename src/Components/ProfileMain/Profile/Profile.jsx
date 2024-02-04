import { Card, Radio } from "antd";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import "./Profile.css";

import ProfileImage from "../../../assets/popoverImage/face-1.jpg";
import PlatFormSetting from "../PlatFormSettting/PlatFormSetting";
import ProfileProject from "../ProfileProject/ProfileProject";

const Profile = () => {
  return (
    <>
      <div className="profile-main">
        <ProfileHeader />
      </div>
      <div className="profile-card">
        <div className="card-profile">
          <Card
            style={{
              padding: "16px 16px",
            }}
            className="box-shadow"
          >
            <div className="profile-content-main">
              <div className="profile-img">
                <img src={ProfileImage} alt="" />
                <span>
                  <h4>Sarah Jacob</h4>
                  <p>CEO / Co-Founder</p>
                </span>
              </div>
              <div className="radio-buttons">
                <Radio.Group
                  optionType="button"
                  options={[
                    {
                      label: "OVERVIEW",
                      value: "OVERVIEW",
                    },
                    {
                      label: "TEAMS",
                      value: "TEAMS",
                    },
                    {
                      label: "PROJECTS",
                      value: "PROJECTS",
                    },
                  ]}
                ></Radio.Group>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <main>
        <section style={{marginTop: "80px"}}>
          <div className="platform-setting">
            <PlatFormSetting />
          </div>
        </section>
        <section className="section">
          <div className="profile-project">
            <ProfileProject />
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
