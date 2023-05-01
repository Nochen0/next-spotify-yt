import { gql, useQuery } from "@apollo/client"
import { useAppSession } from "./useAppSession"

const PlaylistDocument = gql`
  query Playlist($id: String!) {
    playlist(id: $id) {
      color
      description
      followers {
        total
      }
      id
      images {
        url
      }
      name
      owner {
        id
        display_name
      }
      public
      tracks {
        items {
          added_at
          track {
            album {
              id
              images {
                url
              }
              name
            }
            artists {
              id
              name
            }
            duration_ms
            id
            name
          }
        }
        total
      }
    }
  }
`

export type Track = {
  added_at: string
  track: {
    album: {
      id: string
      images: [{ url: string }]
      name: string
    }
    artists: { id: string; name: string }[]
    duration_ms: number
    id: string
    name: string
  }
}

type PlaylistResult = {
  playlist: {
    color: string
    description: string
    followers: { total: number }
    id: string
    images: [{ url: string }]
    name: string
    owner: { id: string; display_name: string }
    public: boolean
    tracks: {
      items: Track[]
      total: number
    }
  }
}

const usePlaylist = (id: string) => {
  const session = useAppSession()
  const { data, loading, error } = useQuery<PlaylistResult>(PlaylistDocument, {
    variables: { id },
    context: { headers: { Authorization: session.accessToken } },
  })

  return { data, loading, error }
}

export default usePlaylist
