import React from "react";
import "../App.css";

const BottomSection = ({ split, splitTotal, splitMinus, splitPlus }) => {
  return (
    <div className="bottomSection">
      <div className="split">
        <label> Split </label>
        <div className="split-control">
          <button onClick={splitMinus}> - </button>
          <span>{split} </span>
          <button onClick={splitPlus}> + </button>
        </div>
      </div>

      <div className="result">
        <label> Split Total </label>
        <span> {splitTotal}</span>
      </div>
    </div>
  );
};

export default BottomSection;
