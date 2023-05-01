import React from "react"
import Sidebar from "../Sidebar/Sidebar"
import { Box } from "@chakra-ui/react"
import Player from "../Player/Player"
import { useSession } from "next-auth/react"
import Login from "../Login/Login"

type PropTypes = {
  children: React.ReactNode
}

const Layout: React.FC<PropTypes> = ({ children }) => {
  const { status } = useSession()

  if (status === "loading") return null
  if (status === "unauthenticated") return <Login />

  return (
    <>
      <Sidebar />
      <Box
        overflowY="auto"
        overflowX="hidden"
        h="calc(100vh - 92px)"
        ml="265px"
        bg="#121212"
      >
        {children}
      </Box>
      <Player />
    </>
  )
}

export default Layout
