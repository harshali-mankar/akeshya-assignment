"use client";
import React from "react";
import SectionHeading from "../sectionHeading";
import Anchor from "../anchor";
import ContactUsForm from "../contactUsForm";
import { motion } from "framer-motion";
const ContactUs = () => {
  return (
    <>
      <section className="contactUs__wrap section__wrap">
        <div className="main__container">
          <SectionHeading heading="CONTACT US" />
          <div className="contactUs__grid">
            <motion.div
              className="contactUs__grid-lhs"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="contactUs__brand">
                <h2 className="contactUs__brand-title">Akeshya</h2>
                <p>
                  Designers, developers & marketeers capable of delivering
                  solutions according to your needs,
                </p>
              </div>
            </motion.div>
            <div className="contactUs__grid-mid">
              <div className="contactUs__info">
                <ul>
                  <li>
                    <Anchor
                      iconCls={"ri-map-pin-line"}
                      linkText={
                        "26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh, 524 004."
                      }
                      hyperLink={"https://maps.app.goo.gl/QY3uQGTZKyBVpj4D9"}
                    />
                  </li>
                  <li>
                    <Anchor
                      iconCls={"ri-mail-send-line"}
                      linkText={"info@akeshya.com"}
                      hyperLink={"mailto:info@akeshya.com"}
                    />
                  </li>
                  <li>
                    <Anchor
                      iconCls={"ri-phone-line"}
                      linkText={"+91 94942 40922"}
                      hyperLink={"tel:9494240922"}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              className="contactUs__grid-rhs"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactUsForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
