import React from "react";
import profile_image from "../assets/profile_image.jpg";
const Home = () => {
  const communication = [
    {
      link: "https://github.com/Ahmed-Ibrahiem",
      icon: "fa-brands fa-github",
    },
    {
      link: "https://www.linkedin.com/in/ahmed-ibrahiem-1796b7328/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRvkzO6GoSYaGWDHYR3Q%2FPg%3D%3D",
      icon: "fa-brands fa-linkedin",
    },
    {
      link: "https://www.facebook.com/POOMMECOM",
      icon: "fa-brands fa-facebook",
    },
  ];

  return (
    <div className={`profile_card ${profile_card} `}>
      <div className="card_cover h-full!">
        <div className={`image_box ${image_box_style}`}>
          <img
            className="min-w-full! min-h-full! object-cover! "
            src={`${profile_image} `}
            alt=""
          />
        </div>
        <div className={`${prfile_info_style} text-dark-text`}>
          <h1 className="title text-lg font-medium ">Ahmed Ibrahiem</h1>
          <h3 className="subtitle text-sm text-main ">Frontend Developer </h3>
          <ul className="commun elements-row gap-[15px] mt-[20px] ">
            {communication.map((com, index) => {
              return (
                <li key={index}>
                  <a href={`${com.link}`}>
                    <i className={`${com.icon}`}></i>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className={`profile_links ${profile_links_style}`}>
            <button className={contact_btn_style}>
              <span>Contact</span>
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const profile_card = `
bg-bg  min-h-[100vh]! xl:min-h-full! xl:h-full rounded-[5px] overflow-hidden relative xl:min-w-[480px]! xl:max-w-[480px]!
 shadow-[2px_2px_10px] shadow-[#00000024] z-[10]
`;

const image_box_style = `
adjust-image h-[56%]! profile-image-style overflow-hidden
`;

const prfile_info_style = `
profile_info elements-center-column py-[20px]
`;

const profile_links_style = `
 bottom-0 left-[50%] translate-x-[-50%] p-[20px] w-full gradient-border border-top-center absolute! elements-center-row
`;

const contact_btn_style = `
elements-row gap-[10px] text-sm font-medium hover:text-main
`;

export default Home;
