import { Flex, IconButton, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlinePause } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import AudioPlayer from "./audio-player";

export default function PodcastPlayer() {
  const [playerStatus, setPlayerStatus] = useState(null);

  useEffect(() => {
    setPlayerStatus("pause");
  }, []);

  return (
    <>
      <Flex padding="20">
        <Flex borderRadius="60px" bg="#29368C" height="286px" width="60%">
          <Flex
            width="30%"
            borderRadius="60px 0px 0px 60px"
            bg="#2B2F44"
            justifyContent="center"
            alignItems="center"
            color="#2B2F44"
          >
            <IconButton
              onClick={() =>
                setPlayerStatus(playerStatus == "pause" ? "play" : "pause")
              }
              width="5vw"
              height="5vw"
              borderRadius="full"
              bg="#CCD2E3"
              fontSize="5xl"
              icon={playerStatus == "pause" ? <FiPlay /> : <AiOutlinePause />}
            />
          </Flex>
          <Flex
            flexDirection="column"
            padding="10px"
            justifyContent="center"
            alignItems="center"
            width="70%"
          >
            <Text fontSize="2xl" fontWeight="bold">
              Super Julie, Super Purposes!
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          width="30%"
          padding="40px"
        >
          <Text fontSize="2xl" fontWeight="100">
            Learn about Super Julie&apos;s, fantastic journey, struggles and how
            she leads her company, Super purposes!
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
