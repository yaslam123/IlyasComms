"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const DefaultHeader = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const asPath = usePathname();

  const isPathActive = (path) => {
    return (asPath.indexOf(path) !== -1 && path !== "/") || asPath === path;
  };

  useEffect(() => {
    // close mobile menu
    setToggle(false);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [asPath]);

  return (
    <>
      {/* top bar */}
      <div className="mil-top-panel">
        <div className="container-fluid">
          <div className="mil-top-panel-content">
            <Link href="/" className="mil-logo">
              <img
                src={
                  isScrolled
                    ? AppData.header.logo.imageColored
                    : AppData.header.logo.imageWhite
                }
                alt={AppData.header.logo.alt}
                style={{ width: "200px" }}
              />
            </Link>

            <div className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
              <nav>
                <ul>
                  {AppData.header.menu.map((item, index) => (
                    <li
                      className={`${
                        isPathActive(item.link) ? "mil-active" : ""
                      }`}
                      key={`header-menu-item-${index}`}
                    >
                      <Link href={item.link}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* right buttons */}
            <div className="mil-top-panel-buttons">
              {/* <Link href="/contact" className="mil-button mil-sm">
                Contact Us
              </Link> */}

              <div
                className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
                onClick={() => setToggle(!toggle)}
              >
                <span></span>
              </div>
            </div>
            {/* right buttons end */}
          </div>
        </div>
      </div>
      {/* top bar end */}
    </>
  );
};
export default DefaultHeader;
