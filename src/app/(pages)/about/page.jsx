import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import AboutSection from "@components/sections/About";
import VisionSection from "@components/sections/Vision";
import ServicesSection from "@components/sections/Services";
import CoresSection from "@components/sections/Cores";

import AwardsSection from "@components/sections/Awards";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";
import ContactInfoSection from "@components/sections/ContactInfo";
import ServicesTwoSection from "@components/sections/ServicesTwo";

const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), {
  ssr: false,
});
const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);
const CompanySlider = dynamic(() => import("@components/sliders/Company"), {
  ssr: false,
});
const ProcessSlider = dynamic(() => import("@components/sliders/Process"), {
  ssr: false,
});
const CompanyTwoSlider = dynamic(
  () => import("@components/sliders/CompanyTwo"),
  { ssr: false }
);

export const metadata = {
  title: {
    default: "About",
  },
  description: AppData.settings.siteDescription,
};

const About = () => {
  return (
    <>
      <PageBanner
        pageTitle={"About us"}
        breadTitle={"About"}
        bgImage={"/img/Personal/About bg.jpeg"}
      />
      <AboutSection />
      <ServicesSection />
      <VisionSection />
      <CoresSection />

      {/*  */}
      {/* <ContactInfoSection />
      <CompanyTwoSlider />
      <ProcessSlider paddingTop={"0"} />
      <CompanySlider />

      <AwardsSection />
      <TestimonialSlider showPartners={0} />
      <CallToActionTwoSection /> */}
    </>
  );
};
export default About;
