import {
  Box,
  Flex,
  Heading,
  Text,
  Tooltip,
  Stat,
  Image,
  StatNumber,
  StatHelpText,
  Divider,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function MissionLanding() {
  return (
    <>
      <Flex
        direction={["column", "row"]}
        maxW="1000px"
        margin="auto"
        mb="2rem"
        mt="9rem"
        alignItems="center"
      >
        <Box pr={["0rem", "4rem"]} maxW={["80%", "50%"]}>
          <Image borderRadius="md" src="our-mission.jpg" alt="Our Mission" />
        </Box>
        <Box mt={["2rem", "0"]} maxW={["80%", "50%"]}>
          <Heading
            fontWeight="medium"
            py="10px"
            fontSize={["4xl", "5xl"]}
            color="primary"
          >
            Our Mission
          </Heading>
          <Text fontSize="xl" color="primary">
            To provide quality programming education that will help students
            grow in the technology industry.
          </Text>
          <Text
            mt="1rem"
            color="primary"
            fontSize={["sm", "md"]}
            marginBottom="26px"
          >
            Project Tech aims to bridge the digital divide through
            free computer science education for global students, offering
            courses, resources, and tools.
          </Text>
        </Box>
      </Flex>
    </>
  );
}
