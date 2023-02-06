"use client";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { CoreCourses } from "./CoreCourses";
import { SpecCourses } from "./SpecCourses";

export default function Home() {
  return (
    <Stack spacing={"4rem"} py="3rem">
      <Heading textAlign={"center"} lineHeight="4rem">
        [PIAIC]Presidential Initiative<br/>for Artificial Intelligence & Computing
      </Heading>
      <CoreCourses />
      <SpecCourses/>
    </Stack>
  );
}
