'use client';
import ExecutiveCard from "@/components/executive-card";
import Volunteer from "@/components/volunteer-card";
import React from "react";
import {
  Button,
  Wrap,
  Box,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import AOS from "aos";
import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/aos@next/dist/aos.css"
          rel="stylesheet"
          key="test"
        />
      </Head>
      <Flex marginTop={"8rem"} direction={"column"} alignItems="center">
        <Heading
          fontWeight="medium"
          marginBottom={"2%"}
          color="primary"
          fontSize={["4xl", "5xl"]}
        >
          Executives
        </Heading>
        <Flex mb={"5%"} direction={["column", "row"]}>
          <Wrap justify="center" spacing="30px">
            <ExecutiveCard
              src="/ishaangarg.jpeg"
              name="Ishaan Garg"
              role="Founder / CEO"
              description={
                "Meet Ishaan, a talented and motivated freshman in high school with an exceptional passion for computer science. With a dedication to inspiring and empowering others, Ishaan is on a mission to unlock the potential of technology and significantly impact the world. Through his innovative ideas and relentless drive, Ishaan is set to become a driving force in shaping the future of technology."
              }
              email="mailto:ishaan@ishaantek.com"
              github="https://github.com/ishaantek"
            />
          </Wrap>
        </Flex>
      </Flex>
      <Flex direction={"column"} alignItems={"center"}>
        <Heading
          marginBottom={"2%"}
          color="primary"
          fontSize={["4xl", "5xl"]}
          textAlign={"center"}
          mt={["60px", "0px"]}
          fontWeight="medium"
        >
          Volunteers
        </Heading>
        <Flex mx="100px" alignItems={"center"}>
          <Wrap justify="center" spacing="30px">
            {/* <Volunteer
              name="Arnav Pandey"
              role="Director of Hackathon"
              src="https://arnavpandey.xyz/picture.png"
            /> */}
            
          </Wrap>
        </Flex>
        <Text mt="2rem" marginBottom={"5rem"} color="primary">
          and many more...
        </Text>

        <Box
          alignItems={"center"}
          alignContent={"center"}
          mb="4rem"
          padding="24px"
          textAlign={"center"}
        >
        </Box>
      </Flex>
    </>
  );
}
