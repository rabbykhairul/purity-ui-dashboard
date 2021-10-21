import React, { useState } from "react";
import { BsFacebook, BsApple, BsGoogle } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import { registerUser } from "../../services/authService";

import Button from "../commons/Button";
import Input from "../commons/Input";

const FORM_TITLE = "Register with";

const SignUpForm = () => {

  const history = useHistory();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateFormData = () => fullName && email && password;

  const handleUserRegistration = async () => {
    const userDetails = { fullName, email, password };
    const { user } = await registerUser(userDetails);

    if (user) {
      history.push("/pages/dashboard");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValidationPassed = validateFormData();

    if (formValidationPassed) {
      setFormSubmitted(true);
      handleUserRegistration();
    }
  }

  const renderAlternateRegistrationOptions = () => {
    return (
      <>
      <h2 className="color-gray-700">{FORM_TITLE}</h2>
      <div className="registration-options-container">
        <Button className="btn-alternate-registration color-gray-700">
          <BsFacebook />
        </Button>
        <Button className="btn-alternate-registration color-gray-700">
          <BsApple />
        </Button>
        <Button className="btn-alternate-registration color-gray-700">
          <BsGoogle />
        </Button>
      </div>
      <p className="color-gray-700">or</p>
      </>
    )
  }

  const renderFormFooter = () => {
    return (
      <p className="form-footer color-gray-400">Already have an account? <Link to="/login"><span className="color-teal">Sign in</span></Link></p>
    )
  }

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      {renderAlternateRegistrationOptions()}
      <Input title="Name" placeholder="Your full name" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <Input title="Email" placeholder="Your email address" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input title="Password" placeholder="Your password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" onClick={handleSubmit} disabled={formSubmitted} className={formSubmitted ? "tracking-out-expand" : ""} >{ formSubmitted ? "Signing You Up..." : "Sign Up"}</Button>
      {renderFormFooter()}
    </form>
  )
};

export default SignUpForm;