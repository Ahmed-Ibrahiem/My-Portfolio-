import React from "react";

const LoadingScreen = () => {
  return (
    <div className="w-full h-screen top-0 left-0 fixed flex items-center justify-center bg-white z-1000">
      <div className="circle-one w-18 h-18 rounded-full bg-gray/10 loading-animation"></div>
      <div className="circle-one w-18 h-18 rounded-full bg-main loading-animation2 absolute top-[50%] left-[50%] translate-[-50%]"></div>
    </div>
  );
};

export default LoadingScreen;
