import React, { BaseSyntheticEvent, useEffect, useState } from "react"
import { GraphQLClient } from "../../graphql/graphql-client"
import {
  SavedTracksDocument,
  SavedTracksResult,
} from "../../graphql/hooks/useSavedTracks"
import { getSession } from "next-auth/react"
import { Flex, Icon } from "@chakra-ui/react"
import { VscHeart, VscHeartFilled } from "react-icons/vsc"
import { Track } from "../../graphql/hooks/usePlaylist"
import { useSaveTrack } from "../../graphql/hooks/useSaveTrack"
import { useRemoveTrack } from "../../graphql/hooks/useRemoveTrack"

type PropTypes = { id: string; track: Track }

const TrackButton: React.FC<PropTypes> = ({ id, track }) => {
  const [saved, setSaved] = useState<boolean>()
  const save = useSaveTrack(id)
  const remove = useRemoveTrack(id)

  useEffect(() => {
    ;(async () => {
      const savedTracks = GraphQLClient.cache.readQuery<SavedTracksResult>({
        query: SavedTracksDocument,
      })

      if (!savedTracks) {
        const session = (await getSession()) as any
        const savedTracks = await GraphQLClient.query<SavedTracksResult>({
          query: SavedTracksDocument,
          context: { headers: { Authorization: session.accessToken } },
        })
        setSaved(() =>
          Boolean(
            savedTracks?.data.usersSavedTracks.items.find(
              item => item.track.id === id
            )
          )
        )
        return
      }

      setSaved(() =>
        Boolean(
          savedTracks?.usersSavedTracks.items.find(item => item.track.id === id)
        )
      )
    })()
  }, [])

  const handleSaveTrack = (event: BaseSyntheticEvent) => {
    event.stopPropagation()
    save()
    setSaved(true)
    GraphQLClient.cache.updateQuery<SavedTracksResult>(
      { query: SavedTracksDocument },
      data => {
        if (!data) {
          return {
            usersSavedTracks: {
              items: [track],
              total: 1,
            },
          }
        }

        return {
          usersSavedTracks: {
            items: [track, ...data.usersSavedTracks.items],
            total: data.usersSavedTracks.total + 1,
          },
        }
      }
    )
  }

  const handleRemoveTrack = (event: BaseSyntheticEvent) => {
    event.stopPropagation()
    remove()
    setSaved(false)
    GraphQLClient.cache.updateQuery<SavedTracksResult>(
      { query: SavedTracksDocument },
      data => {
        if (!data) return null

        return {
          usersSavedTracks: {
            items: data.usersSavedTracks.items.filter(
              item => item.track.id !== id
            ),
            total: data.usersSavedTracks.total - 1,
          },
        }
      }
    )
  }

  return (
    <Flex mr="20px">
      {saved ? (
        <Icon
          as={VscHeartFilled}
          color="spotify"
          fontSize="16px"
          _hover={{ color: "whatsapp.500" }}
          onClick={handleRemoveTrack}
        />
      ) : (
        <Icon
          as={VscHeart}
          fontSize="16px"
          color="gray.300"
          _hover={{ color: "white" }}
          onClick={handleSaveTrack}
        />
      )}
    </Flex>
  )
}

export default TrackButton
