import React from "react";
import Tweet from "./Tweet";

import { tweets } from "../pages/data";

export default function Reviews() {
  return (
    <section className="py-16 bg-[#edf6fd]">
      <div className="w-[1200px] mx-auto">
        <div className="text-[30px] text-[#384a62] py-5 leading-[36px]">
          What Customers Say About Us 🙌🏾
        </div>

        <div className="grid grid-cols-3 gap-x-2">
          {tweets?.map((tweet, index) => (
            <Tweet {...tweet} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
