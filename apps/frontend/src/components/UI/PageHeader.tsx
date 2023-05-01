import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"
import React from "react"

type PropTypes = {
  imageUrl: string
  rounded?: boolean
  type: "Playlist"
  title: string
  description?: string
  children: React.ReactNode
}

const PageHeader: React.FC<PropTypes> = ({
  imageUrl,
  rounded,
  type,
  title,
  description,
  children,
}) => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")

  return (
    <Flex h="356px" align="end" pb="22px" pl="28px" gap="22px">
      <Image
        src={imageUrl}
        alt={type}
        h={isLargerThan1280 ? "230px" : "190px"}
        w={isLargerThan1280 ? "230px" : "190px"}
        minH={isLargerThan1280 ? "230px" : "190px"}
        minW={isLargerThan1280 ? "230px" : "190px"}
        rounded={rounded ? "full" : "none"}
        draggable={false}
        boxShadow="dark-lg"
      />
      <Box color="white">
        <Text>{type}</Text>
        <Heading
          fontSize={isLargerThan1280 ? "8xl" : "7xl"}
          fontWeight="800"
          mb="8px"
          noOfLines={1}
        >
          {title}
        </Heading>
        <Text color="rgba(255, 255, 255, 0.6)" mb="7px" fontWeight="500">
          {description}
        </Text>
        <Flex gap="5px" color="white" fontWeight="500" w="max-content">
          {children}
        </Flex>
      </Box>
    </Flex>
  )
}

export default PageHeader
