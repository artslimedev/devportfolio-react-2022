import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center py-20"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
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
                Hi. I'm Paolo, your next Fullstack Engineer! Lets build out your
                idea in style!
              </p>
            </div>
            <div>
              <p>
                As a fullstack software engineer, I thrive at the intersection
                of art and technology, blending a passion for innovation with a
                sharp eye for design. I specialize in building end-to-end
                solutions, including mobile apps and scalable web applications,
                using technologies like React, React Native, TypeScript,
                Node.js, Go, SQL, and MongoDB. Whether crafting modern UIs,
                optimizing performance, or designing secure backends, I focus on
                creating seamless, visually appealing, and user-centric
                experiences. My work reflects a commitment to detail, a love for
                problem-solving, and a drive to deliver impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
