"use client";
import React from "react";
import ourClients1 from "@/images/clients/client-1.png";
import ourClients2 from "@/images/clients/client-2.png";
import ourClients3 from "@/images/clients/client-3.png";
import ourClients4 from "@/images/clients/client-4.png";
import ourClients5 from "@/images/clients/client-5.png";
import ourClients6 from "@/images/clients/client-6.png";
import Image from "next/image";

const ourClientsArr = [
  ourClients1,
  ourClients2,
  ourClients3,
  ourClients4,
  ourClients5,
  ourClients6,
];

const OurClients = () => {
  return (
    <>
      <div className="ourClients__wrap">
        <div className="main__container">
          <div className="ourClients__grid">
            {ourClientsArr.map((item, index) => {
              return (
                <div key={index} className="ourClients__grid-item">
                  <div className="ourClients__thumb">
                    <Image src={item} alt={`client-${index + 1}`} />
                    {/* <img src={item} alt={`client-${index + 1}`} /> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
