import { Alert, Button, Form, Input, Spin } from "antd";
import Card from "antd/es/card/Card";
import "../SignUp/SignUp.css";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogo from "../../../assets/popoverImage/Google__G__Logo.webp";
import AppleLogo from "../../../assets/popoverImage/logo-apple.svg";
import FacebookLogo from "../../../assets/popoverImage/logos-facebook.svg";
import { useFirebase } from "../../../context/Firebase";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const firebase = useFirebase();

  const onFinish = async () => {
    try {
      setLoading(true);
      await firebase.LogInPage(email, password);
      setLoading(false);
      setShowAlert(true);
    } catch (error) {
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      setLoading(false);
    }
  };

  const GooleWithLogn = async () => {
    try {
      await firebase.SignupWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (firebase.LogedIn) {
      navigate("/home");
    }
  }, [firebase, navigate]);

  return (
    <Spin size="large" spinning={loading} className="spin">
      <main className="bg-img">
        <section>
          <div className="sign-main">
            <div className="sign-content">
              <h1>LogIn</h1>
              <p>
                Use these awesome forms to login or create new account in your
                project for free.
              </p>
            </div>
            <div className="sign-page">
              <Card
                className="box-shadow card-page"
                style={{ padding: "24px" }}
              >
                <div className="buttons-page">
                  <Button className="logo-button">
                    <img width={20} src={FacebookLogo} alt="" />
                  </Button>
                  <Button className="logo-button">
                    <img width={20} src={AppleLogo} alt="" />
                  </Button>
                  <Button className="logo-button" onClick={GooleWithLogn}>
                    <img width={20} src={GoogleLogo} alt="" />
                  </Button>
                </div>
                <span className="or">Or</span>

                <div className="error" style={{ margin: "20px 0" }}>
                  {showAlert && (
                    <Alert
                      type="error"
                      message={firebase.err}
                      onClose={() => setShowAlert(false)} // Close the alert when onClose event occurs
                      closable
                    />
                  )}
                </div>
                <div className="inputs">
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your email!",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        size="middle"
                        placeholder="Email"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        size="middle"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <div className="input-button">
                        <Button
                          htmlType="submit"
                          type="primary"
                          style={{ width: "100%" }}
                        >
                          LOGIN
                        </Button>
                      </div>

                      <div className="footer-button">
                        <p>
                          create an account? <Link to="/signin">Signup</Link>
                        </p>
                      </div>
                    </Form.Item>
                  </Form>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </Spin>
  );
};

export default LogIn;
