const Knowledge = () => {
  const knowledge_skills = [
    "HTML, CSS, JavaScript",
    "Responsive and modern UI design",
    "React framework",
    "Tailwind CSS",
    "API integration (REST & JSON)",
    "Git and GitHub workflow",
    "Performance optimization fundamentals",
    "Frontend testing (Jest)",
    "Web accessibility",
    "Build tools such as Vite",
  ];
  return (
    <div className="coding_skills_area pl-[20px] gradient-border reverse-square-gradient-border md:max-w-[50%] grow">
      <div className={`${title_part}`}>
        <i className="fa-solid fa-list text-main "></i>
        <h1>KNOWLEDGE</h1>
      </div>
      <ul className="elements-column gap-[5px] mt-[20px]">
        {knowledge_skills.map((point, index) => {
          return (
            <li key={index} className="elements-row gap-[20px] items-start!">
              <i className="fa-solid fa-check text-main text-[18px]"></i>
              <h3 className="text-gray text-sm mb-[5px]">{point}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const title_part = `
elements-row gap-[10px] text-sm font-[600] gradient-border border-bottom-center pb-[20px] text-dark-text
`;

export default Knowledge;
