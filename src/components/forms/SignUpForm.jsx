import React from "react";
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
      <p className="color-gray-700">or</p>
      </>
    )
  }

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      {renderAlternateRegistrationOptions()}
      <Input title="Name" placeholder="Your full name" name="fullName" />
      <Input title="Email" placeholder="Your email address" name="email" type="email" />
      <Input title="Password" placeholder="Your password" name="password" type="password" />
      <Button type="submit" onClick={handleSubmit} >Sign Up</Button>
    </form>
  )
};

export default SignUpForm;