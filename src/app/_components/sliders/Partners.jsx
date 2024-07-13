"use client";

import Data from "@data/sliders/partners";

const PartnersSlider = ({ bgStyle }) => {
  return (
    <>
      {/* partners */}
      <div className={`mil-${bgStyle}-bg mil-partners mil-relative`}>
        {bgStyle == "soft" && (
          <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />
        )}

        <div className="container mil-p-90-60">
          <div className="mil-background-grid mil-softened" />
        </div>
      </div>
      {/* partners end */}
    </>
  );
};
export default PartnersSlider;
