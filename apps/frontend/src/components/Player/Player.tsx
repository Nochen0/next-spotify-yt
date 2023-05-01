import { Box, Flex } from "@chakra-ui/react"
import React from "react"
import YoutubePlayer from "./YoutubePlayer"
import PlayerPanel from "./PlayerPanel"

const Player = () => {
  return (
    <Flex
      pos="fixed"
      left="0"
      bottom="0"
      right="0"
      h="92px"
      bg="#181818"
      align="center"
    >
      <PlayerPanel />
      <Box w="40%"></Box>
      <Box w="30%"></Box>
      <YoutubePlayer />
    </Flex>
  )
}

export default Player
