import React from "react"
import { Track } from "../../graphql/hooks/usePlaylist"
import { Box, Flex } from "@chakra-ui/react"
import TrackAlbum from "./TrackAlbum"
import { msToDuration } from "../../utils/time-utils"
import TrackAddedAt from "./TrackAddedAt"
import TrackPanel from "./TrackPanel"
import useSongUrl from "../../graphql/hooks/useSongUrl"
import store, { useAppDispatch } from "../../store/store"
import { setActiveTrack, setPlaying } from "../../store/player-reducer"
import TrackInfo from "./TrackInfo"
import TrackButton from "../collection/TrackButton"

type PropTypes = {
  track: Track
  index: number
}

const Track: React.FC<PropTypes> = ({ track, index }) => {
  const getSongUrl = useSongUrl()
  const dispatch = useAppDispatch()

  const handleClick = async () => {
    const state = store.getState()
    if (state.playerReducer.loading?.state) return
    if (state.playerReducer.activeTrack?.track.id === track.track.id) {
      return dispatch(setPlaying())
    }
    const data = await getSongUrl(track)
    dispatch(setActiveTrack({ track, url: data.songUrl.url }))
  }

  return (
    <Flex
      align="center"
      fontWeight={500}
      _hover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      cursor="pointer"
      rounded="md"
      py="6px"
      color="gray.300"
      pr="15px"
      pl="5px"
      onClick={handleClick}
    >
      <TrackInfo index={index} track={track} />
      <TrackPanel
        imageUrl={track.track.album.images[0].url}
        trackName={track.track.name}
        trackArtists={track.track.artists}
      />
      <TrackAlbum album={track.track.album} />
      <TrackAddedAt addedAt={track.added_at} />
      <TrackButton id={track.track.id} track={track} />
      <Box w="10%">{msToDuration(track.track.duration_ms)}</Box>
    </Flex>
  )
}

export default Track
