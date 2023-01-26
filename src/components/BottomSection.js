import React from "react";
import { Box } from "@chakra-ui/react";
import "../App.css";

const BottomSection = ({ splitTotal, tipPerPerson, totalBill }) => {
  return (
    <Box
      width={{ base: "280px", md: "400px" }}
      height={{ base: "260px", md: "300px" }}
      position={"relative"}
      overflow={"hidden"}
      rounded={"2xl"}
      display={"flex"}
      justifyContent={"center"}
      padding={"10px"}
      box-shadow={"10px 10px 5px #12343b"}
      align-items={"center"}
      background={"#2d545e;"}
      fontSize={{ base: "18px", md: "22px" }}
      textAlign={"center"}
    >
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
    </Box>
  );
};

export default BottomSection;
