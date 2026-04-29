import React from "react";

const Animation_background = () => {
  return (
    <div className="fixed bg-transparent top-0 left-0 w-full h-full">
      <ul className="elements-row gap-2.5">
        {Array(5)
          .fill(0)
          .map((_, index) => {
            return (
              <li
                className={`w-60 h-60 bg-white opacity-[0.1] rounded-[10px] absolute bottom-0 bubbles-animation`}
                style={{
                  left: `${index * 20}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: "15s",
                }}
                key={index}
              ></li>
            );
          })}
      </ul>
    </div>
  );
};

export default React.memo(Animation_background);
