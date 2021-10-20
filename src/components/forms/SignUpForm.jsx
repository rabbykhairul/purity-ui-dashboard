import React from "react";
import { BsFacebook, BsApple, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

import Button from "../commons/Button";
import Input from "../commons/Input";

const FORM_TITLE = "Register with";

const SignUpForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <Input title="Name" placeholder="Your full name" name="fullName" />
      <Input title="Email" placeholder="Your email address" name="email" type="email" />
      <Input title="Password" placeholder="Your password" name="password" type="password" />
      <Button type="submit" onClick={handleSubmit} >Sign Up</Button>
      {renderFormFooter()}
    </form>
  )
};

export default SignUpForm;