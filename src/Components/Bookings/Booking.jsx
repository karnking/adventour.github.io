import React, { useEffect, useState } from 'react'
import SecondaryNav from './SecondaryNav'
import HotelGrid from './HotelGrid'
import { Flex } from '@chakra-ui/react'
const Booking = () => {
  return (
    <Flex flexDirection={'column'} flex={1}>
      <SecondaryNav />
      <HotelGrid />
    </Flex>
  )
}

export default Booking