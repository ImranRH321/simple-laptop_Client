import React from "react";

const Experience = () => {
  return (
    <div className="h-[500px] bg-green-500 px-10 pb-3">
      <h1 className="text-primary text-center font-bold text-4xl md:text-6xl py-20">
        Explore Our Expariance
      </h1>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-5">
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-value">
              <span className="text-6xl">25+</span>
            </div>
            <div class="stat-desc text-2xl my-2 font-bold text-black">
              Years Experience
            </div>
          </div>
        </div>
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-value">
              <span className="text-6xl">456+</span>
            </div>
            <div class="stat-desc text-2xl my-2 font-bold text-black">
              Awards Winning
            </div>
          </div>
        </div>
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-value">
              <span className="text-6xl">95</span>
            </div>
            <div class="stat-desc text-2xl my-2 font-bold text-black">
              Business Partners
            </div>
          </div>
        </div>
        <div class="stats shadow">
        <div class="stat">
            <div class="stat-value">
              <span className="text-6xl">50</span>
            </div>
            <div class="stat-desc text-2xl my-2 font-bold text-black">
            Country Export
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
