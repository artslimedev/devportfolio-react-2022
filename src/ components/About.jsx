import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#47b2ff]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">
              Hi. I'm Paolo, your next Fullstack Developer! Lets build out your
              idea in style!
            </p>
          </div>
          <div>
            <p>
              As a full stack software engineer, I've always been deeply
              fascinated by the intersection of art and technology. I possess an
              unwavering passion for understanding how technology works and a
              keen eye for all types of visual aesthetics. This passion and eye
              for detail have led me to become a highly skilled creator in the
              field. I have a wealth of expertise in utilizing technologies such
              as React, Javascript, HTML/CSS, and MongoDB. With these skills, I
              am able to build end-to-end solutions that are both functional and
              visually stunning. Whether I'm working on the front-end or
              back-end, I approach every project with a meticulous attention to
              detail and an unrelenting drive to deliver a superior user
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
