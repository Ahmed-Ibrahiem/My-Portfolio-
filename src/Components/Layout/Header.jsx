import { useState } from "react";
import { BiShowAlt } from "react-icons/bi";
import { FaMoon, FaPaperPlane, FaSun, FaUser } from "react-icons/fa";
import { FaRegRectangleList } from "react-icons/fa6";

const Header = ({ current_page, set_current_page }) => {
  const pages_btns = [
    {
      id: 1,
      title: "about",
      icon: FaUser,
    },
    {
      id: 2,
      title: "projects",
      icon: BiShowAlt,
    },
    {
      id: 3,
      title: "skills",
      icon: FaRegRectangleList,
    },
    {
      id: 4,
      title: "contact",
      icon: FaPaperPlane,
    },
  ];

  const [is_header_open, set_is_header_open] = useState(false);
  const [is_dark_mode, set_is_dark_mode] = useState(false);

  const toggle_header_state = () => {
    set_is_header_open(!is_header_open);
  };

  const toggle_theme_mode = () => {
    set_is_dark_mode(!is_dark_mode);
    document.body.classList.toggle("dark_mode");
  };

  return (
    <div
      className={`${header_style} duration-700! ease-in sm:shadow  ${
        is_header_open ? "top-0" : "top-[-70px]"
      } ${is_dark_mode ? "shadow-[0_0_5px_rgba(255,255,255,0.5)]" : "shadow"}`}
    >
      <div className={`flex sm:flex-col gap-5`}>
        {/* Header top */}
        <div className={`header_top ${header_section_style}`}>
          <button
            className={`${actions_btn_style}`}
            onClick={toggle_theme_mode}
          >
            {is_dark_mode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        {/* Header Bottom  */}
        <div className={`header_bottom ${header_section_style}`}>
          {pages_btns.map((btn) => {
            return (
              <a
                href={`#${btn.title}`}
                onClick={() => set_current_page(btn.title)}
                className={`${page_btn_style} gradient-border border-bottom-right ${
                  current_page == btn.title ? "text-main!" : ""
                }`}
                key={btn.id}
              >
                <btn.icon className={`text-sm md:text-md`} />
                <span>{btn.title}</span>
              </a>
            );
          })}
        </div>
      </div>
      {/* Responsive menu button */}
      <button
        className={`${res_btn_menu_style} `}
        onClick={toggle_header_state}
      >
        <i className="fa-solid fa-angle-down mt-[65px]"></i>
      </button>
    </div>
  );
};

const header_style = `
header elements-column flex-row! sm:flex-col! gap-[15px]  w-fit rounded-[5px] mr-[10px] fixed top-0 w-full sm:w-auto sm:top-[50px] xl:top-[50%] z-[1000]
xl:translate-y-[-50%] left-0 sm:left-auto sm:ml-[-80px] bg-bg sm:bg-transparent justify-center
`;

const header_section_style = `elements-column flex-row! gap-[15px] sm:gap-0 sm:flex-col! bg-bg rounded-[5px] overflow-hidden`;

const actions_btn_style = `
theme_mode_btn elements-center-row text-md p-[15px_5px] sm:p-[15px] hover:text-main cursor-pointer gradient-border border-bottom-right 
text-dark-text after:hidden! sm:after:block!
`;

const page_btn_style = `
elements-center-column text-xs gap-[5px] p-[15px_5px] sm:p-[13px_10px] hover:text-main cursor-pointer gradient-border border-bottom-right 
after:hidden! sm:after:block! text-dark-text cursor-pointer capitalize
`;

const res_btn_menu_style = `
w-[100px] h-[100px] rounded-[50%] bg-bg text-gray z-[-1] elements-center-row text-md
hover:text-main absolute top-[calc(100%-70px)] mx-auto sm:hidden! shadow-[0_0_7px] shadow-[#0000001d]
`;

export default Header;
