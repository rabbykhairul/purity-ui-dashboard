import React from "react";

const PageFooter = ({ className }) => {

  const renderFooterMessage = () => {
    return (
      <p>@ 2021, Made with ❤️ by <span className="color-teal">Creative Tim</span> & <span className="color-teal">Simmmple</span> for a better web</p>
    )
  }

  const renderFooterActions = () => {
    return (
      <div className="footer-action-container">
        <span>Creative Tim</span>
        <span>Simmple</span>
        <span>Blog</span>
        <span>License</span>
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