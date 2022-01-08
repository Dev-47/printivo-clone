import React from "react";

export default function ProductContainer({ title, children }) {
  return (
    <section className="py-2">
      <div className="flex flex-row items-center justify-between">
        <div className="py-2">
          <h3 className="text-[#384a62] text-[30px] header-font font-serif">
            {title}
          </h3>
        </div>

        <div>
          <a href="#" className="text-[#d77f81] font-bold">
            See All {title}
          </a>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">{children}</div>
    </section>
  );
}
