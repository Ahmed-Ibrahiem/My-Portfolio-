import { createContext, useContext, useReducer, useRef } from "react";

const handle_scroll_context = createContext();

const scroll_reducer = (state, action) => {
  switch (action) {
    case "ABOUT":
      scrollTo(state.about.scrollY);
      break;
    case "SKILLS":
      scrollTo(state.skills.scrollY);
      break;
    default:
      return state;
  }
};

const Handle_scroll_provider = ({ children }) => {
  const initial_value = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
  };

  const [scroll_tartget, dispatch_scroll_target] = useReducer(
    scroll_reducer,
    initial_value
  );

  const value = {
    scroll_tartget
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
