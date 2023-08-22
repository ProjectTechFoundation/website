"use client";
import { useState, useEffect, useMemo } from "react";
import {
  Image,
  Button,
  Link,
  Heading,
  Spacer,
  Box,
  Flex,
  VStack,
  Wrap,
  Text,
  chakra,
  Badge,
} from "@chakra-ui/react";
import JobPostingCard from "@/components/job-card";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function JoinTeam() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const departments = [
    "Marketing",
    "Technology",
    "Human Resources",
    "Education",
  ];

  const cardsInfo = useMemo(
    () => [
      {
        role: "Video Editor",
        application: "https://forms.gle/",
        department: "Technology",
        responsibility: [
          "Edit and assemble raw footage to create high-quality videos.",
          "Collaborate with content creators to achieve desired narrative and visual outcomes.",
          "Enhance video content with graphics and special effects.",
          "Incorporate audio elements such as music, dialogue, and sound effects.",
          "Review and revise videos based on feedback. ",
        ],
        shortDescription:
          "Edit 3-5 minute videos for our nonprofit, including course content, Youtube content, and more",
        requirements: [
          "Proven experience in video editing with a strong portfolio. ",
          "Familiarity with digital editing software packages (e.g., Adobe Premiere, After Effects, Filmora, etc.)",
          "Strong understanding of storytelling and visual aesthetics. ",
          "Ability to work under tight deadlines.",
        ],
      },
      {
        role: "Social Media Content Creator",
        application: "https://forms.gle/",
        department: "Marketing",
        responsibility: [
          "Conceptualize and create compelling content that resonates with the target audience.",
          "Utilize graphic design platforms such as Canva and Photoshop to craft visually appealing posts.",
          "Create engaging video content for platforms like Instagram, TikTok, and Twitter.",
        ],
        shortDescription:
          "Conceptualize and create captivating content for our social media platforms, including Instagram, YouTube, TikTok, and Twitter.",
        requirements: [
          "Proven experience in content creation.",
          "Proficiency in graphic design platforms such as Canva and Photoshop.",
          "Familiarity with popular social media platforms like Instagram, TikTok, and Twitter.",
        ],
      },
      {
        role: "Coding Course Instructor",
        application: "https://forms.gle/",
        department: "Education",
        responsibility: [
          "Utilize your programming knowledge to create comprehensive and instructive lessons in English.",
          "Develop and maintain an up-to-date curriculum.",
        ],
        shortDescription:
          "Craft polished and instructive programming lessons in English.",
        requirements: [
          "Strong programming knowledge.",
          "Experience in teaching or tutoring.",
        ],
      },
      {
        role: "HR Associate",
        application: "https://forms.gle/",
        department: "Human Resources",
        responsibility: [
          "Maintain meticulous records of personnel information.",
          "Assist in onboarding new volunteer associates.",
          "Ensure timely and accurate updating of staff-related documentation.",
        ],
        shortDescription:
          "Maintain personnel information and facilitate the onboarding process.",
        requirements: [
          "Experience in HR or related field",
          "Excellent organizational skills",
        ],
      },
      {
        role: "Community Outreach Coordinator",
        application: "https://forms.gle/",
        department: "Human Resources",
        responsibility: [
          "Develop and implement outreach strategies to engage new and diverse audiences.",
          "Represent the organization at community events and meetings.",
          "Contact renowned software engineers/entrepreneurs for participation in podcasts.",
        ],
        shortDescription:
          "Develop strategies and represent our organization at community events.",
        requirements: [
          "Experience in community outreach or related field.",
          "Excellent communication skills.",
        ],
      },
      {
        role: "Editorial Proofreader",
        application: "https://forms.gle/",
        department: "Human Resources",
        responsibility: [
          "Enhance the language used in our digital platforms, such as the organization's website and social media.",
          "Conduct thorough revisions to eliminate grammatical errors and ensure fluent written content.",
        ],
        shortDescription:
          "Enhance the language used in our digital platforms and ensure error-free content across our digital platforms.",
        requirements: [
          "Strong proficiency in the English language.",
          "Proven experience as a proofreader or related role.",
        ],
      },
      {
        role: "Discord Bot Developer",
        application: "https://forms.gle",
        department: "Technology",
        responsibility: [
          "Design and develop innovative and user-friendly bots for the Discord server.",
          "Monitor server activities and proactively address any issues that arise with the bot.",
          "Optimize bot performance to ensure seamless user experience and maximum uptime.",
        ],
        shortDescription:
          "Design, develop, and monitor bot commands for our Discord server.",
        requirements: [
          "Experience in bot development.",
          "Strong knowledge of Discord.js, MongoDB, and the Discord API.",
        ],
      },
      {
        role: "Community Team",
        application: "https://forms.gle",
        department: "Community",
        responsibility: [
          "Develop and implement strategies to increase engagement on the Discord server and other platforms.",
          "Monitor and moderate community discussions to ensure a positive and inclusive environment.",
          "Respond to user inquiries and concerns promptly and professionally.",
          "Collaborate with other teams to organize events and activities that promote community engagement.",
        ],
        shortDescription:
          "Increase community engagement and foster a positive environment on our platforms.",
        requirements: [
          "Experience in community management.",
          "Excellent communication and moderation skills.",
        ],
      },
      {
        role: "Hackathon Event Coordinator",
        application: "https://forms.gle",
        department: "Hackathon",
        responsibility: [
          "Plan and organize hackathon events from start to finish.",
          "Develop the hackathon schedule, including workshops, keynote speeches, and judging sessions.",
          "Recruit and manage a team of volunteers and staff to assist with the event.",
          "Implement marketing and promotion strategies to attract participants and sponsors.",
          "Secure sponsors and partnerships to support the event financially.",
        ],
        shortDescription:
          "Pan, organize, and manage hackathon events, including scheduling, recruitment, and sponsorship acquisition.",
        requirements: [
          "Experience in organizing hackathons or similar events.",
          "Strong project management skills.",
        ],
      },
      {
        role: "Web Developer",
        application: "https://forms.gle",
        department: "Technology",
        responsibility: [
          "Contribute to the development and maintenance of websites.",
          "Implement designs and assignments using cutting-edge technologies such as NodeJS, CSS, Next.js/React.js, etc.",
        ],
        shortDescription:
          "Develop and maintain the website using cutting-edge technologies such as NodeJS, CSS, Next.js/React.js.",
        requirements: [
          "Proven experience as a Web Developer.",
          "Strong proficiency in NodeJS, CSS, Next.js/React.js.",
          "Excellent problem-solving skills.",
          "Ability to manage multiple assignments simultaneously.",
        ],
      },
    ],
    []
  );
  useEffect(() => {
    setFilteredCards(cardsInfo);
  }, [cardsInfo]);
  useEffect(() => {
    setFilteredCards(
      cardsInfo.filter((cardInfo) =>
        cardInfo.department.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, cardsInfo]);

  return (
    <>
      <Flex>
        <Box width={"100%"} height={["60vh", "95vh"]}>
          <Box
            mt={["10rem", "15rem"]}
            mx={["1rem", "auto"]}
            borderRadius={"lg"}
            maxWidth="800px"
            padding="1rem 2rem"
          >
            <Flex alignItems={"center"}>
              <Flex mr="5rem" direction={"column"}>
                <Heading
                  fontWeight="medium"
                  fontSize={["4xl", "6xl"]}
                  color={"primary"}
                >
                  Join the Team
                </Heading>
                <Text
                  pr=".5rem"
                  mt=".3rem"
                  mb="1.3rem"
                  fontSize={["sm", "lg"]}
                  color={"blackAlpha.800"}
                >
                  Join the team and be part of an inspiring community dedicated
                  to making a positive impact in the world.
                </Text>
                <Link
                  _hover={{
                    textDecoration: "none",
                  }}
                  href="#jobs"
                >
                  <Button> Search for volunteer opportunities</Button>
                </Link>
              </Flex>
              <Flex>
                <Image src="join-team-logo.png" alt="Join Team Logo" />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Text id="jobs"></Text>
      <Wrap mt="3rem" justify="center">
        <Button
          onClick={() => setSearchQuery("")}
          backgroundColor={searchQuery === "" ? "blue.400" : "blue.900"}
          color={searchQuery === "" ? "white" : "blue.200"}
          border="none"
        >
          All Departments
        </Button>
        {departments.map((department) => (
          <Button
            key={department}
            onClick={() => setSearchQuery(department)}
            backgroundColor={
              searchQuery === department ? "blue.400" : "blue.900"
            }
            color={searchQuery === department ? "white" : "blue.200"}
            border="none"
          >
            {department}
          </Button>
        ))}
      </Wrap>
      <Flex py="2rem" direction={["column", "row"]} justify="center">
        <VStack
          px="1rem"
          height={["300px", "600px"]}
          overflow="scroll"
          spacing={4}
        >
          {/* Department selection buttons */}

          {/* Job cards */}
          {filteredCards.map((cardInfo) => (
            <JobPostingCard
              key={cardInfo.role}
              role={cardInfo.role}
              application={cardInfo.application}
              department={cardInfo.department}
              responsibility={cardInfo.responsibility}
              onSelect={() => setSelectedJob(cardInfo)}
              selected={selectedJob && selectedJob.role === cardInfo.role} // pass selected prop
            />
          ))}
        </VStack>
        {/* Job preview info section */}
        <Box
          margin={["auto", "0 !important"]}
          pl={["0", "3rem"]}
          maxW={["80%", "40%"]}
        >
          {selectedJob ? (
            <>
              <Box bg="blue.100" borderRadius="md" px="1rem" py="1rem">
                <Flex>
                  {" "}
                  <Heading color="primary" fontWeight="medium" fontSize="2xl">
                    {selectedJob.role}
                  </Heading>
                  <Spacer />{" "}
                  <Link
                    _hover={{
                      textDecoration: "none",
                    }}
                    href={selectedJob.application}
                    isExternal
                  >
                    <Button
                      border="none"
                      fontWeight="light"
                      backgroundColor="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.700",
                        color: "white",
                        borderColor: "blue.700",
                      }}
                    >
                      <ExternalLinkIcon marginRight="5px" /> Apply Now
                    </Button>
                  </Link>
                </Flex>

                <Badge colorScheme="teal">{selectedJob.department}</Badge>
              </Box>

              <Flex
                mt="1rem"
                bg="blue.100"
                borderRadius="md"
                px="2rem"
                py="1rem"
                mb="5rem"
                direction="column"
                color="primary"
              >
                <Heading fontWeight="medium" color="primary" fontSize="xl">
                  Responsiblities
                </Heading>
                <chakra.ul pt=".5rem" pb="1rem">
                  {selectedJob.responsibility.map((item, i) => {
                    return (
                      <chakra.li fontSize="sm" key={i}>
                        {item}
                      </chakra.li>
                    );
                  })}
                </chakra.ul>
                <Heading fontWeight="medium" color="primary" fontSize="xl">
                  Requirements
                </Heading>
                <chakra.ul pt=".5rem" pb="1rem">
                  {selectedJob.requirements.map((item, i) => {
                    return (
                      <chakra.li fontSize="sm" key={i}>
                        {item}
                      </chakra.li>
                    );
                  })}
                </chakra.ul>
                <Heading fontWeight="medium" color="primary" fontSize="xl">
                  Benefits
                </Heading>
                <chakra.ul fontSize="sm" pt=".5rem" pb="1rem">
                  <Text pb="6px">
                    As a volunteer at Project Tech, you will get numerous
                    benefits:
                  </Text>
                  <chakra.li>Official Volunteering Hours.</chakra.li>
                  <chakra.li>
                    Opportunity for Presidents Volunteering Service Award.
                  </chakra.li>
                  <chakra.li>Gain new skills and leadership.</chakra.li>
                </chakra.ul>
              </Flex>
            </>
          ) : (
            <Text color="primary">Select a job to see more details.</Text>
          )}
        </Box>
      </Flex>
    </>
  );
}
