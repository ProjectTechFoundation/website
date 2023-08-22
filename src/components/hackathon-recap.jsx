import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  VStack,
  Wrap,
  Button,
  Badge,
  Spacer,
  Highlight,
  Link,
  Image,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ProjectCard = ({ projectName, projectUrl }) => {
  return (
    <>
      <Button size="xs" as="a" href={projectUrl}>
        {projectName} <ExternalLinkIcon mx="7px" />
      </Button>
    </>
  );
};
const ExpandedProjectCard = ({
  projectName,
  projectUrl,
  projectDescription,
  projectVideoIframe,
  projectPlace,
}) => {
  return (
    <>
    </>
  );
}
