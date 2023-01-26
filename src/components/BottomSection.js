import React from "react";
import { Box, Text } from "@chakra-ui/react";
import "../App.css";

const BottomSection = ({ splitTotal, tipPerPerson, totalBill }) => {
  return (
    <Box
      width={{ base: "280px", md: "400px" }}
      height={{ base: "250px", md: "250px" }}
      position={"relative"}
      overflow={"hidden"}
      rounded={"2xl"}
      display={"flex"}
      justifyContent={"center"}
      padding={"10px"}
      box-shadow={"10px 10px 5px #12343b"}
      align-items={"center"}
      background={"#2d545e"}
      fontSize={{ base: "18px", md: "22px" }}
      textAlign={"center"}
    >
      <div className="bottomSection">
        <label> Tip Per Person</label>
        <Text
          borderStyle={"outset"}
          border={"2px"}
          borderColor={"#12343b"}
          mb={3}
        >
          {" "}
          $ {tipPerPerson}
        </Text>

        <label> Total (Bill + Tip) Per Person </label>
        <Text
          borderStyle={"outset"}
          border={"2px"}
          borderColor={"#12343b"}
          mb={3}
        >
          $ {splitTotal}
        </Text>

        <label> Final Bill </label>
        <Text borderStyle={"outset"} border={"2px"} borderColor={"#12343b"}>
          {`$ ${totalBill}`}
        </Text>
      </div>
    </Box>
  );
};

export default BottomSection;
