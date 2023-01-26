import React from "react";
import { Box } from "@chakra-ui/react";
import "../App.css";

const TopSection = ({ bill, handleBillChange, tip, handleTipChange }) => {
  return (
    <Box
      width={{ base: "280px", md: "400px" }}
      height={{ base: "150px", md: "150px" }}
      position={"relative"}
      overflow={"hidden"}
      rounded={"2xl"}
      display={"flex"}
      justifyContent={"center"}
      padding={"10px"}
      box-shadow={"10px 10px 5px #12343b"}
      align-items={"center"}
      background={"#2d545e;"}
      mb={9}
      fontSize={{ base: "18px", md: "22px" }}
      textAlign={"center"}
      fontFamily={"Kalam"}
      textColor={"White"}
    >
      <div className="topSection">
        <div>
          <label> Bill Total </label>
          <input
            type="text"
            placeholder={"0.00"}
            value={bill}
            onChange={handleBillChange}
          />
          <label> Tip % </label>
        </div>

        <div>
          <input
            type="text"
            placeholder="how much ? "
            value={tip}
            onChange={handleTipChange}
          />{" "}
        </div>
      </div>
    </Box>
  );
};

export default TopSection;
