"use client";
import Image from "next/image";
import React from "react";
import logo from "@/images/logo.png";
import Anchor from "../anchor";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navigationLinks = [
  {
    id: 1,
    href: "/",
    text: "Home",
    additional_classname: "",
  },
  {
    id: 2,
    href: "/about",
    text: "About",
    additional_classname: "",
  },
  {
    id: 3,
    href: "/#services",
    text: "Services",
    additional_classname: "",
  },
  {
    id: 4,
    href: "/contact",
    text: "Contact Us",
    additional_classname: "get_started",
  },
];

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    alert("in toggle");
    setIsMobileMenuActive(!isMobileMenuActive);
  };
  return (
    <>
      <div className="header">
        <div className="main__container">
          <div className="header__grid">
            <Anchor
              hyperLink={"/"}
              linkCls={"header__brandLogo"}
              component={
                <>
                  <Image src={logo} alt="akeshya-logo" />
                  <span>AKESHYA</span>
                </>
              }
            />
            <nav
              className={`navbar ${isMobileMenuActive ? "navbar-mobile" : ""}`}
            >
              <ul>
                {navigationLinks.map(
                  ({ id, href, text, additional_classname }) => (
                    <li key={id}>
                      <Link
                        className={
                          pathname === href
                            ? `active ${additional_classname}`
                            : additional_classname
                        }
                        href={href}
                      >
                        {text}
                      </Link>
                    </li>
                  )
                )}
              </ul>
              {/* change class on avtive mobile menu ri-close-line */}
              <i
                className={`hide--desktop ${
                  isMobileMenuActive ? "ri-close-line" : "ri-menu-line"
                }`}
                onClick={() => {
                  setIsMobileMenuActive(!isMobileMenuActive);
                }}
                //onClick={toggleMobileMenu()}
                style={{ cursor: "pointer" }}
              ></i>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
