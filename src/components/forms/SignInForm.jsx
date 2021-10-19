import React from "react";
import Input from "../commons/Input";
import Button from "../commons/Button";

const WELCOME_MESSAGE = "Welcome Back";
const LOGIN_HINT = "Enter your email and password to sign in";

const SignInForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <p className="form-footer color-gray-400">Don't have an account? <span className="color-teal">Sign up</span></p>
    )
  }

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      {renderWelcomeMessage()}
      <Input title="Email" placeholder="Your email address" type="email" />
      <Input title="Password" placeholder="Your password" type="password" />
      <Button type="submit">SIGN IN</Button>
      {renderFormFooter()}
    </form>
  )
}

export default SignInForm;