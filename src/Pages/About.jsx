import { about_info } from "../assets/assets";
import Services from "../Components/about/Services";
import Section_title from "../Components/UI/Section_title";

const About = ({ current_page }) => {
  return (
    <div
      id="about"
      className={`cover ${cover_style} ${
        current_page == "about"
          ? "xl:opacity-[1] xl:translate-x-0 xl:relative z-100 "
          : "xl:opacity-[0] xl:translate-x-[-50%] xl:absolute "
      }`}
    >
      <div className={`overflow-y-scroll h-full p-5 overflow-x-clip`}>
        <div className="head ">
          <Section_title title={"About"} style={"p-0! pb-[20px]!"} />
        </div>
        <div className=" items-start ">
          <div className="left p-[20px_30px] gradient-border border-bottom-center">
            <h1 className="text-gray ">
              <span className="font-bold">
                Hello! I’m a Frontend Developer.
              </span>{" "}
              <br />
              who loves building complete web experiences from scratch —
              starting from a blank page and ending with a polished, fully
              functional product. <br /> <br /> I focus on creating interfaces
              that are visually engaging and feel natural to use. <br /> <br />{" "}
              I enjoy the challenge of turning complex interactions into smooth,
              intuitive experiences — and I'm always thinking about performance
              along the way. <br /> <br />
              My most complete project so far is Marcedo, a full e-commerce
              platform with 10+ pages, advanced filtering, cart, wishlist,
              checkout flow, and authentication — built entirely with React and
              Vite.
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

export default About;
