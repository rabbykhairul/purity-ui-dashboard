import React from "react";
import PageFooter from "./commons/PageFooter";

const SignInScreen = () => {

  const renderLogo = () => {
    return (
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/logo-big.png`} alt="" />
      </div>
    )
  }

  return (
    <div className="page-container sign-in-screen">
      {renderLogo()}
      <PageFooter className="compact-footer" />
    </div>
  )
}

export default SignInScreen;