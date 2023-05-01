import { Text } from "@chakra-ui/react"
import React from "react"
import { useAppSelector } from "../../store/store"

type PropTypes = {
  trackName: string
}

const TrackName: React.FC<PropTypes> = ({ trackName }) => {
  const activeTrack = useAppSelector(state => state.playerReducer.activeTrack)

  return (
    <Text
      color={activeTrack?.track.name === trackName ? "spotify" : "white"}
      noOfLines={1}
      fontSize="14px"
      fontWeight={600}
    >
      {trackName}
    </Text>
  )
}

export default TrackName
