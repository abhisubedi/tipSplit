import React from "react";
import { Box, NumberInput } from "@chakra-ui/react";

const TopSection = ({ bill, handleBillChange, tip, handleTipChange }) => {
  return (
    <Box
      data-testid="topSection"
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
      background={"#2d545e"}
      mb={9}
      fontSize={{ base: "18px", md: "22px" }}
      textAlign={"center"}
    >
      <div className="topSection">
        <div>
          <label> Bill Total </label>
          <NumberInput color={"#2d545e"}>
            <input
              placeholder={"0.00"}
              value={bill}
              onChange={handleBillChange}
            />
          </NumberInput>
        </div>

        <div>
          <label> Tip % </label>
          <NumberInput color={"#2d545e"}>
            <input
              placeholder="how much ? "
              value={tip}
              onChange={handleTipChange}
            />{" "}
          </NumberInput>
        </div>
      </div>
    </Box>
  );
};

export default TopSection;
