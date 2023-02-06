"use client";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <Box fontWeight={"bold"}>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        py={"1rem"}
        px="0.8rem"
        boxShadow={"base"}
      >
        <Link href={"/"}>
          <Image src="/panaverse80_80.png" alt="Panaverse" boxSize={"2.5rem"} />
        </Link>
        <Stack
          display={["none", "none", "flex"]}
          direction={"row"}
          spacing="0.8rem"
        >
          <Link href={"/aboutUs"}>
            <Text>About Us</Text>
          </Link>
          <Stack direction={"row"} spacing="0.8rem">
            <Image
              src="/panaverse80_80.png"
              alt="Panaverse"
              boxSize={"1.5rem"}
              borderRadius={"full"}
              border="1px"
            />
            <Text>My Account</Text>
          </Stack>
        </Stack>
        <Box display={["block", "block", "none"]}>
          <HamburgerIcon
            cursor={"pointer"}
            fontSize={["1.5rem", "2rem"]}
            onClick={() => {
              setShowNav(!showNav);
            }}
          />
        </Box>
      </Box>
      {showNav && (
        <Stack
          backgroundColor={"white"}
          spacing={4}
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Link href={"/aboutUs"}>
            <Text px={"1rem"}>About Us</Text>
          </Link>
          <Stack
            direction={"row"}
            spacing="0.8rem"
            px={"1rem"}
            boxShadow={"base"}
          >
            <Image
              src="/panaverse80_80.png"
              alt="Panaverse"
              boxSize={"1.5rem"}
              borderRadius={"full"}
              border="1px"
            />
            <Text pb="1rem">My Account</Text>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};
