import { use_projects_context } from "../../Contexts/Projects_providor";

const Projects_grid = () => {
  const { data_will_display } = use_projects_context();
  //
  return (
    <div className="projects_grid lg:w-[96%] mx-auto grid md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] ">
      {data_will_display.map((data, index) => {
        return (
          <div
            className={`${project_style} align-top ${
              index % 2 == 0 ? "square-gradient-border" : ""
            }`}
            key={data.id}
          >
            <div className={`${img_box_style}`}>
              <img
                className={`${image_style}`}
                src={data.image}
                alt={data.title}
              />
              <div className="links w-full h-full absolute top-0 left-0 elements-center-row gap-5 z-10">
                <a href={data.demo} className={`${link_style}`}>
                  <i className="fa-solid fa-laptop text-md"></i>
                </a>
                <a href={data.github} className={`${link_style}`}>
                  <i className="fa-solid fa-code text-md"></i>
                </a>
              </div>
            </div>
            <h1 className="title text-dark-text text-center w-full text-sm font-bold group-hover:text-main line-clamp-1 ">
              {data.title}
            </h1>
            <p className="text-xs text-gray text-center ">{data.description}</p>
          </div>
        );
      })}
    </div>
  );
};

const project_style = `
project gradient-border border-bottom-center p-[20px]
elements-column gap-[15px] group before:hidden! md:before:block!
`;

const img_box_style = `
w-[100%] h-[200px] relative adjust-image adjust-before-after card-gradient-effect before:z-[5]
before:opacity-0 after:hidden group-hover:before:opacity-[1] group/imageBox 
`;

const image_style = `
absolute top-0 left-0 transition-transform duration-[1s]! group-hover/imageBox:duration-[10s]!
w-full imageBox group-hover/imageBox:-translate-y-[calc(100%-12.5rem)] ease-in-out
`;

const link_style = `
elements-center-column w-[50px] h-[50px] rounded-[50%] bg-white text-main opacity-0 translate-y-[100px]
group-hover:opacity-[1] group-hover:translate-y-[0] 
`;

export default Projects_grid;
