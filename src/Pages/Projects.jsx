import Projects_grid from "../Components/projects/Projects_grid";
import Projects_header from "../Components/projects/Projects_header";

const Projects = ({ current_page }) => {
  return (
    <div
    id="projects"
      className={`${cover_style}  ${
        current_page === "projects"
          ? "xl:opacity-[1] xl:translate-x-0 xl:relative z-100 "
          : "xl:opacity-[0] xl:translate-x-[-50%] xl:absolute "
      }`}
    >
      <div className={` w-full lg:h-full xl:overflow-y-scroll`}>
        {/* Start Header */}
        <Projects_header />
        {/* Start Projects Grid */}
        <Projects_grid />
      </div>
    </div>
  );
};

const cover_style = `
cover lg:h-full bg-bg white-space-style rounded-[5px] lg:rounded-[0_5px_5px_0] duration-700! w-full
`;

export default Projects;
