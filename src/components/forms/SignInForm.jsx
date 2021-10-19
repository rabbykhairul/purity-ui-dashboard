import React from "react";

const WELCOME_MESSAGE = "Welcome Back";
const LOGIN_HINT = "Enter your email and password to sign in";

const SignInForm = () => {

  const renderWelcomeMessage = () => {
    return (
      <>
      <h1 className="color-teal">{WELCOME_MESSAGE}</h1>
      <p className="color-gray-400">{LOGIN_HINT}</p>
      </>
    )
  }

  return (
    <form className="sign-in-form">
      {renderWelcomeMessage()}
    </form>
  )
}

export default SignInForm;