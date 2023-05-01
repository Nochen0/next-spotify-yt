import { List } from "@chakra-ui/react"
import React from "react"
import {
  RiHomeFill,
  RiHomeLine,
  RiSearchFill,
  RiSearchLine,
} from "react-icons/ri"
import { IoLibrary, IoLibraryOutline } from "react-icons/io5"
import Menu from "./Menu"

const items = [
  {
    title: "Home",
    route: "/",
    icons: [RiHomeLine, RiHomeFill],
  },
  {
    title: "Search",
    route: "/search",
    icons: [RiSearchLine, RiSearchFill],
  },
  {
    title: "Your Library",
    route: "/collection/playlists",
    icons: [IoLibraryOutline, IoLibrary],
  },
] as const

const Navmenu = () => {
  return (
    <List>
      {items.map(item => (
        <Menu menu={item} key={item.route} />
      ))}
    </List>
  )
}

export default Navmenu
