import { FetchPolicy, gql, useQuery } from "@apollo/client"
import { useAppSession } from "./useAppSession"

export const CurrentUsersPlaylistsDocument = gql`
  query CurrentUsersPlaylists {
    currentUsersPlaylists {
      items {
        id
        name
      }
    }
  }
`

export type CurrentUsersPlaylistsResult = {
  currentUsersPlaylists: {
    items: { id: string; name: string }[]
  }
}

const useCurrentUsersPlaylists = (fetchPolicy?: FetchPolicy) => {
  const session = useAppSession()
  const { data, error } = useQuery<CurrentUsersPlaylistsResult>(
    CurrentUsersPlaylistsDocument,
    {
      fetchPolicy,
      context: { headers: { Authorization: session.accessToken } },
    }
  )

  return { data, error }
}

export default useCurrentUsersPlaylists
