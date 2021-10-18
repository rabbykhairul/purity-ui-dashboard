import React from "react";
import PageFooter from "./commons/PageFooter";
import SignUpForm from "./forms/SignUpForm";

const WELCOME_TITLE = "Welcome!";
const WELCOME_MESSAGE = "Use these awesome forms to login or create new account in your project for free."

const SignUpScreen = () => {

  const renderWelcomeNoteSection = () => {
    return (
      <div className="welcome-note-box color-white" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/themed-background.png')`}}>
        <h1>{WELCOME_TITLE}</h1>
        <p>{WELCOME_MESSAGE}</p>
      </div>
    );
  }

  return (
    <div className="page-container sign-up-screen">
      {renderWelcomeNoteSection()}
      <SignUpForm />
      <PageFooter className="footer-with-padding" />
    </div>
  )
};

export default SignUpScreen;