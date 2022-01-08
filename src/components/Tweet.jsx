import React from "react";
import tweeter_logo from "../assets/img/printivo-24.svg";

export default function Tweet({ username, display_name, review }) {
  return (
    <div className="bg-[#ffffff] w-[367px] h-[182px] shadow-md relative">
      <div className="absolute top-0 left-4 py-6">
        <img
          src={tweeter_logo}
          alt="Tweeter Logo"
          className="w-8 h-8 object-cover border-[1px] p-2 rounded-full"
        />
      </div>

      <div className="absolute top-0 right-0 py-4 pl-14 pr-2 w-full h-full">
        <div className="py-2">
          <p className="font-bold text-[#384a62] overflow-hidden px-2">
            {username}
            <a href="#" className="text-blue-700">
              {" "}
              @{display_name}
            </a>
          </p>
        </div>

        <div className="w-[280px]">
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
}
