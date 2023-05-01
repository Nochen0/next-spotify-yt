import { Link } from "@chakra-ui/next-js"
import { Text } from "@chakra-ui/react"
import React from "react"

type PropTypes = {
  artists: { id: string; name: string }[]
  fontSize?: `${string}px`
}

const TrackArtists: React.FC<PropTypes> = ({ artists, fontSize }) => {
  return (
    <Text
      noOfLines={1}
      color="gray.300"
      fontSize={fontSize ?? "13px"}
      fontWeight="unset"
    >
      {artists.map((artist, index) => (
        <Link
          href={`/artist/${artist.id}`}
          key={artist.id}
          _hover={{ color: "white", textDecor: "underline" }}
          onClick={event => event.stopPropagation()}
        >
          {artist.name}
          {index !== artists.length - 1 && (
            <span style={{ marginRight: "3px" }}>,</span>
          )}
        </Link>
      ))}
    </Text>
  )
}

export default TrackArtists
