import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
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
      background={"#2d545e"}
      mb={9}
      fontSize={{ base: "18px", md: "22px" }}
      textAlign={"center"}
    >
      <div className="middleSection">
        <Text>Split The Bill ? </Text>

        <Box display={"flex"} justifyContent={"center"}>
          <Button color={"#2d545e"} onClick={splitMinus}>
            {" "}
            -{" "}
          </Button>

          <Text padding={"0 50px"}>{split} </Text>

          <Button color={"#2d545e"} onClick={splitPlus}>
            {" "}
            +{" "}
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default MiddleSection;
