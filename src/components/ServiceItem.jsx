import React from "react";

export default function ServiceItem({ icon, title, description }) {
  return (
    <div className="grid grid-cols-3">
      <div className="grid place-items-center place-content-center w-full h-full">
        <img src={icon} alt="" className="object-cover" />
      </div>

      <div className="col-span-2">
        <div className="text-[#384a62] text-[15px] font-bold leading-[22.5px]">
          {title}
        </div>
        <p className="text-[#677f9e] text-[15.5px]">{description}</p>
      </div>
    </div>
  );
}
