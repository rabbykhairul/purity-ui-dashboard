import React from "react";
import PageFooter from "./commons/PageFooter";
import ShortHighlights from "./statistics/ShortHighlights";

const DashboardScreen = () => {
  return (
    <div className="dashboard-screen">
      <ShortHighlights />
      <PageFooter className="footer-with-vertical-gap" />
    </div>
  )
};

export default DashboardScreen;