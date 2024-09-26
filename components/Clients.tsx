import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from <span className="text-purple"> stisfied clients</span>
      </h1>
      <div className="flex flex-col items-center ">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <div
          className="flex flex-wrap 
    items-center justify-center
    md:gap-16 max-lg:mt-10
    gap-4"
        >
          {companies.map(({ id, img, name }) => (
            <div
              key={id}
              className="flex md:max-w-60 max-w-32 gap-2 items-center"
            >
              <img src={img} alt={name} className="md:w-10 w-5" />
              <p className="md:w-24 w-20 text-lg font-semibold text-white hover:text-purple-600 transition duration-300 ease-in-out">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>{" "}
    </section>
  );
};

export default Clients;
