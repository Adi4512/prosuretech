import { testimonials } from "../constants";
import Clients from "./Clients";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="items-center text-3xl sm:text-3xl lg:text-4xl text-center my-10 lg:my-20">
        Loved By Many 💖
      </h2>
      <Clients />
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex flex-col mt-8 items-start">
                <h6 className="font-semibold">{testimonial.user}</h6>
                <span className="italic mt-1 text-sm font-normal text-neutral-600">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
