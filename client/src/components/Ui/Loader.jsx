import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      <div className="loader">
        <div className="loader-inner ball-pulse">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
