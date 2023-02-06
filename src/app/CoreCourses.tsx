import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const CoreCourses = () => {
  return (
    <Stack
      textAlign={"center"}
      spacing="1.5rem"
      display="flex"
      alignItems={"center"}
    >
      <Heading>Core Courses</Heading>
      <Stack
        direction={["column", "column", "row"]}
        spacing={"1.5rem"}
        px="1rem"
      >
        <Box boxShadow={"base"} width={"21.75rem"}>
          <Heading
            fontSize={"1.5rem"}
            backgroundColor="blue.300"
            fontWeight={"semibold"}
            textColor={"white"}
            py="0.5rem"
          >
            Quarter I
          </Heading>
          <Text
            fontSize="1.02rem"
            // fontStyle={}
            px="1rem"
            height="7.7rem"
            display={"flex"}
            alignItems={"center"}
            textColor="blue.500"
            fontWeight={"semibold"}
          >
            CS-101: Object-Oriented Programming using TypeScript
          </Text>
        </Box>
        <Box boxShadow={"base"} width={"21.75rem"}>
          <Heading
            fontSize={"1.5rem"}
            backgroundColor="blue.300"
            fontWeight={"semibold"}
            textColor={"white"}
            py="0.5rem"
          >
            Quarter II
          </Heading>
          <Text
            fontSize="1.02rem"
            px="1rem"
            height="7.7rem"
            display={"flex"}
            alignItems={"center"}
            textColor="blue.500"
            fontWeight={"semibold"}
          >
            W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps
            and APIs.
          </Text>
        </Box>
        <Box boxShadow={"base"} width={"21.75rem"}>
          <Heading
            fontSize={"1.5rem"}
            backgroundColor="blue.300"
            fontWeight={"semibold"}
            textColor={"white"}
            py="0.5rem"
          >
            Quarter III
          </Heading>
          <Text
            fontSize="1.02rem"
            px="1rem"
            height="7.7rem"
            display={"flex"}
            alignItems={"center"}
            textColor="blue.500"
            fontWeight={"semibold"}
          >
            $-101: Dollar Making Bootcamp - Full-Stack Template and API Product
            Development
          </Text>
        </Box>
      </Stack>
    </Stack>
  );
};
