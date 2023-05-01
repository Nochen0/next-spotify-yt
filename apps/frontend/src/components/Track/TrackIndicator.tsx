import { Box, Divider, Flex, Icon, Text, useMediaQuery } from "@chakra-ui/react"
import { HiOutlineClock } from "react-icons/hi"
import React from "react"

const TrackIndicator = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)")
  const [isLargerThan1050] = useMediaQuery("(min-width: 1050px)")

  return (
    <>
      <Flex
        align="center"
        fontWeight={500}
        py="4px"
        color="gray.300"
        pr="15px"
        pl="5px"
      >
        <Text w="50px" textAlign="center" fontSize="15px">
          #
        </Text>
        <Box
          w={
            isLargerThan800
              ? isLargerThan1050
                ? "calc(34% + 70px)"
                : "calc(34% + 57px)"
              : "calc(65% + 57px)"
          }
          mr="36px"
        >
          Title
        </Box>
        {isLargerThan800 && (
          <Box w="30%" mr="27px">
            Album
          </Box>
        )}
        {isLargerThan1050 && (
          <Box w="25%" mr="30px">
            Date added
          </Box>
        )}
        <Box w="10%" pl="6px">
          <Icon as={HiOutlineClock} fontSize="19px" />
        </Box>
      </Flex>
      <Divider
        orientation="horizontal"
        borderColor="gray.700"
        w="100%"
        mb="15px"
      />
    </>
  )
}

export default TrackIndicator
