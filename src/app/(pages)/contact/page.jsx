import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";

export const metadata = {
  title: {
    default: "Contact",
  },
  description: AppData.settings.siteDescription,
};

const Contact = () => {
  return (
    <>
      <PageBanner
        pageTitle={"We’d love to talk"}
        breadTitle={"Contact"}
        bgImage={"/img/Personal/AboutUs.png"}
      />

      {/* about */}
      <section>
        <div className="container mil-p-120-60">
          <div className="mil-background-grid mil-softened" />

          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="mil-mb-90">
                <h2 className="mil-upper mil-up mil-mb-30">Info Contact</h2>
                <p className="mil-up mil-mb-40">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more or less
                  normal distribution of letters.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mil-relative">
              <div className="mil-contact-sidebar">
                <div className="mil-sidebar-info">
                  <h6 className="mil-upper mil-up mil-mb-30">Location</h6>
                  <ul className="mil-list mil-dark mil-up mil-mb-30">
                    <li>MOGADISHU, SOMALIA</li>
                    <li>HODAN DISTRICT, TALEH</li>
                    <li>TCC FLOOR 04</li>
                  </ul>
                  <h6 className="mil-upper mil-up mil-mb-30">SOCIAL</h6>
                  <ul className="mil-list mil-dark mil-up mil-mb-30">
                    <li>
                      <a href="">Facebook</a>
                    </li>
                    <li>
                      <a href="">Twitter</a>
                    </li>
                    <li>
                      <a href="">Instagram</a>
                    </li>
                    <li>
                      <a href="">Youtube</a>
                    </li>
                  </ul>
                  <h6 className="mil-upper mil-up mil-mb-30">Phone</h6>
                  <ul className="mil-list mil-dark mil-up mil-mb-30">
                    <li>
                      <li>(252) 610 - 697070</li>
                    </li>
                    <li>
                      <li>(252) 615 - 770887</li>
                    </li>
                  </ul>
                  <h6 className="mil-upper mil-up mil-mb-30">Email</h6>
                  <ul className="mil-list mil-dark mil-up">
                    <li>yaslam.eng@gmail.com</li>
                    <li>khalifjirdeh@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}

      {/* map */}
      <div className="mil-map-frame mil-up">
        <div className="mil-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9197109360165!2d45.31133810000001!3d2.0320829000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d5841855db08541%3A0xd4209cb623754cb2!2sTCC%20Apartment%20Makkah%20Almukarramah%20Road%20Muqdisho%2C%20Somalia!5e0!3m2!1sen!2sua!4v1689578925013!5m2!1sen!2sua"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* map end */}

      {/* contact */}
      <section className="mil-relative">
        <div className="container mil-p-120-30">
          <div className="mil-background-grid mil-softened"></div>
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="mil-mb-90">
                <h2 className="mil-upper mil-up mil-mb-30">
                  We’d love to talk
                </h2>
                <p className="mil-up mil-mb-30">
                  Have a question? We’d love to hear from you. Send us a note to
                  get the conversation started - or click on an office above and
                  talk to us. Especially about designing something, or something
                  we’ve designed.
                </p>
                <div className="mil-divider-lg mil-up mil-mb-30"></div>
                <p className="mil-up mil-mb-30">
                  Interested in joining the team? Browse our current openings.
                </p>
                <div className="mil-up"></div>
              </div>
            </div>
            <div className="col-lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* contact end */}
    </>
  );
};
export default Contact;
