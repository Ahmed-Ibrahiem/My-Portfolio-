const Section_title = ({ title, style }) => {
  return (
    <div>
      <h1
        className={`section-title-style gradient-border border-bottom-left p-[20px_0] text-dark-text! ${style}`}
      >
        <span className="text-main ">{title.charAt(0)}</span>
        {title.slice(1)}
      </h1>
    </div>
  );
};

export default Section_title;
