import React from "react";
import "../App.css";
const MiddleSection = ({ split, splitMinus, splitPlus }) => {
  return (
    <div className="middleSection">
      <div className="split">
        <label> Split The Bill ? </label>
        <div className="split-control">
          <button onClick={splitMinus}> - </button>
          <span>{split} </span>
          <button onClick={splitPlus}> + </button>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
