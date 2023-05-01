import { Flex, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React from "react"
import { IconType } from "react-icons"

type PropTypes = {
  menu: {
    title: string
    route: `/${string}`
    icons?: readonly [IconType, IconType]
  }
}

const Menu: React.FC<PropTypes> = ({ menu }) => {
  const router = useRouter()
  const isActive = router.asPath === menu.route

  return (
    <ListItem
      color={isActive ? "white" : "gray.400"}
      py="6px"
      cursor="pointer"
      _hover={{ color: "white" }}
      transitionDuration={menu.icons ? "250ms" : undefined}
      fontWeight={menu.icons ? "700" : "600"}
      w="100%"
      userSelect="none"
      onClick={() => router.push(menu.route)}
    >
      <Flex align="center" gap="7px">
        {menu.icons && (
          <ListIcon
            as={isActive ? menu.icons[1] : menu.icons[0]}
            fontSize="26px"
          />
        )}
        <Text noOfLines={1}>{menu.title}</Text>
      </Flex>
    </ListItem>
  )
}

export default Menu
