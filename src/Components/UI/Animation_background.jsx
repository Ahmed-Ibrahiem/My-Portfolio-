import React from "react";

const Animation_background = () => {
  return (
    <div className="fixed bg-transparent top-0 left-0 w-full h-full">
      <ul className="elements-row gap-[10px]">
        {Array(7)
          .fill(0)
          .map((_, index) => {
            return (
              <li
                className={`w-[150px] h-[150px] bg-white opacity-[0.1] rounded-[10px] absolute bottom-0 bubbles-animation`}
                style={{
                  left: `${(index * 16)}%`,
                  animationDelay: `${Math.random() * index}s`,
                }}
                key={index}
              ></li>
            );
          })}
      </ul>
    </div>
  );
};

export default Animation_background;
