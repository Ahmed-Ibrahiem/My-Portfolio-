const Coding = () => {
  const coding_skills = [
    {
      title: "HTML / CSS / JS",
      level: "95%",
    },
    {
      title: "React / Typescript / Tailwind",
      level: "90%",
    },
    {
      title: "Jest",
      level: "80%",
    },
    {
      title: "Git/GitHup",
      level: "90%",
    },
  ];

  return (
    <div className="coding_skills_area w-full md:w-[50%] pr-[20px] grow">
      <div className={`${title_part}`}>
        <i className="fa-solid fa-code text-main "></i>
        <h1>CODING</h1>
      </div>
      <ul className="elements-column gap-[20px] mt-[20px]">
        {coding_skills.map((skill, index) => {
          return (
            <li key={index}>
              <h3 className="text-gray text-sm mb-[5px]">{skill.title}</h3>
              <div className={bar_style}>
                <span
                  className={`${progress_style}`}
                  style={{ width: skill.level }}
                ></span>
              </div>
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

const bar_style = `
bar w-full h-[7px]  relative bg-bar-progress!
`;

const progress_style = `
progress block h-full bg-main absolute top-0 left-0
`;

export default Coding;
