import React from "react";

const CharterSection = () => {
  return (
    <section className="charter-service relative mt-30">
      <div className="relative min-h-screen flex items-center justify-end text-white py-12 sm:py-16">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="container mx-auto flex items-center justify-center md:justify-end md:mr-10 z-10">
          <div className="z-10 relative px-4 py-12 sm:py-16 sm:w-1/2 max-w-[550px] md:mr-14">
            <h2 className="text-5xl font-bold mb-12">Charter</h2>

            <p className="text-lg mb-4">
              We are excited to introduce you to Feeling Air. Fly directly from Ezeiza to the lodge, 
              avoiding the hassle of airport layovers. With a Cessna Turbo Stationair and a Cessna Grand Caravan EX, 
              we fly you to your destination in style and comfort.
            </p>
            <p className="text-lg">
              In addition to flights to and from the lodge, our continued partnership with other small jet companies 
              allows us to assist you with all your charter travel needs.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default CharterSection;
