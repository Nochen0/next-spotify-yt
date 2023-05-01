import { Icon, Tooltip } from "@chakra-ui/react"
import React from "react"
import { VscHeart, VscHeartFilled } from "react-icons/vsc"
import useCurrentUsersPlaylists, {
  CurrentUsersPlaylistsDocument,
  CurrentUsersPlaylistsResult,
} from "../../graphql/hooks/useCurrentUsersPlaylists"
import { GraphQLClient } from "../../graphql/graphql-client"
import useSavePlaylist from "../../graphql/hooks/useSavePlaylist"
import useRemovePlaylist from "../../graphql/hooks/useRemovePlaylist"

type PropTypes = {
  id: string
  name: string
}

const PlaylistButton: React.FC<PropTypes> = ({ id, name }) => {
  const { data } = useCurrentUsersPlaylists("cache-only")
  const save = useSavePlaylist(id)
  const remove = useRemovePlaylist(id)

  const removePlaylist = () => {
    remove()
    GraphQLClient.cache.updateQuery<CurrentUsersPlaylistsResult>(
      { query: CurrentUsersPlaylistsDocument },
      data => {
        if (!data) return null
        return {
          currentUsersPlaylists: {
            items: data.currentUsersPlaylists.items.filter(
              item => item.id !== id
            ),
          },
        }
      }
    )
  }

  const savePlaylist = () => {
    save()
    GraphQLClient.cache.updateQuery<CurrentUsersPlaylistsResult>(
      { query: CurrentUsersPlaylistsDocument },
      data => {
        if (!data) return { currentUsersPlaylists: { items: [{ id, name }] } }
        return {
          currentUsersPlaylists: {
            items: [{ id, name }, ...data.currentUsersPlaylists.items],
          },
        }
      }
    )
  }

  return data?.currentUsersPlaylists.items.find(item => item.id === id) ? (
    <Tooltip
      shouldWrapChildren
      bg="#181818"
      placement="top"
      label="Remove from your library"
      openDelay={500}
      rounded="md"
      fontSize="12.5px"
      py="5px"
      mb="-2px"
    >
      <Icon
        as={VscHeartFilled}
        fontSize="36px"
        color="spotify"
        onClick={removePlaylist}
        _hover={{ color: "whatsapp.500" }}
      />
    </Tooltip>
  ) : (
    <Tooltip
      shouldWrapChildren
      bg="#181818"
      placement="top"
      label="Save to your library"
      openDelay={500}
      rounded="md"
      fontSize="12.5px"
      py="5px"
      mb="-2px"
    >
      <Icon
        as={VscHeart}
        fontSize="36px"
        color="gray.300"
        onClick={savePlaylist}
        _hover={{ color: "white" }}
      />
    </Tooltip>
  )
}

export default PlaylistButton
