"use client";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <Stack mt={"1rem"} px={"5rem"} spacing="1rem" textAlign={"center"}>
      <Heading>About Us</Heading>
      <Text>
        The mission of PIAIC is to reshape Pakistan by revolutionizing
        education, research, and business by adopting latest, cutting-edge
        technologies. Experts are calling this the 4th industrial revolution. We
        want Pakistan to become a global hub for AI, data science, cloud native
        computing, edge computing, blockchain, augmented reality, and internet
        of things.
      </Text>
      <Text>
        In this brand-new type of curriculum, students will learn how to make
        money and boost exports in the classroom and will begin doing so within
        six months of the program's beginning. It resembles a cross between a
        corporate venture and an educational project.
      </Text>
    </Stack>
  );
}
