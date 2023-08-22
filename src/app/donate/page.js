"use client";
import { Box, Heading } from "@chakra-ui/react";
import Script from "next/script";

export default function Donations() {
  return (
    <Box
      textAlign="center"
      mx="auto"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        fontSize={["3xl", "5xl"]}
        pt="9rem"
        fontWeight="medium"
        color="primary"
      >
        Donate to Project Tech
      </Heading>
      <Heading
        mt="1rem"
        fontSize={["lg", "2xl"]}
        fontWeight="medium"
        color="blackAlpha.800"
        mb="3rem"
      >
        Your generous contribution will make a significant impact on Project
        Tech&apos;s mission and help us <br></br>continue our work towards
        empowering students through technology.
      </Heading>

      <iframe
        className="donation-form"
        src="https://givebutter.com/embed/c/projecttech"
        name="givebutter"
        seamless
        allowpaymentrequest
        style={{ display: "block", margin: "10rem auto", maxWidth: "90%" }}
      ></iframe>
      <Script src="https://givebutter.com/js/widget.js"></Script>
    </Box>
  );
}
