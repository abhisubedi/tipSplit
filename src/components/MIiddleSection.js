import React from "react";
import { Box, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import "../App.css";
const MiddleSection = ({ split, splitMinus, splitPlus }) => {
  return (
    <Box
      width={{ base: "280px", md: "400px" }}
      height={{ base: "100px", md: "100px" }}
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
    </Box>
  );
};

export default MiddleSection;
