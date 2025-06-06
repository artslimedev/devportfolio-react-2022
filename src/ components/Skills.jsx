import SkillCard from "./ui/SkillCard";
import { skillsData } from "../data/skillsData";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center py-20"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#47b2ff]">
            Skills
          </p>
          <p className="py-4">
            Here are some of the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-3 text-center py-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
