import React from "react";
import { my_services } from "../../assets/assets";

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
            <h1 className="w-[70%] mt-2.5 text-dark-text text-sm font-medium ">
              {service.title}
            </h1>
            <p className="desc text-[14px] mt-5 text-gray ">
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

export default Services;
