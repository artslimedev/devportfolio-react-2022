import React from "react";

const TabBody = ({ activeTab, projects, project }) => {
  if (project) {
    return (
      <div className="w-full p-4">
        <div className="w-full flex flex-col gap-4">
          {/* 

          Project Image 

          */}
          <div className="w-full flex items-center">
            <div
              style={{ backgroundImage: `url(${project.image})` }}
              className="w-full group shadow-lg aspect-video rounded-[20px] overflow-hidden
                flex justify-center items-center bg-contain bg-center bg-no-repeat
                relative before:absolute before:top-0 before:left-0 before:w-full before:h-full
                before:bg-gradient-to-r before:from-[rgba(112,157,255,0.8)] before:to-[rgba(92,81,223,0.8)]"
            >
              <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.code && (
                  <a
                    href={project.codeLink}
                    className="inline-block text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-100"
                  >
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demoLink}
                    className="inline-block text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-100"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project Description */}

          <div className="w-full">
            <div className="flex items-center justify-center gap-2 mb-4 text-center">
              {project.code && (
                <a
                  href="{project.codeLink}"
                  className="w-full border-2 border-[#47b2ff] rounded"
                >
                  {" "}
                  Code{" "}
                </a>
              )}
              {project.demo && (
                <a
                  href="{project.demoLink}"
                  className="w-full border-2 border-[#47b2ff] rounded"
                >
                  {" "}
                  Demo{" "}
                </a>
              )}
            </div>
            <p className="text-sm leading-7 text-justify text-gray-300">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full md:min-h-[450px]">
      {projects.map((data, index) => (
        <div
          key={data.title}
          className={`w-full p-4 md:p-5 relative
              ${activeTab === index ? "flex animate-fadeIn" : "hidden"}`}
        >
          <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8">
            {/* 
            
            Left Column - Project Image 
            
            */}

            <div className="w-full md:w-1/2 md:max-w-[500px] flex items-center">
              <div
                style={{ backgroundImage: `url(${data.image})` }}
                className="w-full group shadow-lg aspect-video rounded-[20px] overflow-hidden
                  flex justify-center items-center bg-contain md:bg-cover bg-center bg-no-repeat
                  relative before:absolute before:top-0 before:left-0 before:w-full before:h-full
                  before:bg-gradient-to-r before:from-[rgba(112,157,255,0.8)] before:to-[rgba(92,81,223,0.8)]
                  before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
              >
                <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {data.code && (
                      <a
                        href={data.codeLink}
                        className="inline-block text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-100"
                      >
                        Code
                      </a>
                    )}
                    {data.demo && (
                      <a
                        href={data.demoLink}
                        className="inline-block text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-100"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Project Description */}

            <div className="w-full md:w-1/2 md:max-w-[500px]">
              <div className="mb-4">
                <p className="text-sm leading-7 text-justify md:text-left text-gray-300">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabBody;
