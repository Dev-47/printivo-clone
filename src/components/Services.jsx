import React from "react";

import ServiceItem from "./ServiceItem";

import { services } from "../pages/data";

export default function Services() {
  return (
    <div className="py-20">
      <div className="text-[30px] text-[#384a62] leading-[36px] py-5">
        You can count on us for:
      </div>

      <div className="flex flex-row justify-between items-center">
        {services?.map((service, index) => (
          <ServiceItem {...service} key={index} />
        ))}
      </div>
    </div>
  );
}
