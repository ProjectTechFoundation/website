"use client";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  Button,
  VStack,
  Box,
  useToast,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Text,
  Flex,
  Grid,
  Image,
  Checkbox,
  CheckboxGroup,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
import Select from "react-select";

export default function DonationForm() {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [donationItems, setDonationItems] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const webhookURL = process.env.NEXT_PUBLIC_DONATION_WEBHOOK; // replace with your Discord webhook URL

    const data = {
      content: null,
      embeds: [
        {
          title: "New Donation Request",
          color: 3906294,
          fields: [
            { name: "Company Name", value: companyName },
            { name: "Contact Name", value: contactName },
            { name: "Contact Email", value: contactEmail },
            { name: "Items to Donate", value: donationItems },
            { name: "Additional Information", value: additionalInfo },
          ],
        },
      ],
    };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

        if (response.ok) {
          toast({
            description:
              "You have successfully contacted Project Tech regarding a technology donation. We will get back to you as soon as possible.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setCompanyName("");
          setContactName("");
          setContactEmail("");
          setDonationItems([]);
          setItemQuantity(1);
          setAdditionalInfo("");
        } else {
          toast({
            description: "Error with submitting form.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          throw new Error("An error occured, please contact Project Tech via email.");
        }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={10}
        mx={{ base: "2", md: "7" }}
        p={4}
      >
        <GridItem p={4}>
          <Grid alignItems={"center"}>
            <Flex>
              <Box>
                <Heading
                  color="primary"
                  textAlign={{ base: "center", md: "start" }}
                  mt="7rem"
                  fontSize="5xl"
                  fontWeight="medium"
                  mb="1rem"
                >
                  Support Technology Access for All
                </Heading>
                <Text
                  mb="2rem"
                  color="primary"
                  textAlign={{ base: "center", md: "start" }}
                >
                  Your donation fuels our mission to bridge the digital gap,
                  ensuring that every person, regardless of their circumstances,
                  can harness the opportunities of the digital world.
                </Text>
              </Box>
            </Flex>
            <Flex>
              <Image src="https://cdn.mos.cms.futurecdn.net/bfd4ec7f237131516f15991c33ec6e83.jpg" />
            </Flex>
          </Grid>
        </GridItem>
        <GridItem
          margin="auto"
          mb="4rem"
          w="100%"
          mt={{ base: "2rem", md: "6rem" }}
          p={4}
        >
          <VStack
            margin="auto"
            spacing={4}
            maxW="700px"
            as="form"
            onSubmit={handleSubmit}
            borderRadius="8px"
            px="2rem"
            py="2rem"
            color="primary !important"
            bg="gray.100"
          >
            <FormControl isRequired id="companyName">
              <FormLabel color="primary">Company Name</FormLabel>
              <Input
                _placeholder={{ opacity: 1, color: "gray.500" }}
                borderColor={"gray.300"}
                placeholder="Please enter your company name."
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired id="contactName">
              <FormLabel color="primary">Contact Name</FormLabel>
              <Input
                _placeholder={{ opacity: 1, color: "gray.500" }}
                borderColor={"gray.300"}
                placeholder="Please enter your name."
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired id="contactEmail">
              <FormLabel color="primary">Contact Email</FormLabel>
              <Input
                _placeholder={{ opacity: 1, color: "gray.500" }}
                borderColor={"gray.300"}
                type="email"
                placeholder="Please enter your email."
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
              <FormHelperText>
                We will contact you through this email.
              </FormHelperText>
            </FormControl>

            <FormControl isRequired id="donationItems">
              <FormLabel color="primary">Items to Donate</FormLabel>
              <Input
                _placeholder={{ opacity: 1, color: "gray.500" }}
                borderColor={"gray.300"}
                placeholder="Please enter what your company will donate."
                value={donationItems}
                onChange={(e) => setDonationItems(e.target.value)}
              />
            </FormControl>

            <FormControl id="additionalInfo">
              <FormLabel color="primary">Additional Information</FormLabel>
              <Textarea
                _placeholder={{ opacity: 1, color: "gray.500" }}
                borderColor={"gray.300"}
                placeholder="Please include any additional information here."
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
              />
            </FormControl>

            <Button
              fontWeight="thin"
              width="100%"
              mt="18px !important"
              colorScheme="blue"
              type="submit"
            >
              Submit
            </Button>
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
}
