import Section_title from "../UI/Section_title";
import { about_info } from "../../assets/assets";

const Get_in_touch = () => {
  return (
    <div className="contact_area overflow-y-scroll! overflow-x-clip">
      <div className="head ">
        <Section_title title={"Get In Touch"} style={"p-5! font-[600]!"} />
      </div>
      <div className="p-5 pb-0">
        {/* Location Map */}
        <div className="map_location w-full h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13737.185997412733!2d31.0797021016437!3d30.597399114533022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d097745e2f7b%3A0x39ff2bf9d14bb528!2z2KfZhNiv2KjYp9mK2KjYqdiMINin2YTYr9io2KfYqNmK2KnYjCDZhdix2YPYsiDYqNix2YPYqSDYp9mE2LPYqNi52Iwg2YXYrdin2YHYuNipINin2YTZhdmG2YjZgdmK2Kk!5e0!3m2!1sar!2seg!4v1763982406950!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Personal Info  */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-5  ">
          {about_info.map((info, index) => {
            return (
              <li
                key={index}
                className="elements-between-row p-[10px_0] gradient-border border-bottom-center"
              >
                <span className="theme-button">{info.title}:</span>
                <p className="text-sm text-gray">{info.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Get_in_touch;
