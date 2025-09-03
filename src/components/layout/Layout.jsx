import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Flex, Box, Container} from "@chakra-ui/react"
import {Outlet} from "react-router"

const Layout = () => {
  return (
    <Flex flexDirection="column" minHeight="100vh" bg="#FFFFFF">
      <Navbar />
      <Box flex="1" as="main">
                <Container maxW="1024px" py="3.75rem" px={0} marginX="auto">
                    <Outlet />
                </Container>
            </Box>
      <Footer />
    </Flex>
  )
}

export default Layout
