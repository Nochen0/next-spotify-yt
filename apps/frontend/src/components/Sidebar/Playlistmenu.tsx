import React from "react"
import useCurrentUsersPlaylists from "../../graphql/hooks/useCurrentUsersPlaylists"
import { List, Text } from "@chakra-ui/react"
import Menu from "./Menu"

const Playlistmenu = () => {
  const { data, error } = useCurrentUsersPlaylists("network-only")

  if (error) {
    return (
      <Text color="gray.300" noOfLines={1}>
        {error.message}
      </Text>
    )
  }
  if (!data) return null

  return (
    <List>
      {data.currentUsersPlaylists.items.map(item => (
        <Menu
          menu={{ title: item.name, route: `/playlist/${item.id}` }}
          key={item.id}
        />
      ))}
    </List>
  )
}

export default Playlistmenu
