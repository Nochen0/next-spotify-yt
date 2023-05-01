import { List } from "@chakra-ui/react"
import React from "react"
import Menu from "./Menu"
import { GiHeartWings } from "react-icons/gi"

const menu = {
  title: "Liked Songs",
  route: "/collection/tracks",
  icons: [GiHeartWings, GiHeartWings],
} as const

const Likesmenu = () => {
  return (
    <List mt="20px">
      <Menu menu={menu} />
    </List>
  )
}

export default Likesmenu
