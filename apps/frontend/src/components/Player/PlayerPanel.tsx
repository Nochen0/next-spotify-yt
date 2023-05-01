import { Box, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"
import { useAppSelector } from "../../store/store"
import TrackArtists from "../Track/TrackArtists"

const PlayerPanel = () => {
  const activeTrack = useAppSelector(state => state.playerReducer.activeTrack)

  return activeTrack ? (
    <Flex w="30%" align="center" ml="16px" gap="16px">
      <Image
        src={activeTrack.track.album.images[0].url}
        alt="album"
        h="60px"
        w="60px"
      />
      <Box fontWeight={500}>
        <Text color="white" noOfLines={1} fontSize="13px" mb="2px">
          {activeTrack.track.name}
        </Text>
        <TrackArtists artists={activeTrack.track.artists} fontSize="11px" />
      </Box>
    </Flex>
  ) : null
}

export default PlayerPanel
