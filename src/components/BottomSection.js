import React from "react";
import "../App.css";

const BottomSection = ({
  split,
  splitTotal,
  splitMinus,
  splitPlus,
  tipPerPerson,
}) => {
  return (
    <div className="bottomSection">
      <div className="split">
        <label> Split The Bill ? </label>
        <div className="split-control">
          <button onClick={splitMinus}> - </button>
          <span>{split} </span>
          <button onClick={splitPlus}> + </button>
        </div>
      </div>

      <div className="resultPerPerson">
        <label> Tip Per Person </label>
        <span> $ {tipPerPerson}</span>
      </div>

      <div className="totalResult">
        <label> Total (Bill + Tip) Per Person </label>
        <span> $ {splitTotal}</span>
      </div>
    </div>
  );
};

export default BottomSection;
