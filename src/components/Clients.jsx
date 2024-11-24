import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Clients = () => {
  const [count, setCount] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCount(true)}
      onExit={() => setCount(false)}
    >
      <div className="bg-neutral-900 text-white py-12 px-6 mb-10">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-around items-center">
          <div className="flex flex-col items-center space-y-3">
            <h2 className="text-5xl font-semibold">
              {count && (
                <CountUp start={10} end={1000} duration={1} delay={0} />
              )}
              +
            </h2>
            <p className="text-lg text-gray-400">Projects Completed</p>
          </div>
          <div className="mt-1 flex flex-col items-center space-y-3">
            <h2 className="text-5xl font-semibold">
              {count && <CountUp start={10} end={100} duration={1} delay={0} />}
              +
            </h2>
            <p className="text-lg text-gray-400">Happy Clients</p>
          </div>
          <div className="mt-1 flex flex-col items-center space-y-3">
            <h2 className="text-5xl font-semibold">
              {count && <CountUp start={0} end={10} duration={1} delay={0} />}+
            </h2>
            <p className="text-lg text-gray-400">Years of Experience</p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Clients;
