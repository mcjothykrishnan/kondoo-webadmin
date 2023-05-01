/* eslint-disable */

// chakra imports
import { Box, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { IRoute } from 'types/navigation'
import {useState} from "react"

interface SidebarLinksProps {
  routes: IRoute[]
}

export function SidebarLinks (props: SidebarLinksProps) {
  const { routes } = props

  //   Chakra color mode
  const router = useRouter()

  let activeColor = useColorModeValue('gray.700', 'white')
  let inactiveColor = useColorModeValue(
    'secondaryGray.600',
    'secondaryGray.600'
  )
  let activeIcon = useColorModeValue('brand.500', 'white')
  let textColor = useColorModeValue('navy.700', 'white')
  let brandColor = useColorModeValue('brand.500', 'brand.400')

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return router.pathname.includes(routeName)
  }

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks = (routes: IRoute[], isChild = false) => {
    return routes.map((route, index: number) => {
      if (
        route.layout === '/kondoo-web-admin/admin' ||
        route.layout === '/kondoo-web-admin/auth' ||
        route.layout === '/kondoo-web-admin/rtl'
      ) {
        if (route.children) {
          // Render the sub-menu items
          const [isOpen, setIsOpen] = useState(false);
  
          const handleToggle = () => setIsOpen(!isOpen);
  
          return (
            <Box key={index}>
              <Flex
                alignItems="center"
                cursor="pointer"
                onClick={handleToggle}
                py="2"
                px={isChild ? "12" : "10"}
                bg={activeRoute(route.path.toLowerCase()) ? "gray.100" : ""}
              >
                {route.icon && (
                  <Box
                    color={
                      activeRoute(route.path.toLowerCase())
                        ? activeIcon
                        : textColor
                    }
                    me="18px"
                  >
                    {route.icon}
                  </Box>
                )}
                <Text
                  color={
                    activeRoute(route.path.toLowerCase())
                      ? activeColor
                      : inactiveColor
                  }
                  fontWeight={
                    activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                  }
                >
                  {route.name}
                </Text>
                {route.children && (
                  <Box
                    ml="auto"
                    mr="20px"
                    transform={isOpen ? "rotate(90deg)" : ""}
                    transition="transform 0.2s ease-in-out"
                  >
                    <svg viewBox="0 0 200 200" width="10" height="10">
                      <path
                        fill={activeRoute(route.path.toLowerCase()) ? activeIcon : textColor}
                        d="M30 60 L170 60 L100 140 z"
                      />
                    </svg>
                  </Box>
                )}
              </Flex>
              <Box pl="12" mb="2" display={isOpen ? "block" : "none"}>
                {createLinks(route.children, true)}
              </Box>
            </Box>
          );
        } else {
          // Render the regular menu items
          return (
            <Link key={index} href={route.layout + route.path}>
              <Box
                as="a"
                display="block"
                py="2"
                px={isChild ? "12" : "10"}
                borderBottomWidth="1px"
                borderBottomColor="gray.200"
                _hover={{ bg: "gray.100" }}
              >
                <Flex alignItems="center">
                  {route.icon && (
                    <Box
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeIcon
                          : textColor
                      }
                      me="18px"
                    >
                      {route.icon}
                    </Box>
                  )}
                  <Text
                    color={
                      activeRoute(route.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontWeight={
                      activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                    }
                  >
                    {route.name}
                  </Text>
                </Flex>
              </Box>
            </Link>
          );
        }
      }
    });
  };
  
  
  //  BRAND
  return <>{createLinks(routes)}</>
}

export default SidebarLinks
