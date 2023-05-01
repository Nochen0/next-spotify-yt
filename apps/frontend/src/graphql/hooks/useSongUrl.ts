import { gql } from "@apollo/client"
import { GraphQLClient } from "../graphql-client"
import { useCallback } from "react"
import { Track } from "./usePlaylist"
import { useAppDispatch } from "../../store/store"
import { setLoading } from "../../store/player-reducer"

const SongUrlDocument = gql`
  query SongUrl($keywords: [String!]!) {
    songUrl(keywords: $keywords) {
      url
    }
  }
`

type SongUrlResult = {
  songUrl: {
    url: string
  }
}

const useSongUrl = () => {
  const dispatch = useAppDispatch()

  const getSongUrl = useCallback(async (track: Track) => {
    dispatch(setLoading({ track, state: true }))
    const keywords = [track.track.name]
    track.track.artists.forEach(artist => keywords.push(artist.name))
    const { data } = await GraphQLClient.query<SongUrlResult>({
      query: SongUrlDocument,
      variables: { keywords },
    }).then(data => {
      dispatch(setLoading({ track, state: false }))
      return data
    })
    return data
  }, [])

  return getSongUrl
}

export default useSongUrl
