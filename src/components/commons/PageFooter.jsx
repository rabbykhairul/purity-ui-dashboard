import React from "react";

const PageFooter = ({ className }) => {

  const renderFooterMessage = () => {
    return (
      <p>@ 2021, Made with ❤️ by <a className="color-teal">Creative Tim</a> & <a className="color-teal">Simmmple</a> for a better web</p>
    )
  }

  const renderFooterActions = () => {
    return (
      <div className="footer-action-container">
        <a href="#">Creative Tim</a>
        <a href="#">Simmple</a>
        <a href="#">Blog</a>
        <a href="#">License</a>
      </div>
    )
  }

  return (
    <footer className={`color-gray-400 ${className}`}>
      {renderFooterMessage()}
      {renderFooterActions()}
    </footer>
  )
}

export default PageFooter;