import { Alert, Button, Form, Input, Spin } from "antd";
import Card from "antd/es/card/Card";
import "./SignUp.css";

import { updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogo from "../../../assets/popoverImage/Google__G__Logo.webp";
import AppleLogo from "../../../assets/popoverImage/logo-apple.svg";
import FacebookLogo from "../../../assets/popoverImage/logos-facebook.svg";
import { firebaseAuth, useFirebase } from "../../../context/Firebase";


const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const firebase = useFirebase();
  const onFinish = async () => {
    try {
      setLoading(true);
      await firebase.SignUp(email, password);
      await updateProfile(firebaseAuth.currentUser, {
        displayName: name,
        photoURL: null,
      });
      setLoading(false);
    } catch (error) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 50000);
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const signGoole = async () => {
    await firebase.SignupWithGoogle();
  };

  // const handleSignUp = async () => {

  // };

  useEffect(() => {
    if (firebase.LogedIn) {
      navigate("/home");
    }
  }, [firebase, navigate]);

  return (
    <Spin size="large" spinning={loading}>
      <main className="bg-img">
        <section>
          <div className="sign-main">
            <div className="sign-content">
              <h1>Sign Up</h1>
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
                <div className="page-content">
                  <h5>Register With</h5>
                </div>
                <div className="buttons-page">
                  <Button className="logo-button">
                    <img width={20} src={FacebookLogo} alt="" />
                  </Button>
                  <Button className="logo-button">
                    <img width={20} src={AppleLogo} alt="" />
                  </Button>
                  <Button className="logo-button" onClick={signGoole}>
                    <img width={20} src={GoogleLogo} alt="" />
                  </Button>
                </div>
                <span className="or">Or</span>

                <div className="error" style={{ margin: "20px 0" }}>
                  {showAlert && ( // Show the alert only when showAlert is true
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
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        size="middle"
                        placeholder="Name"
                      />
                    </Form.Item>
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
                          SIGN UP
                        </Button>
                      </div>
                    </Form.Item>
                    <div className="footer-button">
                      <p>
                        Already have an account? <Link to="/"> Login</Link>
                      </p>
                    </div>
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

export default SignIn;
