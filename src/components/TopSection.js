import React from "react";
import "../App.css";

const TopSection = ({ bill, handleBillChange, tip, handleTipChange }) => {
  return (
    <div className="topSection">
      <label> Bill Total </label>
      <input
        type="text"
        placeholder={"0.00"}
        value={bill}
        onChange={handleBillChange}
      />
      <label> Tip ? </label>
      <div
        style={{
          display: "flex",
        }}
      >
        <input
          type="number"
          placeholder="how much "
          value={tip}
          onChange={handleTipChange}
        />{" "}
        %
      </div>
    </div>
  );
};

export default TopSection;
