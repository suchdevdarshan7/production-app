import React, { useState } from "react";
import "../css/SignUp.css";
import OpenEye from "./OpenEye";
import CloseEye from "./CloseEye";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password should be at least 6 characters.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      localStorage.setItem(
        "users",
        JSON.stringify([...existingUsers, formData])
      );
      navigate("/");
    }
  };

  return (
    <>
      <div className="sign_main-container">
        <form
          className="sign_form"
          onSubmit={handleSubmit}
          autoComplete="false">
          <div className="inner_container">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className={errors.firstName ? "sign_input error" : "sign_input"}
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              {errors.firstName && (
                <div className="error_message">{errors.firstName}</div>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                className={errors.mobile ? "sign_input error" : "sign_input"}
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
              {errors.mobile && (
                <div className="error_message">{errors.mobile}</div>
              )}
            </div>
            <div className="relative_containers">
              <input
                type={showPassword.password ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={errors.password ? "sign_input error" : "sign_input"}
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {showPassword.password ? (
                <CloseEye
                  className="logo_password"
                  handleClick={() => togglePasswordVisibility("password")}
                />
              ) : (
                <OpenEye
                  className="logo_password"
                  handleClick={() => togglePasswordVisibility("password")}
                />
              )}
              {errors.password && (
                <div className="error_message">{errors.password}</div>
              )}
            </div>
            <div className="btn-container_left">
              <button type="submit" className="login_btn-sign">
                Register
              </button>
            </div>
          </div>

          <div className="inner_container">
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className={errors.lastName ? "sign_input error" : "sign_input"}
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
              {errors.lastName && (
                <div className="error_message">{errors.lastName}</div>
              )}
            </div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Email address"
                className={errors.email ? "sign_input error" : "sign_input"}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && (
                <div className="error_message">{errors.email}</div>
              )}
            </div>
            <div className="relative-containers">
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                className={
                  errors.confirmPassword ? "sign_input error" : "sign_input"
                }
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              {showPassword.confirmPassword ? (
                <CloseEye
                  className="logo_confirm-password"
                  handleClick={() =>
                    togglePasswordVisibility("confirmPassword")
                  }
                />
              ) : (
                <OpenEye
                  className="logo_confirm-password"
                  handleClick={() =>
                    togglePasswordVisibility("confirmPassword")
                  }
                />
              )}
              {errors.confirmPassword && (
                <div className="error_message">{errors.confirmPassword}</div>
              )}
            </div>
            <div className="btn-container_right">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="login_btn-sign">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
