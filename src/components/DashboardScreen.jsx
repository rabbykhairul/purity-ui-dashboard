import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Button from "./commons/Button";
import ShortHighlights from "./statistics/ShortHighlights";
import PageFooter from "./commons/PageFooter";

const DashboardScreen = () => {

  const renderPromotions = () => {
    return (
      <div className="promotions-container">
        <div className="promotion-box-1 page-section bg-white">
          <div className="info-container">
            <div>
              <p className="color-gray-400">Built by developers</p>
              <p className="color-gray-700">Purity UI Dashboard</p>
              <p className="color-gray-400">
                From colors, cards, typography to complex elements, you will find the full documentation.
              </p>
            </div>
            <Button className="btn-plain color-gray-700">
              Read more <BsArrowRightShort className="icon-mini" />
            </Button>
          </div>
          <div className="logo-container">
            <img src={`${process.env.PUBLIC_URL}/logo-small.png`} alt="" />
          </div>
        </div>
        <div className="promotion-box-2 page-section color-white">
          <div className="promo-2-info-container" style={{ background: `linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%), url('${process.env.PUBLIC_URL}/brooke-cagle-g1Kr4Ozfoac-unsplash 1.png') center/cover` }}>
            <div>
              <p>Work with the Rockets</p>
              <p>
                Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.
              </p>
            </div>
            <Button className="btn-plain">
              Read more <BsArrowRightShort className="icon-mini" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-screen">
      <div>
        <ShortHighlights />
        {renderPromotions()}
      </div>
      <PageFooter className="footer-with-vertical-gap" />
    </div>
  )
};

export default DashboardScreen;