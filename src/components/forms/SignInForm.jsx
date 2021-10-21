import React, { useState } from "react";
import Input from "../commons/Input";
import Button from "../commons/Button";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../../services/authService";

const WELCOME_MESSAGE = "Welcome Back";
const LOGIN_HINT = "Enter your email and password to sign in";

const SignInForm = () => {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateFormData = () => email && password;

  const handleUserLogin = async () => {
    const { user } = await loginUser(email, password);

    if (user) {
      history.push("/pages/dashboard");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValidationPassed = validateFormData();
    if (formValidationPassed) {
      setFormSubmitted(true);
      handleUserLogin();
    }
  }

  const renderWelcomeMessage = () => {
    return (
      <>
      <h1 className="color-teal">{WELCOME_MESSAGE}</h1>
      <p className="color-gray-400">{LOGIN_HINT}</p>
      </>
    )
  }

  const renderFormFooter = () => {
    return (
      <p className="form-footer color-gray-400">Don't have an account? <Link to="/register"><span className="color-teal">Sign up</span></Link></p>
    )
  }

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      {renderWelcomeMessage()}
      <Input title="Email" name="email" placeholder="Your email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input title="Password" name="password" placeholder="Your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" className={formSubmitted ? "tracking-out-expand" : ""} disabled={formSubmitted} >{formSubmitted ? "Signing you in..." : "SIGN IN"}</Button>
      {renderFormFooter()}
    </form>
  )
}

export default SignInForm;