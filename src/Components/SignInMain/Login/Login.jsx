import { Button, Form, Input, Spin } from "antd";
import Card from "antd/es/card/Card";
import "../SignUp/SignUp.css";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleLogo from "../../../assets/popoverImage/Google__G__Logo.webp";
import AppleLogo from "../../../assets/popoverImage/logo-apple.svg";
import FacebookLogo from "../../../assets/popoverImage/logos-facebook.svg";
import { useAuthentication } from "../../../context/FirebaseContext";
import { isValidEmail } from "../../Validation";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { loginInUserWithEmailAndPassword, signInWithGoogle, currentUser } =
    useAuthentication();

  const onFinish = async () => {
    const emptyFields = [];
    if (!formData.email) emptyFields.push("Email");
    if (!formData.password) emptyFields.push("Password");

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

    try {
      setIsLoading(true);
      await loginInUserWithEmailAndPassword(formData.email, formData.password);

      toast.success(
        "Successfully logged in! Enjoy your experience and check out your profile."
      );
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-credential") {
        toast.error(
          "Please check your email format and ensure your password is correct."
        );
      } else if (error.code === "auth/user-not-found") {
        toast.error(
          "No user found with this email. Please check the email you entered."
        );
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else {
        toast.error("Error logging in: " + error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const SignWithGoogle = async () => {
    await signInWithGoogle();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    }
  }, [currentUser, navigate]); // Add the dependencies
  return (
    <Spin size="large" spinning={isLoading} className="spin">
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
                        value={formData.email}
                        size="middle"
                        placeholder="Password"
                        name="password"
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
