import React from "react";
import max from "../assets/companyLogo/max.png";

const InfiniteScrollLogo = () => {
  return (
    <div className="flex flex-row  py-20 mb-10 bg-neutral-900 overflow-hidden">
      {/* Scrolling Logos - Row 1 */}
      <div className="flex animate-scroll space-x-10">
        <img src={max} className=" w-40" alt="" />
        <img src={max} className=" w-40" alt="" />
        <img src={max} className=" w-40" alt="" />
      </div>
      {/* Scrolling Logos - Row 2 */}
      <div className="flex animate-scroll space-x-10">
        <img src={max} className=" w-40" alt="" />
        <img src={max} className=" w-40" alt="" />
      </div>
    </div>
  );
};

export default InfiniteScrollLogo;
