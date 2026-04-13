import { about_info, my_services } from "../assets/assets";
import Section_title from "../Components/UI/Section_title";
import { use_handle_scroll_context } from "../Contexts/Handle_scroll_provider";

const About = ({ current_page }) => {
  const { scroll_tartget } = use_handle_scroll_context();
  return (
    <div
      ref={scroll_tartget.about}
      className={`cover ${cover_style} ${
        current_page == "About"
          ? "xl:opacity-[1] xl:translate-x-0 xl:relative z-[100] "
          : "xl:opacity-[0] xl:translate-x-[-50%] xl:absolute "
      }`}
    >
      <div className={`overflow-y-scroll h-full p-[20px] overflow-x-clip`}>
        <div className="head ">
          <Section_title title={"About"} style={"p-0! pb-[20px]!"} />
        </div>
        <div className=" items-start ">
          <div className="left p-[20px_30px] gradient-border border-bottom-center">
            <h1 className="text-gray ">
              <span className="font-bold">
                Hello! I’m a Frontend Developer.
              </span>{" "}
              <br />I build modern and responsive web interfaces using React and
              Tailwind CSS, and I enjoy turning ideas into clean and functional
              user experiences. I’ve worked on dashboards, landing pages,
              eCommerce interfaces, LMS platforms, and interactive web projects.
            </h1>
          </div>
          <div className="right grow  h-full">
            <ul className="elements-column p-[20px_20px] ">
              {about_info.map((info, index) => {
                return (
                  <li
                    key={index}
                    className="elements-between-row p-[7px_10px] gradient-border border-bottom-center"
                  >
                    <span className="theme-button">{info.title}:</span>
                    <p className="text-sm text-gray">{info.desc}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="services w-full">
          <Section_title title={"My Services"} />
          <Services />
        </div>
      </div>
    </div>
  );
};

const cover_style = `
lg:h-full bg-bg white-space-style rounded-[0_5px_5px_0] duration-700!`;

export const Services = () => {
  return (
    <div className="elements-center-row items-start! flex-wrap ">
      {my_services.map((service, index) => {
        return (
          <div
            className={`${service_style} ${
              index % 2 == 0 && index !== my_services.length - 1
                ? "before:hidden lg:before:block square-gradient-border "
                : ""
            } `}
            key={index}
          >
            <div className="bg-main text-white text-lg elements-center-row w-[60px] h-[60px] rounded-[50%]">
              <img src={service.icon} className="w-[30px] h-[30px]" alt="" />
            </div>
            <h1 className="w-[70%] mt-[10px] text-dark-text text-sm font-medium ">
              {service.title}
            </h1>
            <p className="desc text-[14px] mt-[20px] text-gray ">
              {service.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const service_style = `
service elements-center-column gradient-border border-bottom-center w-[50%]  p-[20px] text-center min-w-[300px] grow
`;

export default About;
