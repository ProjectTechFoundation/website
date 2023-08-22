import React from "react";
import {
  Box,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Link,
} from "@chakra-ui/react";

const faqs = [
  {
    question: "What is Project Tech?",
    answer:
      "The Project Tech Foundation is a non-profit organization led by students that aims to encourage high school and college students to explore computer programming. Our programs focus on developing essential creative computer science skills that are not typically taught in schools.",
  },
  {
    question: "How can I volunteer at Project Tech? Do I get service hours?",
    answer: (
      <>
        To volunteer at Project Tech, you can apply{" "}
        <Link href="join-team" style={{ color: "blue" }}>
          here
        </Link>
        . As a volunteer, you&apos;ll receive flexible service hours and enjoy
        various other perks.
      </>
    ),
  },
  {
    question: "How can I signup for the courses?",
    answer: (
      <>
        Our courses are currently under development and not yet available, but
        when they are finished you will be able to click{" "}
        <Link style={{ color: "blue" }} href="https://project-tech.org">
          here
        </Link>{" "}
        to signup for our free programming courses.
      </>
    ),
  },
  {
    question: "Where can I report a bug on the website?",
    answer:
      "Please email contact@project-tech.org to report any bugs on the website.",
  },
  {
    question: "Who is the founder of Project Tech?",
    answer: (
      <>
        {" "}
        <Link href="https://ishaantek.com">Ishaan Garg</Link> founded Project
        Tech in June of 2023.
      </>
    ),
  },
  {
    question: "How can I donate to Project Tech?",
    answer: (
      <>
        We appreciate all donations. Please click{" "}
        <Link style={{ color: "blue" }} href="/donate">
          here
        </Link>{" "}
        to donate.
      </>
    ),
  },
  {
    question: "Do we have a Discord server?",
    answer: (
      <>
        Yes, we do! Please click{" "}
        <Link style={{ color: "blue" }} href="/discord">
          here
        </Link>{" "}
        to join our Discord server.
      </>
    ),
  },
];

export default function FaqComp() {
  return (
    <>
      <Flex
        textAlign={"center"}
        alignContent={"center"}
        margin={"auto"}
        flexDir="column"
        maxWidth="700px"
        padding="3rem"
      >
        <Heading
          color="primary"
          fontWeight="medium"
          mt={"6rem"}
          fontSize={["4xl", "5xl"]}
        >
          {" "}
          FAQ
        </Heading>
        <Text color="primary" mb="1rem" mt=".5rem">
          Frequently Asked Questions
        </Text>

        <Accordion color="blackAlpha.800" allowToggle>
          {faqs.map((faq, index) => (
            <AccordionItem
              border="none"
              key={index}
              mt={index !== 0 ? ".75rem" : null}
            >
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </>
  );
}
