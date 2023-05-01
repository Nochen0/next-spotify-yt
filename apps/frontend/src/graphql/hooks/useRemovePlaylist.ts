import { gql, useMutation } from "@apollo/client"
import { useAppSession } from "./useAppSession"

const RemovePlaylistDocument = gql`
  mutation UnfollowPlaylist($id: String!) {
    unfollowPlaylist(id: $id)
  }
`

const useRemovePlaylist = (id: string) => {
  const session = useAppSession()
  const [removePlaylist] = useMutation(RemovePlaylistDocument, {
    variables: {
      id,
      context: { headers: { Authorization: session.accessToken } },
    },
    fetchPolicy: "no-cache",
  })

  return removePlaylist
}

export default useRemovePlaylist
