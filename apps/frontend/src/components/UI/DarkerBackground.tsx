import { Box } from "@chakra-ui/react"
import React from "react"

type PropTypes = {
  children: React.ReactNode
}

const DarkerBackground: React.FC<PropTypes> = ({ children }) => {
  return (
    <Box bg="rgba(0, 0, 0, 0.2)" py="20px" px="32px">
      {children}
    </Box>
  )
}

export default DarkerBackground
