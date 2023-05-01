import { gql, useMutation } from "@apollo/client"
import { useAppSession } from "./useAppSession"
import { GraphQLClient } from "../graphql-client"
import { useCallback } from "react"

const RemoveTrackDocument = gql`
  mutation UnsaveTrack($id: String!) {
    unsaveTrack(id: $id)
  }
`

type RemoveTrackResult = {
  unsaveTrack: boolean
}

export const useRemoveTrack = (id: string) => {
  const session = useAppSession()

  const remove = useCallback(async () => {
    GraphQLClient.mutate<RemoveTrackResult>({
      mutation: RemoveTrackDocument,
      variables: { id },
      context: { headers: { Authorization: session.accessToken } },
      fetchPolicy: "no-cache",
    })
  }, [])

  return remove
}
