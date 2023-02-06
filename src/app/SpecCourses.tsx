import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const SpecCourses = () => {
  return (
    <Stack textAlign={"center"} spacing="1.5rem" alignItems={"center"}>
      <Heading>Specialized Courses</Heading>
      <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]} gap={"6"} px="1rem">
        <Box boxShadow={"base"} width={"21.75rem"}>
          <Heading
            fontSize={"1.5rem"}
            backgroundColor="red.300"
            py="0.5rem"
            fontWeight={"semibold"}
          >
            Web 3.0 (Blockchain) and Metaverse Specialization
          </Heading>
          <Text
            fontSize="1.02rem"
            px="1rem"
            height="7.7rem"
            display={"flex"}
            alignItems={"center"}
            textColor="red.500"
            fontWeight={"semibold"}
          >
            This specialization focuses on developing full-stack Web 3.0 and
            Metaverse experiences.
          </Text>
        </Box>
        <Box boxShadow={"base"} width={"21.75rem"}>
          <Heading
            fontSize={"1.5rem"}
            backgroundColor="red.300"
            py="0.5rem"
            fontWeight={"semibold"}
          >
            Artificial Intelligence (AI) and Deep Learning Specialization
          </Heading>
          <Text
            fontSize="1.02rem"
            px="1rem"
            height="7.7rem"
            display={"flex"}
            alignItems={"center"}
            textColor="red.500"
            fontWeight={"semibold"}
          >
            This specialization focuses on building intelligent APIs using
            OpenAI models.
          </Text>
        </Box>
        <Box boxShadow={"base"} width={"21.75rem"}>
          <Heading
            fontSize={"1.5rem"}
            backgroundColor="red.300"
            py="0.5rem"
            fontWeight={"semibold"}
          >
            Cloud-Native Computing Specialization
          </Heading>
          <Text
            fontSize="1.02rem"
            px="1rem"
            height="7.7rem"
            display={"flex"}
            alignItems={"center"}
            textColor="red.500"
            fontWeight={"semibold"}
          >
            The Cloud-Native Computing Specialization focuses on Containers,
            Kubernetes, and CDK for Kubernetes.
          </Text>
        </Box>
        <Box boxShadow={"base"} width={"21.75rem"}>
          <Heading
            fontSize={"1.5rem"}
            backgroundColor="red.300"
            py="0.5rem"
            fontWeight={"semibold"}
          >
            Ambient Computing and IoT Specialization
          </Heading>
          <Text
            fontSize="1.02rem"
            px="1rem"
            height="7.7rem"
            display={"flex"}
            alignItems={"center"}
            textColor="red.500"
            fontWeight={"semibold"}
          >
            This Specialization focuses on building Smart Homes and Cities.
          </Text>
        </Box>
        <Box boxShadow={"base"} width={"21.75rem"}>
          <Heading
            fontSize={"1.5rem"}
            backgroundColor="red.300"
            py="0.5rem"
            fontWeight={"semibold"}
          >
            Genomics and Bioinformatics Specialization
          </Heading>
          <Text
            fontSize="1.02rem"
            px="1rem"
            height="7.7rem"
            display={"flex"}
            alignItems={"center"}
            textColor="red.500"
            fontWeight={"semibold"}
          >
            This Specialization focuses on performing complex bioinformatics
            analysis.
          </Text>
        </Box>
        <Box boxShadow={"base"} width={"21.75rem"}>
          <Heading
            fontSize={"1.5rem"}
            backgroundColor="red.300"
            py="0.5rem"
            fontWeight={"semibold"}
          >
            Network Programmability and Automation Specialization
          </Heading>
          <Text
            fontSize="1.02rem"
            px="1rem"
            height="7.7rem"
            display={"flex"}
            alignItems={"center"}
            textColor="red.500"
            fontWeight={"semibold"}
          >
            Network automation is now crucial due to the requirement for
            enterprises to become more adaptable and agile.
          </Text>
        </Box>
      </Grid>
    </Stack>
  );
};
