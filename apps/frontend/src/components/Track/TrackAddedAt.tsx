import { Box, useMediaQuery } from "@chakra-ui/react"
import React from "react"
import { dateStringToDate } from "../../utils/time-utils"

type PropTypes = {
  addedAt: string
}

const TrackAddedAt: React.FC<PropTypes> = ({ addedAt }) => {
  const [isLargerThan1050] = useMediaQuery("(min-width: 1050px)")

  return isLargerThan1050 ? (
    <Box w="25%" mr="30px">
      {dateStringToDate(addedAt)}
    </Box>
  ) : null
}

export default TrackAddedAt
