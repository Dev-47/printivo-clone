import React from "react";
import sponsor_image from "../assets/img/Group_61_h8vxko.png";

export default function Sponsors() {
  return (
    <div className="py-20 flex flex-col gap-2">
      <div className="text-[#384a62] text-[30px] leading-[36px]">
        Nigeria's No. 1 online print shop 👑
      </div>
      <p className="text-[#506683] text-[20px] font-bold leading-[28px] w-[650px]">
        Our print services and solutions are trusted by these brands and over
        15,000 other businesses in Nigeria.
      </p>

      <img src={sponsor_image} alt="" className="w-full h-full" />
    </div>
  );
}
