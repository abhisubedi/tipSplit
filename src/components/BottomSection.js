import React from "react";
import "../App.css";

const BottomSection = ({ splitTotal, tipPerPerson, totalBill }) => {
  return (
    <div className="bottomSection">
      <div className="resultPerPerson">
        <label> Tip Per Person </label>
        <span> $ {tipPerPerson}</span>
      </div>

      <div className="totalResult">
        <label> Total (Bill + Tip) Per Person </label>
        <span> $ {splitTotal}</span>
      </div>

      <div className="finalBill">
        <label> Final Bill </label>
        <span> $ {totalBill}</span>
      </div>
    </div>
  );
};

export default BottomSection;
