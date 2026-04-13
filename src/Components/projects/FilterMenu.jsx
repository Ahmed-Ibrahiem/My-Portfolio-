import { projects_filter } from "../../assets/assets";

const FilterMenu = ({
  filter_menu_ref,
  is_filter_open,
  set_is_filter_open,
  current_filter,
  set_current_filter,
}) => {
  return (
    <div
      className={`${filter_select_style}`}
      ref={filter_menu_ref}
      onClick={() => set_is_filter_open(!is_filter_open)}
    >
      {/* Current Filter Part */}
      <p>{current_filter.view}</p>
      <i className="fa-solid fa-angle-right"></i>

      {/* Options Part */}
      <div
        className={`${filter_options_style}  shadow-[#0000002a]! ${
          is_filter_open ? "fade-in-animation" : "fade-out-animation"
        }`}
      >
        {projects_filter.map((option, index) => {
          return (
            <span
              className="p-[5px_10px] hover:bg-hover"
              key={index}
              onClick={() => set_current_filter(option)}
            >
              {option.view}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const filter_select_style = `
select w-[140px] theme-button rounded-[5px] elements-between-row  relative cursor-pointer mr-[20px]
`;

const filter_options_style = `
options absolute top-[100%] left-0 w-full elements-column bg-bg rounded-[5px] text-gray shadow-[0_0_5px] shadow-[#ccc]
`;

export default FilterMenu;
