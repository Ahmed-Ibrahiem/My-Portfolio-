import Contact_form from "../Components/contact/Contact_form";
import Get_in_touch from "../Components/contact/Get_in_touch";

const Contact = ({ current_page }) => {
  return (
    <div
      id="contact"
      className={`skills_cover ${cover_style} ${
        current_page == "contact"
          ? "xl:opacity-[1] xl:translate-x-0 xl:relative z-100 "
          : "xl:opacity-[0] xl:translate-x-[-50%] xl:absolute "
      }`}
    >
      <div className="contact_area h-full overflow-y-scroll overflow-x-clip">
        {/* <Get_in_touch /> */}
        <Contact_form />
      </div>
    </div>
  );
};

const cover_style = `
cover lg:h-full bg-bg white-space-style rounded-[5px]! lg:rounded-[0_5px_5px_0] duration-700! w-full
`;

export default Contact;
