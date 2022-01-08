import React from "react";
import Container from "./Container";

export default function Subscription() {
  return (
    <div className="bg-[#ece8d9] py-20">
      <Container>
        <div className="grid place-content-center place-items-center">
          <div className="text-[24px] font-bold text-[#384a62] text-left tracking-wider py-5">
            Subscribe to our newsletter now, and get super exclusive tips on
            brand building!
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-row justify-center items-center gap-2"
          >
            <input
              type="text"
              placeholder="Firstname or Business Name"
              className="h-[85px] text-[18px] px-6 rounded-md"
            />

            <div className="relative bg-white w-[648px] h-[85px] text-[18px] px-6 rounded-md">
              <input
                type="email"
                placeholder="Email Address"
                className="absolute left-0 rounded-md p-4 w-full h-full"
              />
              <button className="bg-[#384a62] text-white font-bold rounded-md absolute right-3 top-2 p-5 text-[20px]">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
