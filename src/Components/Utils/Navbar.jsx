import { Avatar, Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../../images/app-logo.png'
import { NavLink } from 'react-router-dom'
import { RiFlightTakeoffFill, RiFlightTakeoffLine } from 'react-icons/ri'
import { FcBinoculars, FcGlobe, FcLandscape, FcLineChart, FcNfcSign } from "react-icons/fc";
const Navbar = () => {
  return (
    <Flex p='11px 4em' align={'center'} zIndex={'1000'} justifyContent={'space-between'} position={'fixed'} top='0' bg="#36b6e0" w="100%">
      <NavLink to='/'>
        <Flex align={'center'} gap='10px'>
          <Text fontFamily={"algerian"} fontWeight={'400'} fontSize={'2em'} color='white'>ADVENTOUR</Text>
          <RiFlightTakeoffFill color='white' size='2rem' />
        </Flex>
      </NavLink>
      <Flex w='40%' justifyContent={'space-around'} fontSize={'1.1rem'} fontWeight={'500'} color='white' align={'center'}>
        <NavLink to='/adventure/1'>Adventures</NavLink>
        <NavLink to='/booking'>Hotels</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <Box>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Navbar