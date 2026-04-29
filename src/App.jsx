import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Layout/Header";
import About from "./Pages/About";
import { useState } from "react";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Animation_background from "./Components/UI/Animation_background";
import { use_projects_context } from "./Contexts/Projects_providor";
import LoadingScreen from "./Components/UI/LoadingScreen";

const App = () => {
  const [current_page, set_current_page] = useState("about");
  const { isLoading, isError, data_will_display } = use_projects_context();

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isError && !isLoading && data_will_display && (
        <div className={`${app_style}`}>
          <div className={`${app_area_style}`}>
            <Animation_background />
            <div className={`${content_area_style}`}>
              <Header
                current_page={current_page}
                set_current_page={set_current_page}
              />
              <div
                className={`flex flex-col w-full gap-5 xl:gap-0 xl:flex-row xl:items-center xl:h-full `}
              >
                <Home />
                <div className={` ${pages_container_style}`}>
                  <About current_page={current_page} />
                  <Projects current_page={current_page} />
                  <Skills current_page={current_page} />
                  <Contact current_page={current_page} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const app_style = `
 w-full gradient-bg xl:h-[100vh] flex xl:flex-row items-center justify-center py-[20px] lg:p-[50px]
`;

const app_area_style = `
main_container sm:ml-[50px] w-[95%] sm:w-[70%] xl:w-[1200px] xl:h-[90vh] flex xl:flex-row xl:items-center xl:justify-center
`;

const content_area_style = `
content w-full rounded-[0_5px_5px_0] flex gap-[10px] xl:gap-0 xl:h-full bg-transparent relative 
`;

const pages_container_style = `
pages_container h-fit lg:h-[95%] grow! z-0 elements-center-row flex-col! xl:flex-row! relative gap-[20px]
xl:gap-0 rounded-[0_5px_5px_0] overflow-hidden
`;

export default App;
