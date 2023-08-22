"use client";
import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { Element } from "react-scroll";
import React from "react";
const Roadmap = () => {
  const accomplishments = [
    {
      title: "The Beginning",
      description:
        "Project Tech was founded with the goal to provide a programming community for all ages and skill levels.",
      date: "August 2023",
    },
  ];

  const comingSoon = [
    {
      title: "Initial Launch of our Courses",
      description:
        "Our first courses will be launched on a beta version of our platform, including JS, React, and Python.",
    },
  ];

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const lineColor = useColorModeValue("gray.400", "gray.600");

  const Milestone = ({ milestone, index, showDate = true }) => (
    <Flex
      direction={index % 2 === 0 ? "row-reverse" : "row"}
      justify="center"
      py={4}
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={bg}
        borderColor={borderColor}
        p={4}
        boxShadow="lg"
        maxWidth="350px"
        flex="1"
      >
        <Flex alignItems="center">
          <Heading fontSize="lg">{milestone.title}</Heading>
          <Spacer />
          {showDate && (
            <Badge h="19px" colorScheme="green">
              {milestone.date}
            </Badge>
          )}
        </Flex>
        <Text fontSize="sm" mt={2}>
          {milestone.description}
        </Text>
      </Box>
    </Flex>
  );

  const Line = () => <Box bg={lineColor} h="40px" w="1px" my={3} />;

  return (
    <Box mx="1rem">
      <Center
        textAlign="center"
        mt={["7rem", "12rem"]}
        flexDirection="column"
        bg={bg}
        color={color}
      >
        <Heading as="h1" size="2xl" mb={5}>
          Roadmap
        </Heading>
        <Text fontSize="xl" mb={5}>
          Check out where we are and what&apos;s next for Project Tech.
        </Text>
      </Center>

      <Element>
        <Box mt="2rem" color="primary" maxWidth="600px" mx="auto">
          <Heading as="h2" size="lg" textAlign="center" mb={3} mt={8}>
            Coming Soon
          </Heading>
          <Flex direction="column" align="center">
            {comingSoon.map((item, i) => (
              <React.Fragment key={i}>
                <Milestone milestone={item} index={i} showDate={false} />
                {i < comingSoon.length - 1 && <Line />}
              </React.Fragment>
            ))}
          </Flex>
          <Heading as="h2" size="lg" textAlign="center" mb={3} mt={8}>
            Shipped
          </Heading>
          <Flex mb="4rem" direction="column" align="center">
            {accomplishments.map((accomplishment, i) => (
              <React.Fragment key={i}>
                <Milestone milestone={accomplishment} index={i} />
                {i < accomplishments.length - 1 && <Line />}
              </React.Fragment>
            ))}
          </Flex>
        </Box>
      </Element>
    </Box>
  );
};

export default Roadmap;
