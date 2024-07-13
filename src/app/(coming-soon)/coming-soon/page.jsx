import React from "react";

import AppData from "@data/app.json";

import Timer from "@layouts/timer/Index";

export const metadata = {
  title: {
    default: "Coming Soon",
  },
  description: AppData.settings.siteDescription,
};

const ComingSoon = () => {
  return (
    <>
      {/* banner */}
      <section className="mil-banner mil-relative">
        <img
          src="img/Personal/flag-somalia.jpg"
          className="mil-bg-img mil-scale"
          data-value-1=".4"
          data-value-2="1.4"
          alt="image"
        />

        <div className="mil-overlay" />

        <div className="container">
          <div className="mil-background-grid mil-top-space" />

          <div className="mil-banner-content">
            <div className="row align-items-end justify-content-between">
              <div className="col-xl-9">
                <div className="mil-sm-center mil-mb-90">
                  <span className="mil-suptitle mil-light mil-upper mil-mb-40">
                    <span className="mil-accent">Our</span> Goal
                  </span>
                  <p className="mil-light-soft mil-mb-10">
                    Ilayscomms for climate action is focused on communicating
                    the urgency of tackling the effects of climate change in
                    Somalia. We strive to tell the story of climate change in
                    Somalia to elicit meaningful dialogue and action to address
                    climate crisis.
                  </p>
                  <p className="mil-custome mil-mb-10">
                    Our Goal: Raise awareness on the climate crisis in Somalia.
                    Influence policy on what needs to be done urgently to
                    mitigate further climate fallout.
                  </p>
                  <p className="mil-light-soft mil-mb-10">
                    Somalia contributes the least in global carbon emissions, an
                    insignificant 0.03%, yet climate-related shocks have
                    devastatingly impacted Somalia.
                  </p>
                  <p className="mil-light-soft mil-mb-10">
                    Over the last three decades, climate change has caused 31
                    disasters, including droughts, floods, desertification,
                    rising altitudes, and cyclones. This resulted in the
                    internal displacement of 2.9 million people.
                  </p>
                  <p className="mil-light-soft mil-mb-10">
                    It is clear that climate plays a key role in Somalia’s
                    economy and livelihoods. Agricultural activities account for
                    about 65% of the GDP and employment. This, too, is
                    diminishing due to long and cyclic droughts. Yet, the story
                    of how climate change has made life miserable for Somalis
                    has not been told. Ilayscomms hopes to tell the daily
                    struggles of communities worst affected by the devastating
                    effects of climate change.
                  </p>
                  <p className="mil-light-soft mil-mb-10">
                    Loss & Damages is rarely discussed. We hope to push for
                    comprehensive research to influence policy on Loss and
                    Damages in Somalia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default ComingSoon;
