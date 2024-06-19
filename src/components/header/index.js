"use client";
import Image from "next/image";
import React from "react";
import logo from "@/images/logo.png";
import Anchor from "../anchor";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  {
    id: 1,
    href: "/",
    text: "Home",
  },
  {
    id: 2,
    href: "/about",
    text: "About",
  },
  {
    id: 3,
    href: "/#services",
    text: "Services",
  },
  {
    id: 4,
    href: "/contact",
    text: "Contact Us",
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="si-header">
        <div className="si-main__container">
          <div className="si-header__grid">
            <Anchor
              hyperLink={"/"}
              linkCls={"si-header__brandLogo"}
              component={
                <>
                  <Image src={logo} alt="akeshya-logo" />
                  <span>AKESHYA</span>
                </>
              }
            />
            <nav>
              <ul>
                {navigationLinks.map(({ id, href, text }) => (
                  <li key={id}>
                    <Link
                      className={pathname === href ? "active" : ""}
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
