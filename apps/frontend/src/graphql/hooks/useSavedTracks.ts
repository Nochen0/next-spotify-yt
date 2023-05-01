import { gql, useQuery } from "@apollo/client"
import { useAppSession } from "./useAppSession"
import { Track } from "./usePlaylist"

export const SavedTracksDocument = gql`
  query UsersSavedTracks {
    usersSavedTracks {
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
`

export type SavedTracksResult = {
  usersSavedTracks: {
    items: Track[]
    total: number
  }
}

export const useSavedTracks = () => {
  const session = useAppSession()
  const { data, error } = useQuery(SavedTracksDocument, {
    context: { headers: { Authorization: session.accessToken } },
  })

  return { data, error }
}
