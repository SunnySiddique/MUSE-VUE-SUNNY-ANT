import { Switch } from "antd";

const PlatForm = () => {
  return (
    <>
      <div className="platform-setting-main">
        <div className="platform-title">
          <h6>Platform Settings</h6>
        </div>
        <div className="platform-account-title">
          <span>ACCOUNT</span>
        </div>
        <div className="main-switchs">
          <div className="switch-main">
            <Switch defaultChecked />
            <div className="switch-title">
              <span>Email me when someone follows me</span>
            </div>
          </div>
          {/* two */}
          <div className="switch-main">
            <Switch />
            <div className="switch-title">
              <span>Email me when someone follows me</span>
            </div>
          </div>
          {/* three */}
          <div className="switch-main">
            <Switch defaultChecked />
            <div className="switch-title">
              <span>Email me when someone follows me</span>
            </div>
          </div>

          {/* second switch section */}

          <div className="platform-account-title">
            <span>APPLICATION</span>
          </div>

          {/* second switch section */}

          {/* one */}

          <div className="switch-main">
            <Switch defaultChecked />
            <div className="switch-title">
              <span>New launches and projects</span>
            </div>
          </div>

          {/* two */}

          <div className="switch-main">
            <Switch />
            <div className="switch-title">
              <span>New launches and projects</span>
            </div>
          </div>

          {/* three */}

          <div className="switch-main">
            <Switch defaultChecked />
            <div className="switch-title">
              <span>New launches and projects</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatForm;
