import { createContext, useContext, useReducer, useRef } from "react";

const handle_scroll_context = createContext();

const Handle_scroll_provider = ({ children }) => {
  const scroll_tartget = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
  };

  const scroll_to = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const value = {
    scroll_tartget,
    scroll_to,
  };
  return (
    <handle_scroll_context.Provider value={value}>
      {children}
    </handle_scroll_context.Provider>
  );
};

export const use_handle_scroll_context = () => {
  return useContext(handle_scroll_context);
};

export default Handle_scroll_provider;
