import React from "react";

import { works } from "../pages/data";
import Container from "./Container";

export default function Works() {
  return (
    <div className="bg-[#f7f6f4] py-16">
      <Container>
        <div className="text-[30px] text-[#384a62] py-5">
          Our amazing work got noticed by:
        </div>

        <div className="grid grid-cols-5 gap-3">
          {works?.map((work, index) => (
            <div key={index}>
              <div>
                <img src={work.image} alt="" />
              </div>

              <a
                className="text-[#384a62] underline my-2 block font-bold"
                href={work.link}
              >
                Read the article here
              </a>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
