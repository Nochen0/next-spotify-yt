import { gql } from "@apollo/client"
import { useAppSession } from "./useAppSession"
import { GraphQLClient } from "../graphql-client"

const SaveTrackDocument = gql`
  mutation SaveTrack($id: String!) {
    saveTrack(id: $id)
  }
`

type SaveTrackResult = {
  saveTrack: boolean
}

export const useSaveTrack = (id: string) => {
  const session = useAppSession()
  const save = async () => {
    GraphQLClient.mutate<SaveTrackResult>({
      mutation: SaveTrackDocument,
      variables: { id },
      context: { headers: { Authorization: session.accessToken } },
      fetchPolicy: "no-cache",
    })
  }

  return save
}
