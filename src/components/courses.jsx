import {
  Flex,
  Heading,
  Text,
  Button,
  Box,
  Spacer,
  Badge,
  Wrap,
  Center,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useInView } from "framer-motion";
import Head from "next/head";

const coursesData = [
  {
    color: "#05445E",
    title: "Basics of JS",
    description:
      "Unlock the potential of JavaScript with our engaging introductory course, igniting your passion for coding.",
    link: "https://project-tech.org/courses/javascript",
  },
  {
    color: "#164ba1",
    title: "Intro to React",
    description:
      "Learn how to create simple websites using React, a popular Javascript library. Publish your very own functional website.",
    link: "https://project-tech.org/courses/react-js",
  },

  {
    color: "#1F7A8C",
    title: "Python Basics",
    description:
      "Python is a computer programming language often used to build software, automate tasks, and conduct data analysis.",
    link: "https://project-tech.org/courses/python",
  },
  {
    color: "#1F7A8C",
    title: "Intro to SQL",
    description:
      "Learn how to create, read, update, and delete data in a database using SQL. Create your own database and learn how to use it.",
    link: "https://project-tech.org/courses/sql",
  },
];

const CourseCard = ({ color, title, description, link }) => {
  const { ref, inView } = useInView({ once: true });

  return (
    <Link href={link}>
      <Box
        transition="300ms"
        _hover={{
          boxShadow: "sm",
          borderColor: "blue.500",
        }}
        boxShadow={"xl"}
        borderRadius={"md"}
        alignItems="center"
        color="black"
        direction={"column"}
        px="2rem"
        pt="1.5rem"
      >
        <Box
          pt={".9rem"}
          pb={".7rem"}
          alignItems="center"
          direction="row"
          display="flex"
        >
          <Heading fontWeight={"medium"} fontSize={{ base: "lg", md: "2xl" }}>
            {title}
          </Heading>
          <Spacer />
          <Badge h="20px" colorScheme="blue">
            Free
          </Badge>
        </Box>
        <Text pb="2rem" fontSize={{ base: "xs", md: "sm" }}>
          {description}
        </Text>
      </Box>
    </Link>
  );
};

const Courses = () => {
  return (
    <>
      <Box
      
        pt="2rem"
        mt={["0rem", "4rem"]}
        maxW="1070px"
        mx="auto"
        direction={"column"}
      >
        <Box>
          <Flex
            direction={{ base: "column", lg: "row" }}
            justifyContent="center"
            alignItems="center"
          >
            <Box direction="column">
              <Heading
                textAlign={{ base: "center", lg: "left" }}
                color="primary"
                fontSize={{ base: "3xl", md: "4xl" }}
              >
                Courses
              </Heading>
              <Heading
                textAlign={{ base: "center", lg: "left" }}
                mt={[".1rem", "0"]}
                color="blackAlpha.800"
                fontSize={{ base: "xl", md: "2xl" }}
                mb="1rem"
                fontWeight="medium"
              >
                Featured Courses
              </Heading>
            </Box>
            <Spacer />
            <Button
              textAlign={["center", "left"]}
              as="a"
              href="https://project-tech.org/courses"
              mt={{ base: "0rem", md: "0" }}
            >
              Check out all our courses
            </Button>
          </Flex>
        </Box>
        <Flex
          pb="2rem"
          mx={["2rem", "auto"]}
          mt="1rem"
          direction="row"
          spacing="20px"
          justifyContent="center"
          wrap="wrap"
          gap={4}
        >
          {coursesData.map(({ color, title, description, link }) => (
            <Center key={title} w={{ base: "auto", md: "255px" }}>
              <CourseCard
                key={title}
                color={color}
                title={title}
                description={description}
                link={link}
              />
            </Center>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Courses;
