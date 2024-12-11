import React from "react";
import { features } from "../constants";
import { ul } from "framer-motion/client";

const Services = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="h-6 font-medium px-5 py-2 text-orange-500 rounded-full uppercase text-xl bg-neutral-900">
          services
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-4xl mt-10 lg:mt-20 tracking-wide">
          Complete Workplace{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
            Safety Solutions
          </span>
        </h2>
        <p className="text-neutral-500 mt-3 ">
          Your One-Stop Solution for Workplace Safety <br />
          From audits and compliance to customized training, we provide
          end-to-end safety solutions designed to safeguard your team and
          business.
        </p>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
              <div className="justify-center rounded-full items-center bg-neutral-900 text-orange-700 flex mx-6 h-10 w-10 p-2">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
