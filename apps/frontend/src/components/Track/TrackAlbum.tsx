import { Link } from "@chakra-ui/next-js"
import { Box, Text, useMediaQuery } from "@chakra-ui/react"
import React from "react"

type PropTypes = {
  album: {
    id: string
    images: [{ url: string }]
    name: string
  }
}

const TrackAlbum: React.FC<PropTypes> = ({ album }) => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)")

  return isLargerThan800 ? (
    <Box w="30%" noOfLines={1} mr="30px">
      <Link
        href={`/album/${album.id}`}
        _hover={{ color: "white", textDecor: "underline" }}
        onClick={event => event.stopPropagation()}
      >
        {album.name}
      </Link>
    </Box>
  ) : null
}

export default TrackAlbum
