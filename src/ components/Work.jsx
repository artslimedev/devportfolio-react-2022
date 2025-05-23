import { TabsContainer } from "./TabsContainer";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4 flex flex-col justify-center gap-y-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#47b2ff] w-fit">
            Work
          </p>
          <p>
            Check out some of my recent projects and hover over the images for
            the code
          </p>
        </div>
        <TabsContainer />
      </div>
    </div>
  );
};

export default Work;
