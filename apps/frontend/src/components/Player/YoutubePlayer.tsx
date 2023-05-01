import React from "react"
import { useAppSelector } from "../../store/store"
import ReactPlayer from "react-player/youtube"

const YoutubePlayer = () => {
  const activeTrack = useAppSelector(state => state.playerReducer.activeTrack)
  const playing = useAppSelector(state => state.playerReducer.playing)
  const volume = useAppSelector(state => state.playerReducer.volume)

  return activeTrack ? (
    <ReactPlayer
      style={{ display: "none" }}
      url={activeTrack.url}
      playing={playing}
      volume={volume}
    />
  ) : null
}

export default YoutubePlayer
