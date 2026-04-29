import Section_title from "../Components/UI/Section_title";
import Coding from "../Components/skills/Coding";
import Knowledge from "../Components/skills/Knowledge";

const Skills = ({ current_page }) => {

  return (
    <div
      id="skills"
      className={`skills_cover bg-bg ${cover_style} ${
        current_page == "skills"
          ? "xl:opacity-[1] xl:translate-x-0 xl:relative z-100 "
          : "xl:opacity-[0] xl:translate-x-[-50%] xl:absolute "
      }`}
    >
      <div className="skills_area bg-bg h-full overflow-y-scroll overflow-x-clip">
        <div className="head ">
          <Section_title title={"Skills"} style={"p-[20px]!"} />
        </div>
        <div className="skills_types_area p-5  elements-row flex-col! md:flex-row! items-start! gap-y-[30px]">
          <Coding />
          <Knowledge />
        </div>
      </div>
    </div>
  );
};

const cover_style = `
cover lg:h-full bg-white white-space-style rounded-[5px]! lg:rounded-[0_5px_5px_0] duration-700! w-full
`;

export default Skills;
