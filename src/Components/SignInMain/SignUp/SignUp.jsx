import { Button, Form, Input, Spin } from "antd";
import Card from "antd/es/card/Card";
import "./SignUp.css";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleLogo from "../../../assets/popoverImage/Google__G__Logo.webp";
import AppleLogo from "../../../assets/popoverImage/logo-apple.svg";
import FacebookLogo from "../../../assets/popoverImage/logos-facebook.svg";
import { useAuthentication } from "../../../context/FirebaseContext";
import { isStrongPassword, isValidEmail } from "../../Validation";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const {
    signUpUserWithEmailAndPassword,
    signInWithGoogle,
    currentUser,
    displayName,
    setDisplayName,
  } = useAuthentication();
  const navigate = useNavigate();

  const onFinish = async () => {
    const emptyFields = [];
    if (!displayName) emptyFields.push("Name");
    if (!formData.email) emptyFields.push("Email");
    if (!formData.password) emptyFields.push("Password");
    if (!formData.confirmPassword) emptyFields.push("Confirm Password");

    // Show error message for empty fields
    if (emptyFields.length > 0) {
      const errorMessage = `Please fill in the following fields: ${emptyFields.join(
        ", "
      )}`;
      toast.error(errorMessage);
      return; // Stop further execution if there are empty fields
    }

    // Validate email
    const emailError = isValidEmail(formData.email);
    if (emailError) {
      toast.error(emailError); // Show specific email error
      return; // Stop further execution if there's an email error
    }

    // Validate password
    const passwordError = isStrongPassword(formData.password);
    if (passwordError) {
      toast.error(passwordError); // Show specific password error
      return; // Stop further execution if there's a password error
    }

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setIsLoading(true);
      await signUpUserWithEmailAndPassword(
        formData.email,
        formData.password,
        displayName
      );
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const SignWithGoogle = async () => {
    await signInWithGoogle();
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    }
  }, [currentUser, navigate]);

  return (
    <Spin size="large" spinning={isLoading}>
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
                  <Button className="logo-button" onClick={SignWithGoogle}>
                    <img width={20} src={GoogleLogo} alt="" />
                  </Button>
                </div>
                <span className="or">Or</span>

                <div className="inputs">
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                  >
                    <Form.Item name="name">
                      <Input
                        onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName}
                        size="middle"
                        placeholder="Name"
                        name="name"
                      />
                    </Form.Item>
                    <Form.Item name="email">
                      <Input
                        onChange={handleChange}
                        value={formData.email}
                        size="middle"
                        placeholder="Email"
                        name="email"
                      />
                    </Form.Item>
                    <Form.Item name="password">
                      <Input.Password
                        onChange={handleChange}
                        value={formData.password}
                        size="middle"
                        placeholder="Password"
                        name="password"
                      />
                    </Form.Item>
                    <Form.Item name="confirmPassword">
                      <Input.Password
                        onChange={handleChange}
                        value={formData.confirmPassword}
                        size="middle"
                        placeholder="Password"
                        name="confirmPassword"
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
