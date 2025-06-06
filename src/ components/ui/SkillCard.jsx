const SkillCard = ({ name, icon, width }) => (
  <div className="flex flex-col justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#47b2ff] duration-500 rounded-md">
    <img
      className={`w-10 sm:${width} mx-auto mt-1`}
      src={icon}
      alt={`${name} Icon`}
    />
    <p className="my-2 text-sm">{name}</p>
  </div>
);

export default SkillCard;
