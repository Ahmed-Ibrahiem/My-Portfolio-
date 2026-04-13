import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const projects_context = createContext();

const Projects_providor = ({ children }) => {
  const projects_url = "projects.json";
  const [current_filter, set_current_filter] = useState({
    value: "all",
    view: "All",
  });
  const [all_my_projects, set_all_my_projects] = useState([]);
  const [data_will_display, set_data_will_display] = useState([]);

  // Get the projects data from json file
  useEffect(() => {
    const fetch_api = async () => {
      try {
        const req = await axios.get(projects_url);
        const res = await req.data;
        set_all_my_projects(res);
      } catch (err) {}
    };

    fetch_api();
  }, []);

  useEffect(() => {
    get_data_will_display();
  }, [all_my_projects, current_filter]);

  const get_data_will_display = () => {
    if (!all_my_projects) return;
    let display_data = all_my_projects.filter(
      (data) => data.category == current_filter.value
    );

    if (current_filter.value == "all") display_data = all_my_projects;
    set_data_will_display(display_data);
  };

  const value = {
    all_my_projects,
    current_filter,
    set_current_filter,
    data_will_display,
  };
  return (
    <projects_context.Provider value={value}>
      {children}
    </projects_context.Provider>
  );
};

export const use_projects_context = () => {
  return useContext(projects_context);
};
export default Projects_providor;
