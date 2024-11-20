import React, { useContext, useState } from "react";
import "../css/Login.css";
import CloseEye from "./CloseEye";
import OpenEye from "./OpenEye";
import { useNavigate } from "react-router";
import Arrow from "./Arrow";
import { LoginContext } from "../Context/LoginContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setLogIn, setCurrentUser, currentUser } = useContext(LoginContext);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // Error state for login issues
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      setError("");
      setLogIn(true);
      setCurrentUser({ ...currentUser, user });
      navigate("/");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  const navigateToSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="form_login-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login In 😎</h1>

        <div className="login_container">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className={`login_container-input ${error && "error"}`}
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="login_container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className={`login_container-input ${error && "error"}`}
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {showPassword ? (
            <CloseEye
              handleClick={togglePasswordVisibility}
              className={"logo_register"}
            />
          ) : (
            <OpenEye
              handleClick={togglePasswordVisibility}
              className={"logo_register logo_color"}
            />
          )}
        </div>
        {error && <div className="error_message">{error}</div>}
        <div className="login_container">
          <div className="login-inner_container">
            <button type="submit" className="login_btn">
              Login
            </button>
            <button
              type="button"
              className="login_btn"
              onClick={navigateToSignUp}>
              Sign Up <Arrow />
            </button>
          </div>
          <a href="#" className="reset_password">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
