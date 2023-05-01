import { gql, useMutation } from "@apollo/client"
import { useAppSession } from "./useAppSession"

const SavePlaylistDocument = gql`
  mutation Mutation($id: String!) {
    followPlaylist(id: $id)
  }
`

const useSavePlaylist = (id: string) => {
  const session = useAppSession()
  const [savePlaylist] = useMutation(SavePlaylistDocument, {
    variables: { id },
    context: { headers: { Authorization: session.accessToken } },
    fetchPolicy: "no-cache",
  })

  return savePlaylist
}

export default useSavePlaylist
