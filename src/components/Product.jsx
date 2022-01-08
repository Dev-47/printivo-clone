import React from "react";

export default function Product({ image, title, price, per_unit }) {
  return (
    <div className="rounded-md shadow-md w-[268px]">
      <div className="w-full h-[224px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition duration-100"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h3 className="header-font text-[#384a62] font-bold leading-[24px] tracking-[0.64px] text-md">
          {title}
        </h3>
        <p className="text-[#708095] text-[12.8px] font-bold uppercase leading-[19.2px] tracking-[0.64px]">
          starting at
        </p>
        <h3 className="text-xl font-bold text-[#384a62]">
          &#8358;
          {
            price
              .toLocaleString("en-US", {
                style: "currency",
                currency: "NGN",
              })
              .replace("NGN", "")
              .split(".")[0]
          }{" "}
          <span className="text-[#708095] text-[14.4px] font-bold leading-[28px]">
            per {per_unit}
          </span>
        </h3>

        <button className="bg-[#d77f81] text-[#ffffff] max-w-fit text-left px-4 py-2 group">
          <span className="font-bold text-[14px] text-ellipsis">{title}</span>
          <i className="icon small right chevron transition-all duration-200 group-hover:pl-2"></i>
        </button>
      </div>
    </div>
  );
}
