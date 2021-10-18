import React from "react";

const SignUpScreen = () => {

  const renderWelcomeNoteSection = () => {
    return <div className="welcome-note-box" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/themed-background.png')`}}></div>;
  }

  return (
    <div className="page-container sign-up-screen">
      {renderWelcomeNoteSection()}
    </div>
  )
};

export default SignUpScreen;