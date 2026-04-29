import Section_title from "../UI/Section_title";
import { useEffect, useRef, useState } from "react";
import { use_projects_context } from "../../Contexts/Projects_providor";
import FilterMenu from "./FilterMenu";

const Projects_header = () => {
  const { current_filter, set_current_filter } = use_projects_context();
  const [is_filter_open, set_is_filter_open] = useState(false);
  const filter_menu_ref = useRef(null);

  // Adjust the click of user if he clicked outside the filter menu close it automatically
  useEffect(() => {
    const handle_click = (e) => {
      if (
        filter_menu_ref.current &&
        !filter_menu_ref.current.contains(e.target)
      ) {
        set_is_filter_open(false);
      }
    };

    document.addEventListener("click", handle_click);

    return () => document.removeEventListener("click", handle_click);
  }, [filter_menu_ref]);

  return (
    <div className={`${header_style} z-[100] pr-[10px]`}>
      <Section_title title={"Projects"} style={`p-[20px]! after:hidden!`} />
      {/* <FilterMenu
        filter_menu_ref={filter_menu_ref}
        is_filter_open={is_filter_open}
        set_is_filter_open={set_is_filter_open}
        current_filter={current_filter}
        set_current_filter={set_current_filter}
      /> */}
    </div>
  );
};

const header_style = `
header elements-between-row gradient-border border-bottom-left
`;

export default Projects_header;
