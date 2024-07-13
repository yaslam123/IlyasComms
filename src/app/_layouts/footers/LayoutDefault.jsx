"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from "next/navigation";

const DefaultFooter = () => {
  const asPath = usePathname();

  return (
    <>
      {/* footer */}
      <footer className="mil-main mil-relative mil-o-hidden">
        <div className="" />
        <div className="container mil-p-90-60">
          <div className="mil-background-grid" />

          <div className="row align-items-start">
            <div className="col-lg-4">
              <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
                <img
                  src={AppData.footer.logo.image}
                  alt={AppData.footer.logo.alt}
                  style={{ width: "250px" }}
                />
              </Link>
            </div>
            <div className="col-lg-8">
              <div className="row">
                {/* <div className="col-12">
                  <div className="mil-footer-navigation mil-up mil-mb-90">
                    <nav>
                      <ul>
                        {AppData.footer.menu.map((item, key) => (
                          <li
                            key={`footer-menu-item-${key}`}
                            className={
                              (asPath.indexOf(item.link) != -1 &&
                                item.link != "/") ||
                              asPath == item.link
                                ? "mil-active"
                                : ""
                            }
                          >
                            <Link href={item.link}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div> */}
                <div className="col-md-6 col-lg-6 col-xl-3 mil-up mil-mb-90">
                  <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                    Quick Links
                  </span>
                  <p className="mil-text-md mil-up mil-light-costume mil-mb-10">
                    <a href="/" className="mil-light-costume-child">
                      Home
                    </a>
                  </p>
                  <p className="mil-text-md mil-up mil-light-costume mil-mb-10">
                    <a href="/about" className="mil-light-costume-child">
                      About Us
                    </a>
                  </p>
                  <p className="mil-text-md mil-up mil-light-costume mil-mb-10">
                    <a href="/services" className="mil-light-costume-child">
                      Services
                    </a>
                  </p>
                  <p className="mil-text-md mil-up mil-light-costume mil-mb-10">
                    <a href="/blog" className="mil-light-costume-child">
                      Blog
                    </a>
                  </p>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                    Socials
                  </span>
                  <p className="mil-text-md mil-up mil-light-costume mil-mb-10">
                    <a
                      href="https://www.facebook.com/profile.php?id=100094865436877&mibextid=ZbWKwL"
                      className="mil-light-costume-child"
                    >
                      Facebook
                    </a>
                  </p>
                  <p className="mil-text-md mil-up mil-light-costume mil-mb-10">
                    <a
                      href="https://twitter.com/Tabann00"
                      className="mil-light-costume-child"
                    >
                      Twitter
                    </a>
                  </p>
                  <p className="mil-text-md mil-up mil-light-costume mil-mb-10">
                    <a
                      href="https://www.instagram.com/taban_enterprise?igsh=NDk1YjR4ZzJndHg1&utm_source=qr"
                      className="mil-light-costume-child"
                    >
                      Instagram
                    </a>
                  </p>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                    Legal
                  </span>
                  <p className="mil-text-md mil-up mil-light-costume mil-mb-10">
                    <a href="/404" className="mil-light-costume-child">
                      Terms & Conditions
                    </a>
                  </p>
                  <p className="mil-text-md mil-up mil-light-costume mil-mb-10">
                    <a href="/404" className="mil-light-costume-child">
                      Privacy Policy
                    </a>
                  </p>
                  <p className="mil-text-md mil-up mil-light-costume mil-mb-10">
                    <a href="/blog" className="mil-light-costume-child">
                      Blog
                    </a>
                  </p>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">
                    {" "}
                    Info
                  </span>
                  <p className="mil-text-md mil-up mil-light-costume mil-mb-50">
                    Taleh,hodan District <br />
                    TCC Floor 04 <br />
                    Mogadishu, Somalia <br />
                    (773) 238 - 7162
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mil-mainTwo">
          <div className="container mil-footer-bottom">
            <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
            <ul className="mil-light-soft mil-mb-15">
              {/* {AppData.social.map((item, key) => (
                <li key={`footer-social-item-${key}`}>
                  <a href={item.link} target="_blank">
                    {item.title}
                  </a>
                </li>
              ))} */}
            </ul>
            <ul className="mil-light-soft mil-mb-15">
              <li>
                <a href="#.">Our App</a>
              </li>
              <li>
                <a href="#.">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;
