"use client";

import React, { useState } from "react";
import {
  Flex,
  Text,
  Input,
  Heading,
  Button,
  Box,
  Divider,
  Icon,
  useMediaQuery,
  useToast,
  Link,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";

const socialLinks = [
  { href: "https://www.tiktok.com/@projecttechorg", icon: FaTiktok },
  { href: "https://twitter.com/projecttechorg", icon: FaTwitter },
  { href: "https://www.instagram.com/projecttechorg", icon: FaInstagram },
  { href: "/discord", icon: FaDiscord },
  { href: "mailto:contact@project-tech.org", icon: FaEnvelope },
  { href: "https://github.com/projecttechfoundation", icon: FaGithub },
];

const footerLinks = [
  {
    section: "ABOUT",
    links: [
      { href: "./team", text: "The Team" },
      { href: "./roadmap", text: "Roadmap" },
      { href: "./faq", text: "Frequently Asked Questions" },
    ],
  },
  {
    section: "COURSES",
    links: [
      {
        href: "https://project-tech.org/courses",
        text: "Intro to JS",
        isExternal: true,
      },
      {
        href: "https://project-tech.org/courses",
        text: "Intro to Python",
        isExternal: true,
      },
      {
        href: "https://project-tech.org/courses",
        text: "Intro to React",
        isExternal: true,
      },
    ],
  },
  {
    section: "LEGAL",
    links: [
      { href: "https://legal.project-tech.org/tos", text: "TOS" },
      { href: "https://legal.project-tech.org/privacy", text: "Privacy Policy" },
      { href: "/sponsorship", text: "Sponser Us" },
    ],
  },
];

const FooterSection = ({ heading, links }) => (
  <Flex
    direction={"column"}
    h="130px"
    justifyContent="space-between"
    alignItems={{ base: "center", md: "start" }}
  >
    <Heading fontSize="md">{heading}</Heading>
    {links.map(({ href, text }, idx) => (
      <FooterLink key={idx} href={href}>
        {text}
      </FooterLink>
    ))}
  </Flex>
);

const FooterLink = ({ href, children }) => (
  <Link
    color="whiteAlpha.700"
    _hover={{
      color: "whiteAlpha.900",
    }}
    fontSize="md"
    href={href}
  >
    {children}
  </Link>
);

export default function Footer() {
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      toast({
        title: "Subscription successful",
        description: "Thank you for subscribing to our newsletter!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error:", error);

      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false); // Reset loading state when the operation is finished
    }
  };

  let [isLargerThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Flex
        transition="300ms"
        bg="blue.600"
        justifyContent="space-between"
        alignItems={{ base: "center", md: "center" }}
        p={{ base: "40px 5%", lg: "40px 12%" }}
        direction={{ base: "column", md: "row" }}
        gap={{ base: "20px", md: "0px" }}
      >
        {/* NEWSLETTER */}
        <Flex
          maxW={["90%", "40%"]}
          alignItems={{ base: "center", md: "start" }}
          direction="column"
        >
          <Heading fontSize="lg" mt="1rem">
            Recieve Weekly Emails
          </Heading>
          <Text mt="5px" align={{ base: "center", md: "start" }}>
            Get the latest news, event updates, and more from Project Tech.
          </Text>
          <Flex mt="6px" alignItems="center">
            <form onSubmit={handleSubmit}>
              <Input
                variant={"flushed"}
                width="220px"
                color="whiteAlpha.900"
                placeholder="Enter your email"
                _placeholder={{
                  color: "whiteAlpha.700",
                }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                minW="0"
                type="submit"
                color="white"
                border="none"
                isLoading={isLoading}
                p={{ base: "0", md: "5px" }}
              >
                <ArrowForwardIcon />
              </Button>
            </form>
          </Flex>
        </Flex>
        {/* NEWSLETTER */}
        {footerLinks.map(({ section, links }, idx) => (
          <React.Fragment key={idx}>
            <Divider width={{ base: 80, md: 0 }} />
            <FooterSection heading={section} links={links} />
          </React.Fragment>
        ))}
      </Flex>

      <Box bg="blue.600" py={["0", "1rem"]}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          padding={isLargerThan600 ? "15px 5%" : "15px 12%"}
          direction={{ base: "column", md: "row" }}
          fontSize="sm"
        >
          <Flex direction={["column", "row"]} alignItems="center">
            <Text color="white">
              © 2023 Project Tech Foundation Inc. All Rights Reserved.
            </Text>
          </Flex>
          <Wrap
            my={["2rem", "0"]}
            spacing={["16px", "24px"]}
            color="whiteAlpha.700"
            justify="center"
          >
            {socialLinks.map(({ href, icon }, idx) => (
              <Link
                isExternal
                _hover={{
                  textDecoration: "none",
                }}
                href={href}
                key={idx}
              >
                <WrapItem>
                  <Icon
                    transition="200ms"
                    _hover={{
                      color: "white",
                    }}
                    as={icon}
                    boxSize={"24px"}
                  />
                </WrapItem>
              </Link>
            ))}
          </Wrap>
        </Flex>
      </Box>
    </>
  );
}
