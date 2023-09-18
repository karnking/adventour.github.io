import { Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../../images/app-logo.png'
const Navbar = () => {
  return (
    <Flex p='5px 50px' align={'center'} zIndex={'1000'}  position={'fixed'} top='0' bg="cyan.100" w="100vw">
        <Image src={logo} zIndex={'1000'} width={'100px'}/>

    </Flex>
  )
}

export default Navbar