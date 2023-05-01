import { Box } from "@chakra-ui/react"
import React from "react"

type PropTypes = {
  color: string
  children: React.ReactNode
}

const GradientBackground: React.FC<PropTypes> = ({ color, children }) => {
  return (
    <Box pos="relative" w="100%" h="100%" minW="400px" userSelect="none">
      <Box
        pos="absolute"
        bgGradient={`linear(${color} 0%, ${color} 20%, ${color} 50%, #121212 80%)`}
        zIndex={0}
        height="650px"
        w="100%"
        h="700px"
      />
      <Box pos="relative">{children}</Box>
    </Box>
  )
}

export default GradientBackground
