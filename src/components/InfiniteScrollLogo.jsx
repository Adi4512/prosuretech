import React from "react";
import { logos } from "../constants";

const InfiniteScrollLogo = () => {
  return (
    <div className="flex flex-row  py-20 mb-10 bg-neutral-900 overflow-hidden">
      {/* Scrolling Logos - Row 1 */}
      <div className="flex animate-scroll space-x-10">
        <img src="../assets/companyLogo/max.png" alt="" />
      </div>
      {/* Scrolling Logos - Row 2 */}
    </div>
  );
};

export default InfiniteScrollLogo;
