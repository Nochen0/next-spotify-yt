import { Flex, Icon, Spinner, Text } from "@chakra-ui/react"
import React from "react"
import { useAppSelector } from "../../store/store"
import { Track } from "../../graphql/hooks/usePlaylist"
import { BsPlayFill } from "react-icons/bs"

type PropTypes = {
  index: number
  track: Track
}

const TrackInfo: React.FC<PropTypes> = ({ index, track }) => {
  const loading = useAppSelector(state => state.playerReducer.loading)
  const activeTrack = useAppSelector(state => state.playerReducer.activeTrack)
  const playing = useAppSelector(state => state.playerReducer.playing)

  return (
    <Flex
      w="50px"
      align="center"
      justify="center"
      fontSize="15px"
      color="white"
    >
      {loading?.state && loading.track.track.id === track.track.id ? (
        <Spinner h="20px" w="20px" />
      ) : !playing && activeTrack?.track.id === track.track.id ? (
        <Icon as={BsPlayFill} fontSize="20px" />
      ) : (
        <Text
          fontSize="15px"
          color={
            activeTrack?.track.id === track.track.id ? "spotify" : "gray.300"
          }
        >
          {index + 1}
        </Text>
      )}
    </Flex>
  )
}

export default TrackInfo
