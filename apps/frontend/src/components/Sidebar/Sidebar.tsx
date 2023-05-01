import { Box, Divider, Flex } from "@chakra-ui/react"
import React from "react"
import SpotifyLogo from "../UI/SpotifyLogo"
import Navmenu from "./Navmenu"
import Likesmenu from "./Likesmenu"
import Playlistmenu from "./Playlistmenu"

const Sidebar = () => {
  return (
    <Box
      pos="fixed"
      top="0"
      left="0"
      bottom="92px"
      w="265px"
      bg="black"
      px="22px"
    >
      <Flex h="90px" align="center">
        <SpotifyLogo h="40px" route="/" pointer />
      </Flex>
      <Navmenu />
      <Likesmenu />
      <Divider
        orientation="horizontal"
        borderColor="gray.800"
        mt="3px"
        mb="8px"
      />
      <Playlistmenu />
    </Box>
  )
}

export default Sidebar
