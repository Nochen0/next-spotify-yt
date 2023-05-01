import { Box, Image, useMediaQuery } from "@chakra-ui/react"
import React from "react"
import TrackArtists from "./TrackArtists"
import TrackName from "./TrackName"

type PropTypes = {
  imageUrl: string
  trackName: string
  trackArtists: { id: string; name: string }[]
}

const TrackPanel: React.FC<PropTypes> = ({
  imageUrl,
  trackName,
  trackArtists,
}) => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)")

  return (
    <>
      <Image
        alt="album"
        src={imageUrl}
        h="41px"
        w="41px"
        draggable={false}
        mr="16px"
      />
      <Box color="white" w={isLargerThan800 ? "35%" : "65%"} mr="30px">
        <TrackName trackName={trackName} />
        <TrackArtists artists={trackArtists} />
      </Box>
    </>
  )
}

export default TrackPanel
