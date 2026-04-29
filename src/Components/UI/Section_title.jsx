import { BsFileEarmarkPerson } from "react-icons/bs";

const Section_title = ({ title, style }) => {
  return (
    <div className="gradient-border border-bottom-left flex justify-between items-center w-full">
      <h1
        className={`section-title-style  p-[20px_0] text-dark-text! ${style}`}
      >
        <span className="text-main ">{title.charAt(0)}</span>
        {title.slice(1)}
      </h1>

      <a
        href="ahmed_cv.pdf"
        download={"Ahmed Ibrahiem.pdf"}
        className={`${btnStyle}`}
      >
        <BsFileEarmarkPerson /> <span>CV</span>
      </a>
    </div>
  );
};

const btnStyle = `
bg-main p-[5px_10px] hover:bg-transparent! w-fit rounded-[5px] elements-center-row gap-1.5 font-medium text-white hover:text-main border-2!
cursor-pointer border-main! text-[16px]
`;
export default Section_title;
