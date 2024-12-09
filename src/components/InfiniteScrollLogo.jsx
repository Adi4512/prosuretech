import React from "react";
import { logos } from "../constants"; // Ensure this has `src` and `alt` for each logo

const InfiniteScrollLogo = () => {
  return (
    <div className="infinite-scroll-container bg-neutral-900 py-10">
      <div className="flex animate-scroll w-max">
        {/* Single row with duplicated logos */}
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            className="mx-4 h-auto w-20 sm:w-24 md:w-28 lg:w-32 xl:w-34"
            alt={logo.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollLogo;
